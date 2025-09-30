// routes/build.jsx - VERSIÓN CON SISTEMA DE BUILDS
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import CWindows from "../components/C/c";
import Inventory from "../components/inventory/inventory";
import ModalInventory from "../components/inventory/modal-inventory";
import Main3rd from "../components/3rdtree/Main3rd";
import { useSelectedCharacter, useCharacters } from "../hooks/useCharacter";
import StatsBar from "../components/statsbar/statsbar";
import NotificationSystem from "../components/ui/NotificationSystem";
import { useNotifications } from "../hooks/useNotifications";
import { CharacterLoadingState } from "../components/ui/LoadingStates";
import { classChar } from '../utils/characterUtils';
import AdSidebar from "../components/ui/AdSidebar";
import { charSelectedStore } from "../store/charSelected";



export default function Build() {

  const FEATURES = {
    INVENTORY_ENABLED: false, // Cambiar a true cuando esté listo
    FOURTH_TREE_ENABLED: false,
    ABILITY_CARDS_ENABLED: false
  };

  const params = useParams();
  const buildId = params.buildId; // <- Cambio principal

  // Usar hooks de Valtio
  const { character: selectedCharacter, addChar, loadCharacterData } = useSelectedCharacter();
  const characters = useCharacters();

  const currentClass = classChar(selectedCharacter);
  // Estados
  const [buildData, setBuildData] = useState(null);
  const [inventoryModalActive, setInventoryModalActive] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);
  const [helperPanelCollapsed, setHelperPanelCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({
    save: false,
    reset: false,
    share: false,
    analysis: false
  });

  // Sistema de notificaciones
  const {
    notifications,
    removeNotification,
    notifySuccess,
    notifyError,
    notifyBuildReset,
    notifyLevelRequired
  } = useNotifications();

  const saveBuildToStorage = useCallback(() => {
    if (!buildData) return;

    // ✅ USAR directamente el proxy store, NO el snapshot
    const currentCharacter = charSelectedStore.selectedCharacter;

    if (!currentCharacter) return;

    console.log('Saving character stats:', currentCharacter.stats); // ✅ Debug

    const updatedBuildData = {
      ...buildData,
      level: currentCharacter.level,
      lastModified: new Date().toISOString(),
      characterData: currentCharacter // ✅ Usar el proxy directo
    };

    const savedBuilds = localStorage.getItem('mubuilds');
    const builds = savedBuilds ? JSON.parse(savedBuilds) : [];
    const buildIndex = builds.findIndex(build => build.id === buildId);

    if (buildIndex !== -1) {
      builds[buildIndex] = updatedBuildData;
      localStorage.setItem('mubuilds', JSON.stringify(builds));
    }
  }, [buildData, buildId]); // ✅ Quitar selectedCharacter de las dependencias

  const handleSkillTreeOpen = useCallback(() => {
    if (!selectedCharacter || selectedCharacter.level < 400) {
      notifyLevelRequired(400);
      return;
    }
    setSkillsModalOpen(true);
  }, [selectedCharacter, notifyLevelRequired]);

  // Cargar build desde localStorage
  useEffect(() => {
    const loadBuild = () => {
      const savedBuilds = localStorage.getItem('mubuilds');
      if (savedBuilds) {
        const builds = JSON.parse(savedBuilds);
        const currentBuild = builds.find(build => build.id === buildId);
        if (currentBuild) {
          setBuildData(currentBuild);
          // Si el build tiene datos de personaje guardados, cargarlos
          if (currentBuild.characterData) {
            loadCharacterData(currentBuild.characterData);
          } else {
            // Si es un build nuevo, crear desde template
            const template = Object.values(characters).find(char =>
              char.class[0] === currentBuild.class
            );
            if (template) {
              addChar(template);
            }
          }

          setIsLoading(false);
          notifySuccess(
            'Build Loaded',
            `${currentBuild.name} ready for building`,
            { duration: 2000, icon: '🎮' }
          );
        } else {
          window.location.href = '/';
        }
      } else {
        window.location.href = '/';
      }
    };

    loadBuild();
  }, [buildId, addChar, characters, notifySuccess]);


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === 'a' && !inventoryModalActive) {
        event.preventDefault();
        // Toggle del skill tree: si está abierto lo cierra, si está cerrado lo abre
        if (skillsModalOpen) {
          setSkillsModalOpen(false);
        } else {
          handleSkillTreeOpen();
        }
      }
      if (event.key === 'Escape') {
        setSkillsModalOpen(false);
        setInventoryModalActive(false);
      }
      if (event.key.toLowerCase() === 'h' && !inventoryModalActive && !skillsModalOpen) {
        event.preventDefault();
        setHelperPanelCollapsed(prev => !prev);
      }
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
  }, [inventoryModalActive, skillsModalOpen, selectedCharacter, handleSkillTreeOpen]);

  const handleInventorySlotClick = (slotType) => {
    setSelectedSlot(slotType);
    setInventoryModalActive(true);
  };

  // Handlers mejorados para los botones de acción
  const handleSave = async () => {
    setActionLoading(prev => ({ ...prev, save: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      saveBuildToStorage();
      // ✅ AGREGAR: Actualizar buildData local para que se vea la nueva hora
      setBuildData(prev => ({
        ...prev,
        lastModified: new Date().toISOString()
      }));

      notifySuccess('Build Saved', `${buildData.name} saved successfully!`);

    } catch (error) {
      notifyError('Save Failed', 'Could not save your build. Please try again.');
    } finally {
      setActionLoading(prev => ({ ...prev, save: false }));
    }
  };

  const handleReset = async () => {
    if (!window.confirm('Are you sure you want to reset your character? This will clear all stats and skills.')) {
      return;
    }

    setActionLoading(prev => ({ ...prev, reset: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (buildData && characters) {
        const template = Object.values(characters).find(char =>
          char.class[0] === buildData.class
        );
        if (template) {
          addChar(template);
        }
      }

      notifyBuildReset();

    } finally {
      setActionLoading(prev => ({ ...prev, reset: false }));
    }
  };

  if (isLoading || !selectedCharacter || !buildData) {
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
      {/* Fondo único que cubre toda la página */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      <div className="hidden xl:flex min-h-screen relative z-10">
        {/* Contenido principal existente */}
        <div className="flex-1  from-slate-900 via-gray-900 to-black">
          {/* Overlay con textura sutil */}
          <div className="absolute inset-0 "></div>

          {/* Contenedor principal con centrado mejorado */}
          <div className="relative z-10 flex flex-col min-h-screen">
            |
            {/* Header rediseñado con controles integrados */}
            <div className="w-full flex justify-center mb-6">
              <div className="p-4 rounded-xl w-full max-w-4xl bg-black/40 border border-amber-500/30 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

                  {/* Sección izquierda - Info del build y personaje */}
                  <div className="flex items-center gap-4">
                    <img
                      src={`/characters/${buildData.character}.png`}
                      alt={currentClass}
                      className="w-12 h-12 sm:w-17 sm:h-14 object-contain rounded-lg border-2 border-amber-500/50 p-1"
                    />
                    <div className="text-left">
                      <h1 className="text-xl sm:text-2xl font-bold text-amber-300 mb-1">
                        {buildData.name}
                      </h1>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                        <span>{currentClass} - Level {selectedCharacter.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sección central - Info adicional */}
                  <div className="flex items-center gap-3 px-3 py-2 border border-gray-600/50">
                    <span className="text-xs text-gray-400">Last saved:</span>
                    <span className="text-xs text-amber-300">
                      {buildData?.lastModified
                        ? new Date(buildData.lastModified).toLocaleTimeString()
                        : 'Never'
                      }
                    </span>
                  </div>

                  {/* Sección derecha - Botones de acción */}
                  <div className="flex gap-2">

                    {/* Back Button */}
                    <button
                      onClick={() => window.location.href = '/'}
                      className="group relative px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 text-sm"
                    >
                      <span className="flex items-center gap-2">
                        🏠 <span className="hidden sm:inline">Back</span>
                      </span>
                      <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>

                    {/* Save Button */}
                    <button
                      onClick={handleSave}
                      disabled={actionLoading.save}
                      className={`group relative px-3 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 disabled:transform-none disabled:shadow-none text-white font-medium rounded-lg shadow-md text-sm ${actionLoading.save ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <span className="flex items-center gap-2">
                        {actionLoading.save ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Saving...</span>
                          </>
                        ) : (
                          <>
                            💾 <span className="hidden sm:inline">Save</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 disabled:group-hover:opacity-0 transition-opacity duration-200"></div>
                    </button>

                    {/* Reset Button */}
                    <button
                      onClick={handleReset}
                      disabled={actionLoading.reset}
                      className={`group relative px-3 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 disabled:transform-none disabled:shadow-none text-sm ${actionLoading.reset ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        {actionLoading.reset ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Reset...</span>
                          </>
                        ) : (
                          <>
                            🔄 <span className="hidden sm:inline">Reset</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 disabled:group-hover:opacity-0 transition-opacity duration-200"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LAYOUT RESPONSIVE CENTRADO */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6">

              {/* Contenedor superior - CWindows e Inventory lado a lado - CENTRADO */}
              <div className="flex flex-col xl:flex-row justify-center items-start gap-6">

                {/* Panel izquierdo - Character Stats */}
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <CWindows />
                </div>

                {/* Panel derecho - Inventory + Helper Panel debajo */}
                <div className="flex flex-col gap-4">

                  {/* Inventory arriba */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    {FEATURES.INVENTORY_ENABLED ? (
                      <Inventory onSlotClick={handleInventorySlotClick} />
                    ) : (
                      // Mantener el mismo contenedor con la imagen de fondo
                      <div className="relative bg-[url('./assets/windows-stats/inventory.png')] w-[310px] h-[345px] border border-amber-600/30 rounded-lg">
                        {/* Overlay semi-transparente */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
                          {/* Contenido "Coming Soon" */}
                          <div className="text-center p-6">
                            <div className="text-4xl mb-3 opacity-80">⚔️</div>
                            <h3 className="text-amber-300 font-bold text-lg mb-2">Equipment System</h3>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              Advanced item management<br />
                              and customization
                            </p>
                            <div className="px-3 py-1 bg-amber-600/20 border border-amber-600/50 rounded-full">
                              <span className="text-amber-300 text-xs font-medium">Coming Soon</span>
                            </div>
                          </div>
                        </div>
                        {/* Opcional: Efecto de "construcción" */}
                        <div className="absolute top-2 right-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Helper Panel debajo del Inventory - CON ALTURA LIMITADA */}
                  <div className="w-[310px]"> {/* Mismo ancho que Inventory */}
                    {/* Panel de ayuda colapsable mejorado */}
                    <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl h-fit max-h-[280px]">

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

                      {/* Contenido del panel - CON SCROLL SI ES NECESARIO */}
                      <div className={`${helperPanelCollapsed ? 'hidden xl:block' : 'block'} p-3 xl:pt-3 overflow-y-auto max-h-[280px]`}>

                        {/* Título en desktop - MÁS COMPACTO */}
                        <h3 className="hidden xl:block text-base font-bold text-amber-300 mb-3 text-center">Skill Trees</h3>

                        {/* 3rd Skill Tree Button - MÁS COMPACTO */}
                        <button
                          onClick={handleSkillTreeOpen}
                          disabled={!selectedCharacter || selectedCharacter.level < 400}
                          className="w-full group relative px-2 py-2 bg-gradient-to-r from-purple-600/80 to-purple-700/80 disabled:from-gray-600/50 disabled:to-gray-700/50 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:from-purple-500/80 hover:to-purple-600/80 hover:shadow-xl hover:scale-105 active:scale-95 mb-2 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm">🌳</span>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold">Master Skill Tree</div>
                              <div className="text-xs opacity-80">
                                {selectedCharacter?.level >= 400
                                  ? (() => {
                                    const totalPoints = Math.min(selectedCharacter.level - 399, 400);
                                    const spentPoints = selectedCharacter['3rdTree']?.reduce((total, skill) => {
                                      return total + (skill.level || 0);
                                    }, 0) || 0;
                                    const remainingPoints = totalPoints - spentPoints;
                                    return `${remainingPoints} pts remaining`;
                                  })()
                                  : 'Requires Level 400'
                                }
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 disabled:group-hover:opacity-0 transition-opacity duration-200"></div>
                        </button>

                        {/* Placeholder para futuros árboles - MÁS COMPACTOS */}
                        <button
                          disabled
                          className="w-full px-2 py-2 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed mb-2 opacity-50 border border-gray-500/30"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm">🔮</span>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold">4th Skill Tree</div>
                              <div className="text-xs opacity-80">Coming Soon</div>
                            </div>
                          </div>
                        </button>

                        <button
                          disabled
                          className="w-full px-2 py-2 bg-gray-600/50 text-gray-400 font-bold rounded-lg shadow-lg cursor-not-allowed opacity-50 border border-gray-500/30"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm">⚡</span>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold">Ability Cards</div>
                              <div className="text-xs opacity-80">Coming Soon</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar - Abajo CENTRADO con el ancho de los componentes superiores */}
              <div className="flex justify-center">
                <div className="">
                  <StatsBar character={selectedCharacter} />
                </div>
              </div>
            </div>
          </div>

          {/* Efectos de partículas sutiles mejorados */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/25 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400/15 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-pink-400/15 rounded-full animate-pulse delay-2500"></div>
          </div>
        </div> {/* Cierre del contenido principal */}
      </div> {/* Cierre del flex container */}

      {/* Sistema de Notificaciones */}
      <NotificationSystem
        notifications={notifications}
        removeNotification={removeNotification}
      />

      {
        inventoryModalActive && (
          <>
            <ModalInventory
              modalActive={inventoryModalActive}
              setModalActive={setInventoryModalActive}
              slotType={selectedSlot}
            />
          </>
        )
      }

      {/* Skills Modal - se abre con tecla "A" */}
      <Main3rd
        isOpen={skillsModalOpen}
        onClose={() => setSkillsModalOpen(false)}
        character={selectedCharacter}
      />
    </div >

  );
}