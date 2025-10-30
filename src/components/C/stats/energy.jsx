// components/C/stats/energy.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import formulasEne from "../../../functions/formulas/formulasEnergy";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Energy({ readOnly = false }) {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();
  const [formulasEnergy, setFormulasEnergy] = useState({});
  const [specialization, setSpecialization] = useState({});

  // Click izquierdo - SUMAR (cambio aquí)
  const handleLeftClick = (e) => {
    e.preventDefault();
    const pointsToAdd = e.shiftKey ? 10 : 1;
    if (character?.points >= pointsToAdd) {
      increaseStats({ stat: 'energy', points: pointsToAdd });
    }
  };

  // Click derecho - RESTAR (cambio aquí)
  const handleRightClick = (e) => {
    e.preventDefault();
    const pointsToRemove = e.shiftKey ? 10 : 1;
    if (character?.stats.energy > character.baseStats.energy) {
      decreaseStats({ stat: 'energy', points: pointsToRemove, baseStats: character.baseStats });
    }
  };

  const handleMiddleClick = (e) => {
    e.preventDefault();

    // Si tiene Shift presionado, RESTA 100
    if (e.shiftKey) {
      if (character?.stats.energy > character.baseStats.energy) {
        decreaseStats({ stat: 'energy', points: 100, baseStats: character.baseStats });
      }
    }
    // Sin Shift, SUMA 100
    else {
      if (character?.points >= 100) {
        increaseStats({ stat: 'energy', points: 100 });
      }
    }
  };


  useEffect(() => {
    if (character) formulasEne(character, setFormulasEnergy, setSpecialization, {});
  }, [character]);

  // Early return DESPUÉS de hooks
  if (!character || !character.stats) {
    return null;
  }


  // 🔥 CALCULAR BONUS DEL 3RD TREE
  const bonus3rdTree = calculate3rdTreeBonus(character);
  const energyBonus = bonus3rdTree.energy;

  const canIncrease = character.points >= 1;
  const canDecrease = character.stats.energy > character.baseStats.energy;

  return (
    <>
      <dt className="flex items-center justify-between bg-gray-900">
        <span>Energy</span>
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
              src="/windows-stats/button.webp"
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
        <span className="text-amber-300">{energyBonus > 0 ? `${energyBonus + character.stats.energy}` : character.stats.energy}</span>
      </dd>

      <dd className="text-center bg-gray-900">
        <span className="text-blue-300">
          -
        </span>
      </dd>

      {/* {formulasEnergy.wizMin && (
        <>
          <dt>
            <span className="text-violet-500">* SPl Wiz Dmg</span>
          </dt>
          <dd className="col-span-2">
            <span className="text-violet-500">
              {specialization.splWizMax < 1 ? (
                "-"
              ) : (
                <>
                  {specialization.splWizMin} ~ {specialization.splWizMax}
                </>
              )}
            </span>
          </dd>

          <dt>* Wizardry Dmg</dt>
          <dd>
            <span className="text-amber-300">
              {formulasEnergy.wizMin} ~ {formulasEnergy.wizMax}
            </span>
          </dd>
          <dd>
            <span className="text-amber-300"></span>
          </dd>
        </>
      )}

      {formulasEnergy.skillPwr && (
        <>
          <dt>* Skill Atk Pwr(%)</dt>
          <dd className="col-span-2">
            <span className="text-amber-300">{formulasEnergy.skillPwr}%</span>
          </dd>
        </>
      )} */}

      {
        character.class[0] === "Alchemist" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)Magic DMG</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>* Wizardry Dmg</dt>
            <dd>
              <span className="text-amber-300">
                {formulasEnergy.wizMin} ~ {formulasEnergy.wizMax}
              </span>
            </dd>
            <dd>
              <span className="text-amber-300"></span>
            </dd>
            <dt>* Magic ATK</dt>
            <dd>
              <span className="text-amber-300">
                {formulasEnergy.magicPower} %
              </span>
            </dd>
            <dd>
              <span className="text-amber-300"></span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Dark Wizard" && (
          <>
            <dt>
              <span className="text-violet-500">* SPl Wiz Dmg</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">
                {specialization.splWizMax < 1 ? (
                  "-"
                ) : (
                  <>
                    {specialization.splWizMin} ~ {specialization.splWizMax}
                  </>
                )}
              </span>
            </dd>

            <dt>* Wizardry Dmg</dt>
            <dd>
              <span className="text-amber-300">
                {formulasEnergy.wizMin} ~ {formulasEnergy.wizMax}
              </span>
            </dd>
            <dd>
              <span className="text-amber-300"></span>
            </dd>
          </>
        )
      }
      {formulasEnergy.skillPwr && (
        <>
          <dt>* Skill Atk Pwr(%)</dt>
          <dd className="col-span-2">
            <span className="text-amber-300">{formulasEnergy.skillPwr}%</span>
          </dd>
        </>
      )}

    </>
  );
}