import { useDispatch, useSelector } from "react-redux";
import classChar from "../../functions/char/class-char";
import { useEffect, useState } from "react";
import { selectLevel } from "../../features/build/char-selected";

export default function Level() {
  const character = useSelector((state) => state.charSelected[0]);
  const dispatch = useDispatch();

  const [charClass, setCharClass] = useState("");

  const handleChange = (e) => {
    const regExp = /^[0-9]+$/;
    const level = e.target.value;
    const parsedLevel = parseInt(level);
    if (regExp.test(level) || level === "") dispatch(selectLevel(level));
    if (parsedLevel > 0) dispatch(selectLevel(parsedLevel));
  };

  useEffect(() => {
    if (character) setCharClass(classChar(character));
  }, [character]);

  return (
    <div className="absolute grid pt-1 pl-1 grid-cols-2 w-full top-[100px] left-6">
      <h2>Class</h2>
      <h3 className="mb-1">
        <span className="text-amber-300">{charClass}</span>
      </h3>
      <h2>Level</h2>
      <input
        placeholder="1"
        onChange={(e) => handleChange(e)}
        className="text-amber-300 bg-transparent w-10"
        value={character ? character.level : 1}
      />
    </div>
  );
}
