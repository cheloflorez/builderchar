// routes/build.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CWindows from "../components/C/c";
import Inventory from "../components/inventory/inventory";
import ModalInventory from "../components/inventory/modal-inventory";
import Main3rd from "../components/3rdtree/Main3rd";
import { selectChar } from "../utils/characterUtils";
import { useSelectedCharacter, useCharacter } from "../hooks/useCharacter";
import StatsBar from "../components/statsbar/statsbar";

export default function Build() {
  const params = useParams();
  const { charName } = selectChar(params.char);

  // Usar hooks de Valtio
  const { character: selectedCharacter, addChar } = useSelectedCharacter();
  const character = useCharacter(charName);

  // Estados del modal a nivel global
  const [inventoryModalActive, setInventoryModalActive] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  // Estado del modal de skills
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);

  useEffect(() => {
    if (character) {
      addChar(character);
    }
  }, [character, addChar]);

  // Manejar click en slot del inventario
  const handleInventorySlotClick = (slotType) => {
    setSelectedSlot(slotType);
    setInventoryModalActive(true);
  };

  // Listener para la tecla "A" para abrir/cerrar skills modal
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === 'a' && !inventoryModalActive) {
        event.preventDefault();
        setSkillsModalOpen(prev => !prev);
      }
      if (event.key === 'Escape') {
        setSkillsModalOpen(false);
        setInventoryModalActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [inventoryModalActive]);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Overlay con textura sutil */}
      <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>

      {/* Contenedor principal con centrado mejorado */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-5 gap-5">

        {/* Header con título del personaje */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-amber-300 mb-2 drop-shadow-lg">
            Character Builder
          </h1>
          {selectedCharacter && (
            <p className="text-xl text-amber-200/80">
              {selectedCharacter.class[0]} - Level {selectedCharacter.level}
            </p>
          )}
        </div>

        {/* Layout principal - tres paneles lado a lado */}
        <div className="flex justify-center items-start gap-6 w-full max-w-7xl">

          {/* Panel central/izquierdo - Character Stats (siempre visible) */}
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <CWindows />
          </div>

          {/* Panel central/derecho - Inventory */}
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <Inventory onSlotClick={handleInventorySlotClick} />
          </div>

          {/* Panel derecho - Helper/Skills Navigator */}
          <div className="flex flex-col gap-4">
            {/* Skills Helper Panel */}
            <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 min-w-[200px]">
              <h3 className="text-lg font-bold text-amber-300 mb-4 text-center">Skill Trees</h3>

              {/* 3rd Skill Tree Button */}
              <button
                onClick={() => setSkillsModalOpen(true)}
                className="w-full group relative px-4 py-3 bg-gradient-to-r from-purple-600/80 to-purple-700/80 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-purple-500/80 hover:to-purple-600/80 hover:shadow-xl hover:scale-105 active:scale-95 mb-3"
              >
                <span className="flex items-center justify-center gap-2">
                  🌳 Master Skill Tree
                </span>
                <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>

              {/* Placeholder para futuros árboles */}
              <button
                disabled
                className="w-full px-4 py-3 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed mb-3 opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  🔮 Skill Enhancement Tree
                </span>
                <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
              </button>

              <button
                disabled
                className="w-full px-4 py-3 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed mb-3 opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  ⚡ Abilitys Card Book
                </span>
                <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
              </button>

              {/* Información del 3rd tree si hay puntos */}
              {selectedCharacter && selectedCharacter.level >= 400 && (
                <div className="mt-4 p-3 bg-black/30 rounded-lg border border-purple-600/30">
                  <div className="text-xs text-purple-400 font-semibold mb-2">3rd Tree Info:</div>
                  <div className="text-xs text-gray-300">
                    <div>Available: {Math.min(selectedCharacter.level - 399, 400)} pts</div>
                    {selectedCharacter['3rdTree'] && selectedCharacter['3rdTree'].length > 0 && (
                      <div className="text-green-400">
                        Skills: {selectedCharacter['3rdTree'].length} active
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* NUEVA SECCIÓN: Character Resources/Stats Orbs */}
              <StatsBar />

              {/* Keyboard shortcuts */}
              <div className="mt-4 p-3 bg-black/20 rounded-lg border border-gray-600/30">
                <div className="text-xs text-gray-400 font-semibold mb-2">Shortcuts:</div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded">A</kbd> - 3rd Tree</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded">Esc</kbd> - Close Modal</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded">Click</kbd> - Equip Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción mejorados */}
        <div className="flex gap-4 mt-6">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-amber-500 hover:to-amber-600 hover:shadow-xl hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              💾 Save Build
            </span>
            <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>

          <button className="group relative px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-gray-500 hover:to-gray-600 hover:shadow-xl hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              🔄 Reset
            </span>
            <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>

          <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              📤 Share Build
            </span>
            <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
        </div>
      </div>

      {/* Efectos de partículas sutiles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Modal de Inventario - NIVEL SUPERIOR */}
      {inventoryModalActive && (
        <ModalInventory
          modalActive={inventoryModalActive}
          setModalActive={setInventoryModalActive}
          slotType={selectedSlot}
        />
      )}

      {/* Skills Modal - se abre con tecla "A" */}
      <Main3rd
        isOpen={skillsModalOpen}
        onClose={() => setSkillsModalOpen(false)}
        character={selectedCharacter}
      />
    </div>
  );
}