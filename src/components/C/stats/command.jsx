// components/C/stats/command.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../../hooks/useCharacter";
import { calculate3rdTreeBonus } from "../../../utils/3rdTreeUtils";

export default function Command() {
  const { character, increaseStats, decreaseStats } = useSelectedCharacter();

  // Click izquierdo - SUMAR (cambio aquí)
  const handleLeftClick = (e) => {
    e.preventDefault();
    const pointsToAdd = e.shiftKey ? 10 : 1;
    if (character?.points >= pointsToAdd) {
      increaseStats({ stat: 'command', points: pointsToAdd });
    }
  };

  // Click derecho - RESTAR (cambio aquí)
  const handleRightClick = (e) => {
    e.preventDefault();
    const pointsToRemove = e.shiftKey ? 10 : 1;
    if (character?.stats.command > character.baseStats.command) {
      decreaseStats({ stat: 'command', points: pointsToRemove, baseStats: character.baseStats });
    }
  };

    // 🔥 CALCULAR BONUS DEL 3RD TREE
    const bonus3rdTree = calculate3rdTreeBonus(character);
    const commandBonus = bonus3rdTree.command;

  const canIncrease = character.points >= 1;
  const canDecrease = character.stats.command > character.baseStats.command;

  if (!character || character.class[0] !== "Dark Lord") {
    return null;
  }

  return (
    <>
      <dt className="flex items-center justify-between">
        <span>Command</span>
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
      </dt>

      <dd>
        <span className="text-amber-300">{commandBonus > 0 ? `${commandBonus + character.stats.command}` : character.stats.command}</span>
      </dd>

      <dd className="text-center">
        <span className="text-blue-300">
          -
        </span>
      </dd>
    </>
  );
}