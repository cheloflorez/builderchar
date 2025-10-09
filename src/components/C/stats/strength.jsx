// components/C/stats/strength.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import formulasStr from "../../../functions/formulas/formulasStrength";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";
import formulasAgi from "../../../functions/formulas/formulasAgility";

export default function Strength({ readOnly = false }) {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();

  const [formulasStrength, setFormulasStrength] = useState({});
  const [specialization, setSpecialization] = useState({});
  const [specializationAgi, setSpecializationAgi] = useState({});
  const [formulasAgility, setFormulasAgility] = useState({});
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

  const handleMiddleClick = (e) => {
    e.preventDefault();

    // Si tiene Shift presionado, RESTA 100
    if (e.shiftKey) {
      if (character?.stats.strength > character.baseStats.strength) {
        decreaseStats({ stat: 'strength', points: 100, baseStats: character.baseStats });
      }
    }
    // Sin Shift, SUMA 100
    else {
      if (character?.points >= 100) {
        increaseStats({ stat: 'strength', points: 100 });
      }
    }
  };



  useEffect(() => {
    if (character)
      formulasStr(character, setFormulasStrength, setSpecialization, setCombatPower);
    formulasAgi(character, setFormulasAgility, setSpecializationAgi);
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
      <dt className="flex items-center justify-between bg-gray-900">
        <span>Strength</span>
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
        <span className="text-amber-300">{strengthBonus > 0 ? `${strengthBonus + character.stats.strength}` : character.stats.strength}</span>
      </dd>

      <dd className="text-center bg-gray-900">
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
      <dd>
        <span className="text-amber-300">
          {formulasStrength.attackMin} ~ {formulasStrength.attackMax}
        </span>
      </dd>

      <dd className="text-center">
        <span className="text-amber-300">+{combatpower.CPL}</span>
      </dd>

      <dt>* Atk Succ rate</dt>
      <dd>
        {specializationAgi.splAtkRate >= 0 ?
          <span className="text-amber-300">{formulasStrength.attackRate + specializationAgi.splAtkRate}</span>
          : <span className="text-amber-300">{formulasStrength.attackRate}</span>
        }
      </dd>
      <dd className="text-center">
        <span className="text-amber-300">-</span>
      </dd>

      <dt>* PVP Atk rate</dt>
      <dd>
        {specializationAgi.splPVPAtkRate >= 0 ?
          <span className="text-amber-300">{formulasStrength.attackRatePVP + specializationAgi.splPVPAtkRate}</span>
          : <span className="text-amber-300">{formulasStrength.attackRatePVP}</span>
        }

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