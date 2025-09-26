// components/inventory/modal-inventory.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../hooks/useCharacter";
import { ITEMS_DATABASE } from "../../database/itemsDatabase";
import ArmorModal from "./modal-items/ArmorModal";

export default function ModalInventory({ modalActive, setModalActive, slotType }) {
  const { character, addItem } = useSelectedCharacter();
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemConfiguration, setItemConfiguration] = useState({
    upgradeLevel: 0,
    activeExcellentOptions: [],
    activeAncientSet: null,
    hasLuck: false,
    hasJewelOfLife: false,
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
    if (!itemId) return; // Agregar esta validación
    const item = getItemTemplate(itemId);
    if (item) {
      setSelectedItem(item);
      // Reset configuration cuando se selecciona un nuevo item
      setItemConfiguration({
        upgradeLevel: 0,
        activeExcellentOptions: [],
        enhancementMode: null,
        activeAncientSet: null,
        hasMastery: false,
        hasLuck: false,
        hasJewelOfLife: false,
        lifeType: item.type === 'weapon' ? 'damage' : 'defense',
        lifeLevel: 1,
        lifeValue: item.type === 'weapon' ? 4 : 4,
      });
    }
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

  // Agregar esta función después de getSlotDisplayName():
  const getModalComponent = () => {
    const armorTypes = ["helm", "armor", "pants", "gloves", "boots"];

    if (armorTypes.includes(slotType)) {
      return ArmorModal;
    }

    // Por ahora, return null para otros tipos (seguimos con la lógica actual)
    return null;
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
                </option>
              ))}
            </select>
          </div>

          {/* Configuración del item seleccionado */}
          {selectedItem && (
            (() => {
              const ModalComponent = getModalComponent();

              if (ModalComponent) {
                // Usar el modal específico
                return (
                  <ModalComponent
                    selectedItem={selectedItem}
                    itemConfiguration={itemConfiguration}
                    setItemConfiguration={setItemConfiguration}
                    currentEquippedItem={currentEquippedItem}
                    character={character}
                  />
                );
              } else {
                // Usar la lógica original para tipos que aún no están modularizados
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* TODO: Tu contenido original para weapons, wings, jewelry, etc. */}
                    <div className="lg:col-span-3">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                        <p className="text-gray-400">
                          Modal específico para {getSlotDisplayName()} coming soon...
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-600 text-center">
                        <img
                          src={selectedItem.url}
                          alt={selectedItem.name}
                          className="w-16 h-16 mx-auto object-contain"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            })()
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