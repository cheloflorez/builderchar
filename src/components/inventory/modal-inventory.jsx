// components/inventory/modal-inventory.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../hooks/useCharacter";
import { ITEMS_DATABASE } from "../../database/itemsDatabase";
import { EXCELLENT_OPTIONS } from "../../database/excellentOptions";
import { ANCIENT_SETS } from "../../database/ancientSets";

export default function ModalInventory({ modalActive, setModalActive, slotType }) {
  const { character, addItem } = useSelectedCharacter();
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemConfiguration, setItemConfiguration] = useState({
    upgradeLevel: 0,
    activeExcellentOptions: [],
    activeAncientSet: null,
    hasLuck: false,
    hasJewelOfLife: false
  });

  // Obtener item template por ID
  const getItemTemplate = (itemId) => {
    return ITEMS_DATABASE[itemId];
  };

  // Obtener item actualmente equipado
  const getCurrentEquippedItem = () => {
    if (!character?.items) return null;
    
    const items = character.items;
    
    switch (slotType) {
      case "helm":
      case "armor":
      case "pants":
      case "gloves":
      case "boots":
      case "weapon1":
      case "weapon2":
        return items.set?.[slotType];
      case "earringL":
        return items.earrings?.left;
      case "earringR":
        return items.earrings?.right;
      case "ringL":
        return items.rings?.left;
      case "ringR":
        return items.rings?.right;
      case "pet":
      case "wings":
      case "pendant":
      case "artifact":
      case "pentagram":
      case "neck":
        return items[slotType];
      default:
        return null;
    }
  };

  const currentEquippedItem = getCurrentEquippedItem();

  // Filtrar items disponibles para el slot actual
  useEffect(() => {
    if (!character) return;

    const items = Object.values(ITEMS_DATABASE).filter(item => {
      // Filtrar por tipo de slot
      let isCorrectType = false;
      
      // Mapear slot types correctamente
      switch (slotType) {
        case "helm":
        case "armor":  
        case "pants":
        case "gloves":
        case "boots":
          isCorrectType = item.type === slotType;
          break;
        case "weapon1":
        case "weapon2":
          isCorrectType = item.type === "weapon";
          break;
        case "earringL":
        case "earringR":
          isCorrectType = item.type === "earring";
          break;
        case "ringL":
        case "ringR":
          isCorrectType = item.type === "ring";
          break;
        case "wings":
        case "pet":
        case "pendant":
        case "artifact":
        case "pentagram":
        case "neck":
          isCorrectType = item.type === slotType;
          break;
        default:
          isCorrectType = false;
      }
      
      if (!isCorrectType) return false;

      // Filtrar por clase del personaje
      if (item.class && item.class.length > 0) {
        const characterClass = character.class[0];
        return item.class.some(allowedClass => 
          characterClass.includes(allowedClass) || 
          allowedClass.includes(characterClass) ||
          characterClass === allowedClass
        );
      }

      return true;
    });

    setAvailableItems(items);
  }, [character, slotType]);

  const handleItemSelect = (itemId) => {
    const item = getItemTemplate(itemId);
    if (item) {
      setSelectedItem(item);
      // Reset configuration cuando se selecciona un nuevo item
      setItemConfiguration({
        upgradeLevel: 0,
        activeExcellentOptions: [],
        activeAncientSet: null,
        hasLuck: false,
        hasJewelOfLife: false
      });
    }
  };

  const handleUpgradeChange = (level) => {
    const maxUpgrade = selectedItem?.maxUpgrade || 15;
    const upgradeLevel = Math.max(0, Math.min(level, maxUpgrade));
    setItemConfiguration(prev => ({ ...prev, upgradeLevel }));
  };

  const handleExcellentOptionToggle = (optionId) => {
    setItemConfiguration(prev => {
      const current = prev.activeExcellentOptions;
      const maxOptions = selectedItem?.maxExcellentOptions || 6;
      
      if (current.includes(optionId)) {
        // Remover opción
        return {
          ...prev,
          activeExcellentOptions: current.filter(id => id !== optionId)
        };
      } else if (current.length < maxOptions) {
        // Agregar opción
        return {
          ...prev,
          activeExcellentOptions: [...current, optionId]
        };
      }
      
      return prev;
    });
  };

  const handleAncientSetChange = (setName) => {
    setItemConfiguration(prev => ({
      ...prev,
      activeAncientSet: setName === '' ? null : setName
    }));
  };

  const handleSpecialOptionToggle = (option) => {
    setItemConfiguration(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleEquip = () => {
    if (!selectedItem) return;

    const equippedItem = {
      templateId: selectedItem.id,
      name: selectedItem.name,
      displayName: selectedItem.name,
      url: selectedItem.url,
      type: slotType,
      ...itemConfiguration
    };

    addItem(equippedItem);
    setModalActive(false);
  };

  const handleRemove = () => {
    if (currentEquippedItem) {
      addItem({ type: slotType, remove: true });
      setModalActive(false);
    }
  };

  const handleClose = () => {
    setModalActive(false);
  };

  const getSlotDisplayName = () => {
    const names = {
      helm: "Casco",
      armor: "Armadura", 
      pants: "Pantalones",
      gloves: "Guantes",
      boots: "Botas",
      weapon1: "Arma Principal",
      weapon2: "Arma Secundaria",
      earringL: "Arete Izquierdo",
      earringR: "Arete Derecho",
      ringL: "Anillo Izquierdo", 
      ringR: "Anillo Derecho",
      wings: "Alas",
      pet: "Mascota",
      pendant: "Colgante",
      artifact: "Artefacto",
      pentagram: "Pentagrama",
      neck: "Collar"
    };
    return names[slotType] || slotType;
  };

  const renderItemStats = () => {
    if (!selectedItem) return null;

    const stats = [];
    
    // Stats base + upgrade
    Object.keys(selectedItem.upgradeValues || {}).forEach(statKey => {
      const upgradeArray = selectedItem.upgradeValues[statKey];
      const value = upgradeArray[itemConfiguration.upgradeLevel] || upgradeArray[0];
      
      if (statKey === 'defense') {
        stats.push(['Defensa', value]);
      } else if (statKey === 'attackMin' && selectedItem.upgradeValues.attackMax) {
        const maxValue = selectedItem.upgradeValues.attackMax[itemConfiguration.upgradeLevel] || selectedItem.upgradeValues.attackMax[0];
        stats.push(['Ataque', `${value}~${maxValue}`]);
      }
    });

    if (selectedItem.level) {
      stats.push(['Nivel Requerido', selectedItem.level]);
    }

    if (selectedItem.durability) {
      stats.push(['Durabilidad', selectedItem.durability]);
    }

    return stats;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-600/50 rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        
        {/* Header del modal */}
        <div className="flex justify-between items-center p-4 border-b border-amber-600/30 bg-gradient-to-r from-amber-900/20 to-amber-800/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-amber-600/20 rounded-full flex items-center justify-center">
              <span className="text-amber-300 text-sm">⚔</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-300">
                Equipar {getSlotDisplayName()}
              </h2>
              {currentEquippedItem && (
                <p className="text-sm text-green-400">
                  Actual: {currentEquippedItem.displayName || currentEquippedItem.name}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-colors"
          >
            <span className="text-red-400 text-lg">×</span>
          </button>
        </div>

        {/* Content del modal */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          
          {/* Selector de items */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-amber-300 mb-2">
              Seleccionar {getSlotDisplayName()}:
            </label>
            <select 
              onChange={(e) => handleItemSelect(e.target.value)} 
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Elige un {getSlotDisplayName().toLowerCase()}...
              </option>
              {availableItems.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                  {item.level && ` (Req: Level ${item.level})`}
                </option>
              ))}
            </select>
          </div>

          {/* Configuración del item seleccionado */}
          {selectedItem && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Panel izquierdo - Stats y Preview */}
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center gap-2">
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.name}
                      className="w-8 h-8 object-contain"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    {selectedItem.name}
                  </h3>
                  
                  {/* Stats del item */}
                  <div className="space-y-2 text-sm">
                    {renderItemStats().map(([label, value], index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400">{label}:</span>
                        <span className="text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upgrade Level */}
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <label className="block text-sm font-medium text-amber-300 mb-2">
                    Nivel de Upgrade: +{itemConfiguration.upgradeLevel}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={selectedItem.maxUpgrade || 15}
                    value={itemConfiguration.upgradeLevel}
                    onChange={(e) => handleUpgradeChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>+0</span>
                    <span>+{selectedItem.maxUpgrade || 15}</span>
                  </div>
                </div>
              </div>

              {/* Panel derecho - Opciones */}
              <div className="space-y-4">
                
                {/* Excellent Options */}
                {selectedItem.excellentOptions && selectedItem.excellentOptions.length > 0 && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <h4 className="text-sm font-medium text-purple-400 mb-3">
                      Opciones Excellent ({itemConfiguration.activeExcellentOptions.length}/{selectedItem.maxExcellentOptions || 6})
                    </h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {selectedItem.excellentOptions.map((optionId) => {
                        const option = EXCELLENT_OPTIONS[optionId];
                        if (!option) return null;
                        
                        return (
                          <label key={optionId} className="flex items-center space-x-2 text-xs cursor-pointer">
                            <input
                              type="checkbox"
                              checked={itemConfiguration.activeExcellentOptions.includes(optionId)}
                              onChange={() => handleExcellentOptionToggle(optionId)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-gray-300">{option.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Ancient Sets */}
                {selectedItem.ancientSets && selectedItem.ancientSets.length > 0 && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <h4 className="text-sm font-medium text-orange-400 mb-3">Ancient Set</h4>
                    <select
                      value={itemConfiguration.activeAncientSet || ''}
                      onChange={(e) => handleAncientSetChange(e.target.value)}
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white text-xs"
                    >
                      <option value="">Sin Ancient Set</option>
                      {selectedItem.ancientSets.map((setName) => {
                        const setData = ANCIENT_SETS[setName];
                        return (
                          <option key={setName} value={setName}>
                            {setData?.name || setName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}

                {/* Special Options */}
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <h4 className="text-sm font-medium text-cyan-400 mb-3">Opciones Especiales</h4>
                  <div className="space-y-2">
                    {selectedItem.canHaveLuck && (
                      <label className="flex items-center space-x-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={itemConfiguration.hasLuck}
                          onChange={() => handleSpecialOptionToggle('hasLuck')}
                          className="rounded border-gray-300"
                        />
                        <span className="text-cyan-400">Luck +4</span>
                      </label>
                    )}
                    
                    {selectedItem.canHaveJewelOfLife && (
                      <label className="flex items-center space-x-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={itemConfiguration.hasJewelOfLife}
                          onChange={() => handleSpecialOptionToggle('hasJewelOfLife')}
                          className="rounded border-gray-300"
                        />
                        <span className="text-pink-400">Jewel of Life +12</span>
                      </label>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mensaje si no hay items disponibles */}
          {availableItems.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-4">📦</div>
              <p>No hay {getSlotDisplayName().toLowerCase()}s disponibles para tu clase</p>
            </div>
          )}
        </div>

        {/* Footer con botones */}
        <div className="flex justify-between items-center p-4 border-t border-amber-600/30 bg-gray-800/50">
          
          {/* Botón para remover item actual */}
          {currentEquippedItem && (
            <button
              onClick={handleRemove}
              className="px-4 py-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-600/50 rounded-lg transition-colors"
            >
              Desequipar
            </button>
          )}
          
          {/* Espaciador */}
          <div className="flex-1"></div>
          
          {/* Botones principales */}
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 border border-gray-600 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleEquip}
              disabled={!selectedItem}
              className="px-6 py-2 bg-amber-600/80 hover:bg-amber-600 disabled:bg-gray-600/50 disabled:text-gray-400 text-white border border-amber-600 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              {currentEquippedItem ? 'Reemplazar' : 'Equipar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}