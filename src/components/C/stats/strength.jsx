import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formulasStr from "../../../functions/formulas/formulasStrength";

export default function Strength() {
  const character = useSelector((state) => state.charSelected[0]);

  const [formulasStrength, setFormulasStrength] = useState({});
  const [specialization, setSpecialization] = useState({});

  useEffect(() => {
    if (character) formulasStr(character, setFormulasStrength, setSpecialization);
  }, [character]);

  return (
    <>
      {character && (
        <>
          <dt>Strength</dt>
          <dd>
            <span className="text-amber-300">{character.strength}</span>
          </dd>
          <dd className="text-center">
            <span className="text-blue-300">-</span>
          </dd>
          <dt>* Attack Power</dt>
          <dd className="col-span-2">
            <span className="text-amber-300">
              {formulasStrength.attackMin} ~ {formulasStrength.attackMax}
            </span>
          </dd>
          {specialization.splAtkMax >= 0 && (
            <>
              <dt>
                <span className="text-violet-500">* Spl Atk Pwr</span>
              </dt>
              <dd className="col-span-2">
                <span className="text-violet-500">
                  {specialization.splAtkMax > 1 ? (
                    <>
                      {specialization.splAtkMin} ~ {specialization.splAtkMax}
                    </>
                  ) : (
                    <>-</>
                  )}
                </span>
              </dd>
            </>
          )}
          <dt>* Atk Succ rate</dt>
          <dd>
            <span className="text-amber-300">{formulasStrength.attackRate}</span>
          </dd>
          <dd className="text-center">
            <span className="text-amber-300">-</span>
          </dd>
          <dt>* PVP Atk rate</dt>
          <dd>
            <span className="text-amber-300">{formulasStrength.attackRatePVP}</span>
          </dd>
          <dd className="text-center">
            <span className="text-amber-300">-</span>
          </dd>
        </>
      )}
    </>
  );
}
