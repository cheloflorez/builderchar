// components/C/stats/stamina.jsx
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import { useEffect, useState } from "react";
import formulasSta from "../../../functions/formulas/formulasStamina";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Stamina() {
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
      <dt className="flex items-center justify-between">
        <span>Stamina</span>
        <button
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          disabled={!canIncrease && !canDecrease}
          className="relative disabled:cursor-not-allowed transition-all duration-150 hover:scale-105 active:scale-95 inline-block"
          title="Left: -1 | Right: +1 | Shift+Left: -10 | Shift+Right: +10"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            width: 'auto',
            height: 'auto'
          }}
        >
          {/* Imagen del botón */}
          <img
            src="/src/assets/windows-stats/button.png"
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
      </dt>

      <dd>
        <span className="text-amber-300">{staminaBonus > 0 ? `${staminaBonus + character.stats.stamina}` : character.stats.stamina}</span>
      </dd>

      <dd className="text-center">
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