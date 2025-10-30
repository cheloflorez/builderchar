// components/C/stats/agility.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import formulasAgi from "../../../functions/formulas/formulasAgility";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Agility({ readOnly = false }) {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();

  const [formulasAgility, setFormulasAgility] = useState({});
  const [specialization, setSpecialization] = useState({});

  // Click izquierdo - SUMAR (cambio aquí)
  const handleLeftClick = (e) => {
    e.preventDefault();
    const pointsToAdd = e.shiftKey ? 10 : 1;
    if (character?.points >= pointsToAdd) {
      increaseStats({ stat: 'agility', points: pointsToAdd });
    }
  };

  // Click derecho - RESTAR (cambio aquí)
  const handleRightClick = (e) => {
    e.preventDefault();
    const pointsToRemove = e.shiftKey ? 10 : 1;
    if (character?.stats.agility > character.baseStats.agility) {
      decreaseStats({ stat: 'agility', points: pointsToRemove, baseStats: character.baseStats });
    }
  };

  const handleMiddleClick = (e) => {
    e.preventDefault();

    // Si tiene Shift presionado, RESTA 100
    if (e.shiftKey) {
      if (character?.stats.agility > character.baseStats.agility) {
        decreaseStats({ stat: 'agility', points: 100, baseStats: character.baseStats });
      }
    }
    // Sin Shift, SUMA 100
    else {
      if (character?.points >= 100) {
        increaseStats({ stat: 'agility', points: 100 });
      }
    }
  };

  // useEffect solo se ejecuta cuando character existe
  useEffect(() => {
    if (character && character.stats) {
      formulasAgi(character, setFormulasAgility, setSpecialization);
    }
  }, [character]);

  // Early return si no hay character o no tiene stats
  if (!character || !character.stats) {
    return null;
  }
  // 🔥 CALCULAR BONUS DEL 3RD TREE
  const bonus3rdTree = calculate3rdTreeBonus(character);
  const agilityBonus = bonus3rdTree.agility;

  const canIncrease = character.points >= 1;
  const canDecrease = character.stats.agility > character.baseStats.agility;


  return (
    <>
      <dt className="flex items-center justify-between bg-gray-900">
        <span>Agility</span>
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
        <span className="text-amber-300">{agilityBonus > 0 ? `${agilityBonus + character.stats.agility}` : character.stats.agility}</span>
      </dd>

      <dd className="text-center bg-gray-900">
        <span className="text-blue-300">
          -
        </span>
      </dd>
      {
        character.class[0] === "Dark Wizard" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Dark Knight" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) DEF</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDef < 1 ? "-" : specialization.splDef}</span>
            </dd>

          </>
        )
      }
      {
        character.class[0] === "Fairy Elf" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) ATK Power</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">
                {specialization.splAtkMax < 1 ? (
                  "-"
                ) : (
                  <>
                    {specialization.splAtkMin} ~ {specialization.splAtkMax}
                  </>
                )}
              </span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S) DEF Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDefRate < 1 ? "-" : specialization.splDefRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP DEF Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPDefRate < 1 ? "-" : specialization.splPVPDefRate}</span>
            </dd>

          </>
        )
      }
      {
        character.class[0] === "Grow Lancer" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) DEF</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDef < 1 ? "-" : specialization.splDef}</span>
            </dd>

          </>
        )
      }
      {
        character.class[0] === "Dark Lord" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) DEF</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDef < 1 ? "-" : specialization.splDef}</span>
            </dd>

          </>
        )
      }
      {
        character.class[0] === "Rune Mage" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Slayer" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) ATK Power</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">
                {specialization.splAtkMax < 1 ? (
                  "-"
                ) : (
                  <>
                    {specialization.splAtkMin} ~ {specialization.splAtkMax}
                  </>
                )}
              </span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S) DEF Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDefRate < 1 ? "-" : specialization.splDefRate}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Gun Crusher" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "White Wizard" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Mage" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) DEF Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDefRate < 1 ? "-" : specialization.splDefRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP DEF Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPDefRate < 1 ? "-" : specialization.splPVPDefRate}</span>
            </dd>

          </>
        )
      }
      {
        character.class[0] === "Illusion Knight" && (
          <>
            <dt>
              <span className="text-violet-500">* (S) ATK Power</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">
                {specialization.splAtkMax < 1 ? (
                  "-"
                ) : (
                  <>
                    {specialization.splAtkMin} ~ {specialization.splAtkMax}
                  </>
                )}
              </span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S) DEF</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splDef < 1 ? "-" : specialization.splDef}</span>
            </dd>
          </>
        )
      }
      {
        character.class[0] === "Alchemist" && (
          <>
            <dt>
              <span className="text-violet-500">* (S)ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splAtkRate < 1 ? "-" : specialization.splAtkRate}</span>
            </dd>
            <dt>
              <span className="text-violet-500">* (S)PvP ATK Rate</span>
            </dt>
            <dd className="col-span-2">
              <span className="text-violet-500">{specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}</span>
            </dd>
          </>
        )
      }
      <dt>* Defense</dt>
      <dd className="col-span-2">
        <span className="text-amber-300">{formulasAgility.defense}</span>
      </dd>

      <dt>* Attack Speed</dt>
      <dd className="col-span-2">
        <span className="text-amber-300">
          {formulasAgility.speed} / {character.maxSpeed}
        </span>
      </dd>

      <dt>* Defense Rate</dt>
      <dd>
        <span className="text-amber-300">{formulasAgility.defenseRate}</span>
      </dd>
      <dd className="text-center">
        <span className="text-amber-300">-</span>
      </dd>

      <dt>* PvP Def Rate</dt>
      <dd>
        <span className="text-amber-300">{formulasAgility.defenseRatePVP}</span>
      </dd>
      <dd className="text-center">
        <span className="text-amber-300">-</span>
      </dd>
    </>
  );
}