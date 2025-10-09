// components/C/stats/stamina.jsx
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import { useEffect, useState } from "react";
import formulasSta from "../../../functions/formulas/formulasStamina";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Stamina({ readOnly = false }) {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();
  const [formulasStamina, setFormulasStamina] = useState({});

  // Click izquierdo - SUMAR (cambio aquí)
  const handleLeftClick = (e) => {
    e.preventDefault();
    const pointsToAdd = e.shiftKey ? 10 : 1;
    if (character?.points >= pointsToAdd) {
      increaseStats({ stat: 'stamina', points: pointsToAdd });
    }
  };

  // Click derecho - RESTAR (cambio aquí)
  const handleRightClick = (e) => {
    e.preventDefault();
    const pointsToRemove = e.shiftKey ? 10 : 1;
    if (character?.stats.stamina > character.baseStats.stamina) {
      decreaseStats({ stat: 'stamina', points: pointsToRemove, baseStats: character.baseStats });
    }
  };

  const handleMiddleClick = (e) => {
    e.preventDefault();

    // Si tiene Shift presionado, RESTA 100
    if (e.shiftKey) {
      if (character?.stats.stamina > character.baseStats.stamina) {
        decreaseStats({ stat: 'stamina', points: 100, baseStats: character.baseStats });
      }
    }
    // Sin Shift, SUMA 100
    else {
      if (character?.points >= 100) {
        increaseStats({ stat: 'stamina', points: 100 });
      }
    }
  };


  useEffect(() => {
    if (character) {
      formulasSta(character, setFormulasStamina);
    }
  }, [character]);

  // Early return DESPUÉS de hooks
  if (!character || !character.stats) {
    return null;
  }

  // 🔥 CALCULAR BONUS DEL 3RD TREE
  const bonus3rdTree = calculate3rdTreeBonus(character);
  const staminaBonus = bonus3rdTree.stamina;

  const canIncrease = character.points >= 1;
  const canDecrease = character.stats.stamina > character.baseStats.stamina;

  return (
    <>
      <dt className="flex items-center justify-between bg-gray-900">
        <span>Stamina</span>
        {!readOnly && (
          <button
            onClick={handleLeftClick}
            onContextMenu={handleRightClick}
            onMouseDown={(e) => {
              if (e.button === 1) {
                handleMiddleClick(e);
              }
            }}
            disabled={!canIncrease && !canDecrease}
            className="relative disabled:cursor-not-allowed transition-all duration-150 hover:scale-105 active:scale-95 inline-block"
            title="Left: +1 | Right: -1 | Shift+Left: +10 | Shift+Right: -10 | Middle: +100 | Shift+Middle: -100"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              width: 'auto',
              height: 'auto'
            }}
          >
            <img
              src="/windows-stats/button.png"
              alt="stat button"
              className={`transition-all duration-150 ${!canIncrease && !canDecrease
                ? 'opacity-50 grayscale'
                : 'hover:brightness-110 active:brightness-90'
                }`}
              style={{
                imageRendering: 'pixelated',
                display: 'block'
              }}
            />
          </button>
        )}
      </dt>

      <dd className="bg-gray-900">
        <span className="text-amber-300">{staminaBonus > 0 ? `${staminaBonus + character.stats.stamina}` : character.stats.stamina}</span>
      </dd>

      <dd className="text-center bg-gray-900">
        <span className="text-blue-300">
          -
        </span>
      </dd>

      {formulasStamina.prxAtkPwr && (
        <>
          <dt>* Prx Atk Pwr(%)</dt>
          <dd className="col-span-2">
            <span className="text-amber-300">{formulasStamina.prxAtkPwr}%</span>
          </dd>
        </>
      )}
    </>
  );
}