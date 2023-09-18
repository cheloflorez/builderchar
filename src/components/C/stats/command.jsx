import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import selectChar from "../../../functions/char/select-char";

export default function Command() {
  const params = useParams();
  const { charName } = selectChar(params.char);
  const character = useSelector((state) => state.characters[charName]);
  return (
    <>
      {character.class[0] === "Dark Lord" && (
        <>
          <dt>Command</dt>
          <dd>
            <span className="text-amber-300">{character.command}</span>
          </dd>
        </>
      )}
    </>
  );
}
