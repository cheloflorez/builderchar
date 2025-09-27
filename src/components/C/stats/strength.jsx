// components/C/stats/strength.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import formulasStr from "../../../functions/formulas/formulasStrength";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Strength() {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();

  const [formulasStrength, setFormulasStrength] = useState({});
  const [specialization, setSpecialization] = useState({});
  const [combatpower, setCombatPower] = useState({});

  // Click izquierdo - SUMAR (cambio aquí)
  const handleLeftClick = (e) => {
    e.preventDefault();
    const pointsToAdd = e.shiftKey ? 10 : 1;
    if (character?.points >= pointsToAdd) {
      increaseStats({ stat: 'strength', points: pointsToAdd });
    }
  };

  // Click derecho - RESTAR (cambio aquí)
  const handleRightClick = (e) => {
    e.preventDefault();
    const pointsToRemove = e.shiftKey ? 10 : 1;
    if (character?.stats.strength > character.baseStats.strength) {
      decreaseStats({ stat: 'strength', points: pointsToRemove, baseStats: character.baseStats });
    }
  };
  useEffect(() => {
    if (character) formulasStr(character, setFormulasStrength, setSpecialization, setCombatPower);
  }, [character]);

  // Early return DESPUÉS de hooks
  if (!character || !character.stats) {
    return null;
  }

  // 🔥 CALCULAR BONUS DEL 3RD TREE
  const bonus3rdTree = calculate3rdTreeBonus(character);
  const strengthBonus = bonus3rdTree.strength;

  const canIncrease = character.points >= 1;
  const canDecrease = character.stats.strength > character.baseStats.strength;

  return (
    <>
      <dt className="flex items-center justify-between">
        <span>Strength</span>
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
        <span className="text-amber-300">{strengthBonus > 0 ? `${strengthBonus + character.stats.strength}` : character.stats.strength}</span>
      </dd>

      <dd className="text-center">
        {/* 🔥 MOSTRAR BONUS DEL 3RD TREE */}
        <span className="text-blue-300">
          -
        </span>
      </dd>

      {specialization.splAtkMax >= 0 && (
        <>
          <dt>
            <span className="text-violet-500">(S) ATK Power</span>
          </dt>
          <dd className="col-span-2">
            <span className="text-violet-500">
              {specialization.splAtkMax > 1 ? (
                <>
                  {specialization.splAtkMin} ~ {specialization.splAtkMax}
                </>
              ) : (
                <>-</>
              )}
            </span>
          </dd>
        </>
      )}

      <dt>* Attack Power</dt>
      <dd className="col-span-2">
        <span className="text-amber-300">
          {formulasStrength.attackMin} ~ {formulasStrength.attackMax}
        </span>
      </dd>

      <dt>* Atk Succ rate</dt>
      <dd>
        <span className="text-amber-300">{formulasStrength.attackRate}</span>
      </dd>
      <dd className="text-center">
        <span className="text-amber-300">-</span>
      </dd>

      <dt>* PVP Atk rate</dt>
      <dd>
        <span className="text-amber-300">{formulasStrength.attackRatePVP}</span>
      </dd>
      <dd className="text-center">
        <span className="text-amber-300">-</span>
      </dd>

      {combatpower.CombatPower >= 0 && (
        <>
          <dt>
           * Combat Power
          </dt>
          <dd className="col-span-2">
            <span className="text-amber-300">{combatpower.CombatPower} %</span>
          </dd>
        </>
      )}

    </>
  );
}