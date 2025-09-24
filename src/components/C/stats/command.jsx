// components/C/stats/command.jsx
import { useSelectedCharacter } from "../../../hooks/useCharacter";

export default function Command() {
  const { character } = useSelectedCharacter();
  
  if (!character || character.class[0] !== "Dark Lord") {
    return null;
  }

  return (
    <>
      <dt>Command</dt>
      <dd>
        <span className="text-amber-300">{character.stats.command}</span>
      </dd>
      <dd className="text-center">
        <span className="text-blue-300">
          {character.stats.commandBlue === 0 ? "-" : <>({character.stats.commandBlue > 0 ? '+' : ''}{character.stats.commandBlue})</>}
        </span>
      </dd>
    </>
  );
}