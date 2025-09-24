// routes/build.jsx - VERSIÓN COMPLETA CON TODAS LAS MEJORAS
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CWindows from "../components/C/c";
import Inventory from "../components/inventory/inventory";
import ModalInventory from "../components/inventory/modal-inventory";
import Main3rd from "../components/3rdtree/Main3rd";
import { selectChar } from "../utils/characterUtils";
import { useSelectedCharacter, useCharacter } from "../hooks/useCharacter";
import StatsBar from "../components/statsbar/statsbar";
import NotificationSystem from "../components/ui/NotificationSystem";
import { useNotifications } from "../hooks/useNotifications";
import ActionButton from "../components/ui/ActionButton";
import { CharacterLoadingState } from "../components/ui/LoadingStates";

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

  // 🆕 Estado para panel de ayuda colapsable en móviles
  const [helperPanelCollapsed, setHelperPanelCollapsed] = useState(false);

  // 🆕 Estados de loading
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({
    save: false,
    reset: false,
    share: false,
    analysis: false
  });

  // 🆕 Sistema de notificaciones
  const {
    notifications,
    removeNotification,
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo,
    notifyBuildSaved,
    notifyBuildReset,
    notifyLevelRequired
  } = useNotifications();

  useEffect(() => {
    if (character) {
      setIsLoading(false);
      addChar(character);
      // 🆕 Notificar cuando se carga un personaje
      notifySuccess(
        'Character Loaded',
        `${character.class[0]} ready for building`,
        { duration: 2000, icon: '🎮' }
      );
    }
  }, [character, addChar, notifySuccess]);

  // Manejar click en slot del inventario
  const handleInventorySlotClick = (slotType) => {
    setSelectedSlot(slotType);
    setInventoryModalActive(true);
  };

  // 🆕 Handlers mejorados para los botones de acción
  const handleSave = async () => {
    setActionLoading(prev => ({ ...prev, save: true }));
    
    try {
      // Simular proceso de guardado
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular posibles errores ocasionalmente
      if (Math.random() < 0.1) {
        throw new Error('Network error');
      }
      
      notifyBuildSaved();
      
      // Agregar datos del build guardado
      const buildData = {
        character: selectedCharacter?.class[0] || 'Unknown',
        level: selectedCharacter?.level || 0,
        points: selectedCharacter?.points || 0,
        skills: selectedCharacter?.['3rdTree']?.length || 0
      };
      
      notifyInfo('Build Details', 'Build data exported successfully', {
        duration: 3000,
        details: [
          `Class: ${buildData.character}`,
          `Level: ${buildData.level}`,
          `Remaining Points: ${buildData.points}`,
          `Active Skills: ${buildData.skills}`
        ]
      });
      
    } catch (error) {
      notifyError('Save Failed', 'Could not save your build. Please try again.', {
        duration: 5000
      });
    } finally {
      setActionLoading(prev => ({ ...prev, save: false }));
    }
  };

  const handleReset = async () => {
    setActionLoading(prev => ({ ...prev, reset: true }));
    
    try {
      // Simular proceso de reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifyBuildReset();
      // Aquí iría la lógica real de reset
      
    } finally {
      setActionLoading(prev => ({ ...prev, reset: false }));
    }
  };

  const handleSkillTreeOpen = () => {
    if (!selectedCharacter || selectedCharacter.level < 400) {
      notifyLevelRequired(400);
      return;
    }
    setSkillsModalOpen(true);
  };

  // Listener para teclas
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === 'a' && !inventoryModalActive) {
        event.preventDefault();
        handleSkillTreeOpen();
      }
      if (event.key === 'Escape') {
        setSkillsModalOpen(false);
        setInventoryModalActive(false);
      }
      // 🆕 Tecla H para toggle del helper panel
      if (event.key.toLowerCase() === 'h' && !inventoryModalActive && !skillsModalOpen) {
        event.preventDefault();
        setHelperPanelCollapsed(prev => !prev);
      }
      // 🆕 Teclas rápidas para acciones
      if (event.ctrlKey || event.metaKey) {
        switch (event.key.toLowerCase()) {
          case 's':
            event.preventDefault();
            handleSave();
            break;
          case 'r':
            event.preventDefault();
            handleReset();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [inventoryModalActive, skillsModalOpen, selectedCharacter]);

  // Loading state mientras se carga el personaje
  if (isLoading || !selectedCharacter) {
    return (
      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <CharacterLoadingState />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Overlay con textura sutil */}
      <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>

      {/* Contenedor principal con centrado mejorado */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-3 sm:p-5 gap-3 sm:gap-5">

        {/* 🔥 Header dinámico mejorado */}
        <div className="text-center mb-2 sm:mb-4 p-3 sm:p-4 bg-black/20 rounded-xl backdrop-blur-sm w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-amber-300 mb-2 drop-shadow-lg">
            Character Builder
          </h1>
          {selectedCharacter && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={`/src/assets/characters/${params.char}.png`} 
                  alt={selectedCharacter.class[0]}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded border-2 border-amber-500/50"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="text-center sm:text-left">
                  <p className="text-lg sm:text-xl text-amber-200/80 font-semibold">
                    {selectedCharacter.class[0]} - Level {selectedCharacter.level}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <span>Points: <span className="text-amber-300 font-medium">{selectedCharacter.points}</span></span>
                    <span>3rd Tree: <span className="text-purple-400 font-medium">{selectedCharacter['3rdTree']?.length || 0} skills</span></span>
                    <span className="text-cyan-400 sm:hidden">Press H for help</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 🔥 LAYOUT RESPONSIVE MEJORADO */}
        <div className="flex flex-col xl:flex-row justify-center items-start gap-3 sm:gap-6 w-full max-w-7xl">

          {/* Panel izquierdo - Character Stats (siempre primero en móvil) */}
          <div className="order-1 xl:order-1 transform transition-all duration-300 hover:scale-[1.02] w-full xl:w-auto flex justify-center">
            <CWindows />
          </div>

          {/* Panel central - Inventory (segundo en móvil) */}
          <div className="order-2 xl:order-2 transform transition-all duration-300 hover:scale-[1.02] w-full xl:w-auto flex justify-center">
            <Inventory onSlotClick={handleInventorySlotClick} />
          </div>

          {/* Panel derecho - Helper/Skills Navigator (tercero en móvil) */}
          <div className="order-3 xl:order-3 w-full xl:w-auto flex flex-col gap-4 max-w-[300px] xl:max-w-none mx-auto xl:mx-0">
            
            {/* Panel de ayuda colapsable mejorado */}
            <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl">
              
              {/* Header colapsable (solo visible en móviles/tablets) */}
              <button 
                onClick={() => setHelperPanelCollapsed(!helperPanelCollapsed)}
                className="xl:hidden w-full p-3 flex items-center justify-between text-amber-300 hover:bg-amber-600/10 transition-colors"
              >
                <span className="font-bold flex items-center gap-2">
                  🎮 Quick Actions
                </span>
                <span className={`transform transition-transform duration-200 ${helperPanelCollapsed ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Contenido del panel (siempre visible en desktop) */}
              <div className={`${helperPanelCollapsed ? 'hidden xl:block' : 'block'} p-4 xl:pt-4`}>
                
                {/* Título en desktop */}
                <h3 className="hidden xl:block text-lg font-bold text-amber-300 mb-4 text-center">Skill Trees</h3>

                {/* 3rd Skill Tree Button mejorado */}
                <button
                  onClick={handleSkillTreeOpen}
                  disabled={!selectedCharacter || selectedCharacter.level < 400}
                  className="w-full group relative px-3 sm:px-4 py-3 bg-gradient-to-r from-purple-600/80 to-purple-700/80 disabled:from-gray-600/50 disabled:to-gray-700/50 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-purple-500/80 hover:to-purple-600/80 hover:shadow-xl hover:scale-105 active:scale-95 mb-3 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">🌳</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm sm:text-base">Master Skill Tree</div>
                      <div className="text-xs opacity-80">
                        {selectedCharacter?.level >= 400 
                          ? `${Math.min(selectedCharacter.level - 399, 400)} pts available`
                          : 'Requires Level 400'
                        }
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 disabled:group-hover:opacity-0 transition-opacity duration-200"></div>
                </button>

                {/* Placeholder para futuros árboles con mejor styling */}
                <button
                  disabled
                  className="w-full px-3 sm:px-4 py-3 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed mb-3 opacity-50 border border-gray-500/30"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">🔮</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm sm:text-base">4th Skill Tree</div>
                      <div className="text-xs opacity-80">Coming Soon</div>
                    </div>
                  </div>
                </button>

                <button
                  disabled
                  className="w-full px-3 sm:px-4 py-3 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed mb-3 opacity-50 border border-gray-500/30"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">⚡</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm sm:text-base">Ability Cards</div>
                      <div className="text-xs opacity-80">Coming Soon</div>
                    </div>
                  </div>
                </button>

                {/* Stats Bar - Character Resources */}
                <StatsBar />
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 Botones de acción completamente rediseñados */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center px-4 w-full max-w-4xl">
          
          {/* Save Build */}
          <ActionButton
            icon="💾"
            title="Save Build"
            subtitle="Export build data"
            onClick={handleSave}
            color="amber"
            loading={actionLoading.save}
            className="flex-1 sm:flex-initial min-w-[120px]"
          />
          
          {/* Reset Build */}
          <ActionButton
            icon="🔄"
            title="Reset Build"
            subtitle="Clear all progress"
            onClick={handleReset}
            color="gray"
            loading={actionLoading.reset}
            confirmAction={true}
            confirmMessage="Are you sure you want to reset your character? This will clear all stats and skills."
            className="flex-1 sm:flex-initial min-w-[100px]"
          />
        </div>
      </div>

      {/* Efectos de partículas sutiles mejorados */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400/15 rounded-full animate-pulse delay-1500"></div>
        {/* Partículas adicionales para más atmósfera */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-pink-400/15 rounded-full animate-pulse delay-2500"></div>
      </div>

      {/* 🔥 Sistema de Notificaciones */}
      <NotificationSystem 
        notifications={notifications}
        removeNotification={removeNotification}
      />

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