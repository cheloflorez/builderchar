// components/C/level.jsx
import { useEffect, useState } from "react";
import { useSelectedCharacter } from "../../hooks/useCharacter";
import { classChar } from "../../utils/characterUtils";

export default function Level() {
  const { character, selectLevel } = useSelectedCharacter();
  const [charClass, setCharClass] = useState("");

  const handleChange = (e) => {
    if (!character) return;
    
    const regExp = /^[0-9]+$/;
    const level = e.target.value;
    const parsedLevel = parseInt(level);
    if (regExp.test(level) || level === "") selectLevel(level);
    if (parsedLevel > 0) selectLevel(parsedLevel);
  };

  useEffect(() => {
    if (character) setCharClass(classChar(character));
  }, [character]);

  if (!character) return null;

  return (
    <div className="absolute grid pt-1 pl-1 grid-cols-2 w-full top-[100px] left-6">
      <h2>Class</h2>
      <h3 className="mb-1">
        <span className="text-amber-300">{charClass}</span>
      </h3>
      
      <h2>Level</h2>
      <div className="flex flex-col">
        <input
          placeholder="1"
          onChange={(e) => handleChange(e)}
          className="text-amber-300 bg-transparent w-16 border border-amber-600/50 rounded px-2 py-1 mb-1 focus:border-amber-400 focus:outline-none"
          value={character.level}
          type="text"
        />
      </div>
    </div>
  );
}