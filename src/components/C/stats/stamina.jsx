import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import selectChar from "../../../functions/char/select-char";
import { useEffect, useState } from "react";
import formulasSta from "../../../functions/formulas/formulasStamina";

export default function Stamina() {
  const params = useParams();
  const { charName } = selectChar(params.char);
  const [formulasStamina, setFormulasStamina] = useState({});
  const character = useSelector((state) => state.characters[charName]);

  useEffect(() => {
    formulasSta(character, setFormulasStamina);
  }, [character]);

  return (
    <>
      <dt>Stamina</dt>
      <dd>
        <span className="text-amber-300">{character.stamina}</span>
      </dd>
      <dd className="text-center">
        <span className="text-blue-300">-</span>
      </dd>
      {formulasStamina.prxAtkPwr && (
        <>
          <dt>* Prx Atk Pwr(%)</dt>
          <dd className="col-span-2">
            <span className="text-amber-300">{formulasStamina.prxAtkPwr}%</span>
          </dd>
        </>
      )}
    </>
  );
}
