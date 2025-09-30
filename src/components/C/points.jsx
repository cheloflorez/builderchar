// components/C/points.jsx
import { useSelectedCharacter } from "../../hooks/useCharacter";
import { fruitsPoints } from "../../utils/characterUtils";

export default function Points() {
  const { character, increaseFruits, decreaseFruits } = useSelectedCharacter();
  
  if (!character) return null;

  
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    const amount = e.shiftKey ? 10 : 1;
    increaseFruits(amount);
    
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    const amount = e.shiftKey ? 10 : 1;
    decreaseFruits(amount);

  };

  const maxFruits = fruitsPoints(character);
  const canIncrease = character.fruits < maxFruits;
  const canDecrease = character.fruits > 0;

  // ✅ ASEGURAR que points nunca sea NaN
  const points = character.points;
  const displayPoints = (points === undefined || points === null || isNaN(points)) ? "-" : (points === 0 ? "-" : points);

  return (
    <ul className="absolute grid pt-1 pl-1 grid-cols-3 w-full col-span-2 top-44 left-6">
      <li>Pts Remaining</li>
      <li className="col-span-2">
        <span className="text-amber-300">{displayPoints}</span>
      </li>
      <li>Fruit Create</li>
      <li className="col-span-2 flex items-center gap-2">
        <button
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          disabled={!canIncrease && !canDecrease}
          className="relative disabled:cursor-not-allowed transition-all duration-150 hover:scale-105 active:scale-95 inline-block flex-shrink-0"
          title="Left: +1 | Right: -1 | Shift+Left: +10 | Shift+Right: -10"
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
        <span className="text-amber-300 whitespace-nowrap min-w-0">
          {character.fruits || 0} / {maxFruits || 0}
        </span>
      </li>
    </ul>
  );
}