// components/inventory/inventory.jsx
import { useSelectedCharacter } from "../../hooks/useCharacter";
import ItemTooltip from "./modal-items/item-tooltip";

// Definir las posiciones de los slots del inventario
const INVENTORY_SLOTS = [
  {
    id: "pet",
    name: "Pet",
    emptyPosition: "top-[75px] left-[26px]",
    equippedPosition: "top-12 left-4",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[32px] h-[32px]"
  },
  {
    id: "neck",
    name: "Neck",
    emptyPosition: "top-[79px] left-[80px]",
    equippedPosition: "top-14 left-[57px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[28px] h-[28px]"
  },
  {
    id: "helm",
    name: "Helm",
    emptyPosition: "top-[75px] left-[138px]",
    equippedPosition: "top-[52px] left-[131px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[50px] h-[50px]"
  },
  {
    id: "wings",
    name: "Wings",
    emptyPosition: "top-[75px] right-[42px]",
    equippedPosition: "top-[45px] left-[215px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-auto h-auto"
  },
  {
    id: "weapon1",
    name: "Weapon 1",
    emptyPosition: "top-[150px] left-[26px]",
    equippedPosition: "top-26 left-0",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[40px] h-[60px]"
  },
  {
    id: "earringR",
    name: "Earring R",
    emptyPosition: "top-[158px] left-[80px]",
    equippedPosition: "top-[118px] left-[48px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[24px] h-[24px]"
  },
  {
    id: "armor",
    name: "Armor",
    emptyPosition: "top-[150px] left-[138px]",
    equippedPosition: "top-[120px] left-[126px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[60px] h-[60px]"
  },
  {
    id: "earringL",
    name: "Earring L",
    emptyPosition: "top-[158px] left-[191px]",
    equippedPosition: "top-[118px] right-[44px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[24px] h-[24px]"
  },
  {
    id: "weapon2",
    name: "Weapon 2",
    emptyPosition: "top-[150px] left-[246px]",
    equippedPosition: "top-26 right-1",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[40px] h-[60px]"
  },
  {
    id: "gloves",
    name: "Gloves",
    emptyPosition: "top-[223px] left-[26px]",
    equippedPosition: "top-[195px] left-[16px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[60px] h-[60px]"
  },
  {
    id: "ringR",
    name: "Ring R",
    emptyPosition: "top-[233px] left-[80px]",
    equippedPosition: "bottom-[58px] left-12",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[20px] h-[20px]"
  },
  {
    id: "pants",
    name: "Pants",
    emptyPosition: "top-[223px] left-[138px]",
    equippedPosition: "top-[195px] left-[126px]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[60px] h-[60px]"
  },
  {
    id: "ringL",
    name: "Ring L",
    emptyPosition: "top-[233px] left-[190px]",
    equippedPosition: "bottom-[58px] right-12",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[20px] h-[20px]"
  },
  {
    id: "boots",
    name: "Boots",
    emptyPosition: "top-[223px] left-[246px]",
    equippedPosition: "bottom-[66px] right-2",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[36px] h-[36px]"
  },
  {
    id: "artifact",
    name: "Artifact",
    emptyPosition: "top-[285px] left-[28px]",
    equippedPosition: "bottom-3 left-2",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[32px] h-[32px]"
  },
  {
    id: "pentagram",
    name: "Pentagram",
    emptyPosition: "top-[285px] left-[246px]",
    equippedPosition: "bottom-3 right-[-1.5]",
    emptySize: "w-[38px] h-[38px]",
    equippedSize: "w-[32px] h-[32px]"
  }
];

