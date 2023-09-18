import { useSelector } from "react-redux";
import fruitsPoints from "../../functions/char/fruits";

export default function Points() {
  const character = useSelector((state) => state.charSelected[0]);
  return (
    <>
      {character && (
        <ul className="absolute grid pt-1 pl-1 grid-cols-3 w-full col-span-2 top-44 left-6">
          <li>Pts Remaining</li>
          <li className="col-span-2">
            <span className="text-amber-300">{character.points === 0 ? "-" : character.points}</span>
          </li>
          <li>Fruit Create</li>
          <li>
            <span className="text-amber-300">
              {character.fruits} / {fruitsPoints(character)}
            </span>
          </li>
        </ul>
      )}
    </>
  );
}