export default function Inventory({ onSlotClick }) {
  const { character } = useSelectedCharacter();

  const handleSlotClick = (slotType) => {
    if (onSlotClick) {
      onSlotClick(slotType);
    }
  };

  const getEquippedItem = (slotType) => {
    if (!character?.items) {
      return null;
    }
    const items = character.items;
    let result = null;

    // Mapear tipos de slot a la nueva estructura
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
        return result;
    }
  };

  // Función para determinar la posición del tooltip basada en la ubicación del slot
  const getTooltipPosition = (slotId) => {
    // Slots en la parte superior -> tooltip abajo
    if (['pet', 'neck', 'helm', 'wings'].includes(slotId)) {
      return 'bottom';
    }
    // Slots en la parte inferior -> tooltip arriba
    if (['gloves', 'ringR', 'pants', 'ringL', 'boots', 'artifact', 'pentagram'].includes(slotId)) {
      return 'right';
    }
    // Slots del lado izquierdo -> tooltip a la derecha
    if (['weapon1', 'earringL'].includes(slotId)) {
      return 'bottom';
    }
    // Slots del lado derecho -> tooltip a la izquierda
    if (['weapon2', 'earringR'].includes(slotId)) {
      return 'bottom';
    }
    // Default
    return 'bottom';
  };

  const SlotButton = ({ slot }) => {
    const equippedItem = getEquippedItem(slot.id);

    // Usar posición y tamaño diferentes según si hay item equipado o no
    const position = equippedItem ? slot.equippedPosition : slot.emptyPosition;
    const size = equippedItem ? slot.equippedSize : slot.emptySize;

    // Para items que pueden desbordarse (como wings), crear un contenedor especial
    const isOverflowItem = slot.id === 'wings' || slot.equippedSize === 'w-auto h-auto';

    if (equippedItem && isOverflowItem) {
      // Calcular el tamaño del botón basado en la escala de la imagen
      const imageScale = slot.id === 'wings' ? 0.6 : 1;
      const buttonSize = slot.id === 'wings' ? 'w-[60px] h-[60px]' : size;

      return (
        <ItemTooltip
          item={equippedItem}
          character={character} // <--- aquí
          position={getTooltipPosition(slot.id)}
        >
          <button
            onClick={() => handleSlotClick(slot.id)}
            className={`
              absolute ${position} ${buttonSize}
              text-white text-xs font-medium
              transition-all duration-200
              hover:bg-amber-500/20 hover:rounded
              active:scale-95
              ${slot.id === 'wings' ? 'z-15' : 'z-30'}
            `}
            title={`${equippedItem.displayName || equippedItem.name} (Click para cambiar)`}
            style={{ overflow: 'visible' }}
          >
            {/* Contenedor con overflow visible para imágenes grandes */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ overflow: 'visible' }}>
              <img
                src={equippedItem.url}
                alt={equippedItem.displayName || equippedItem.name}
                className="block max-w-none max-h-none"
                style={{
                  imageRendering: 'pixelated',
                  transform: `scale(${imageScale})`,
                  transformOrigin: 'center center'
                }}
              />
            </div>
          </button>
        </ItemTooltip>
      );
    }

    const buttonContent = (
      <button
        onClick={() => handleSlotClick(slot.id)}
        className={`
          absolute ${position} ${size}
          text-white text-xs font-medium
          transition-all duration-200
          hover:bg-amber-500/20 hover:rounded
          active:scale-95
          ${equippedItem ? 'z-20' : 'z-10'}
          ${equippedItem ? '' : 'text-white hover:text-amber-300'}
        `}
        title={equippedItem ? `${equippedItem.displayName || equippedItem.name} (Click para cambiar)` : `Equipar ${slot.name}`}
      >
        {equippedItem ? (
          /* La imagen con tamaño personalizado */
          <img
            src={equippedItem.url}
            alt={equippedItem.displayName || equippedItem.name}
            className="w-full h-full object-contain"
            style={{
              imageRendering: 'pixelated'
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Slot vacío con tamaño personalizado */}
            <span className="text-[8px] leading-3 text-center">{slot.name}</span>
          </div>
        )}
      </button>
    );

    // Si hay un item equipado, envolver en ItemTooltip
    if (equippedItem) {
      return (
        <ItemTooltip
          item={equippedItem}
          character={character} // <--- aquí
          position={getTooltipPosition(slot.id)}
        >
          {buttonContent}
        </ItemTooltip>
      );
    }
    return buttonContent;
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {/* Panel principal del inventario */}
      <div className="relative bg-[url('./assets/windows-stats/inventory.png')] w-[310px] h-[345px] border border-amber-600/30 rounded-lg">

        {/* Slots clickeables */}
        {INVENTORY_SLOTS.map((slot) => (
          <SlotButton key={slot.id} slot={slot} />
        ))}

        {/* Indicador visual para slots vacíos */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {INVENTORY_SLOTS.map((slot) => {
            const hasItem = getEquippedItem(slot.id);
            if (hasItem) return null;

            return (
              <div
                key={`empty-${slot.id}`}
                className={`absolute ${slot.emptyPosition} w-8 h-8 border border-dashed border-gray-600/30 rounded opacity-50`}
              />
            );
          })}
        </div>
      </div>

      {/* Información de items equipados */}
      {character && character.items && (
        <div className="bg-black/50 rounded-lg p-3 text-xs text-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-amber-300">Items equipados:</span>
              <span className="ml-2 text-green-400">
                {(() => {
                  const items = character.items;
                  let count = 0;

                  // Contar items en set
                  if (items.set) {
                    count += Object.values(items.set).filter(item => item !== null).length;
                  }

                  // Contar earrings
                  if (items.earrings) {
                    if (items.earrings.left) count++;
                    if (items.earrings.right) count++;
                  }

                  // Contar rings
                  if (items.rings) {
                    if (items.rings.left) count++;
                    if (items.rings.right) count++;
                  }

                  // Contar otros items
                  ['pet', 'wings', 'pendant', 'artifact', 'pentagram', 'neck'].forEach(slot => {
                    if (items[slot]) count++;
                  });

                  return count;
                })()}
              </span>
            </div>
            <div>
              <span className="text-amber-300">Slots libres:</span>
              <span className="ml-2 text-red-400">
                {(() => {
                  const items = character.items;
                  let count = 0;

                  // Contar items equipados (mismo código de arriba)
                  if (items.set) {
                    count += Object.values(items.set).filter(item => item !== null).length;
                  }
                  if (items.earrings) {
                    if (items.earrings.left) count++;
                    if (items.earrings.right) count++;
                  }
                  if (items.rings) {
                    if (items.rings.left) count++;
                    if (items.rings.right) count++;
                  }
                  ['pet', 'wings', 'pendant', 'artifact', 'pentagram', 'neck'].forEach(slot => {
                    if (items[slot]) count++;
                  });

                  return INVENTORY_SLOTS.length - count;
                })()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}