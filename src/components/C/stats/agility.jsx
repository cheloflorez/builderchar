import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formulasAgi from "../../../functions/formulas/formulasAgility";
import specializationAgility from "../../../functions/formulas/Specialization/specializationAgility";

export default function Agility() {
  const character = useSelector((state) => state.charSelected[0]);

  const [formulasAgility, setFormulasAgility] = useState({});
  const [specialization, setSpecialization] = useState({});

  useEffect(() => {
    if (character) {
      formulasAgi(character, setFormulasAgility, setSpecialization);
      specializationAgility(character, setSpecialization);
    }
  }, [character]);

  return (
    <>
      {character && (
        <>
          <dt>Agility</dt>
          <dd>
            <span className="text-amber-300">{character.agility}</span>
          </dd>
          <dd className="text-center">
            <span className="text-blue-300">-</span>
          </dd>
          {specialization.splAtkMax >= 0 && (
            <>
              <dt>
                <span className="text-violet-500">* Spl Atk Pwr</span>
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
            </>
          )}
          {specialization.splDef >= 0 && (
            <>
              <dt>
                <span className="text-violet-500">* Spl Def</span>
              </dt>
              <dd className="col-span-2">
                <span className="text-violet-500">{specialization.splDef < 1 ? "-" : specialization.splDef}</span>
              </dd>
            </>
          )}
          {specialization.splDefRate >= 0 && (
            <>
              <dt>
                <span className="text-violet-500">* Spl Def rate</span>
              </dt>
              <dd className="col-span-2">
                <span className="text-violet-500">
                  {specialization.splDefRate < 1 ? "-" : specialization.splDefRate}
                </span>
              </dd>
              {specialization.splPVPAtkRate >= 0 && (
                <>
                  <dt>
                    <span className="text-violet-500">* Spl PVP Atk(%)</span>
                  </dt>
                  <dd className="col-span-2">
                    <span className="text-violet-500">
                      {specialization.splPVPAtkRate < 1 ? "-" : specialization.splPVPAtkRate}
                    </span>
                  </dd>
                </>
              )}
              {specialization.splPVPDefRate >= 0 && (
                <>
                  <dt>
                    <span className="text-violet-500">* Spl PVP Def rate</span>
                  </dt>
                  <dd className="col-span-2">
                    <span className="text-violet-500">
                      {specialization.splPVPDefRate < 1 ? "-" : specialization.splPVPDefRate}
                    </span>
                  </dd>
                </>
              )}
            </>
          )}
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
          <dt>* Defense (%)</dt>
          <dd>
            <span className="text-amber-300">{formulasAgility.defenseRate}</span>
          </dd>
          <dd className="text-center">
            <span className="text-amber-300">-</span>
          </dd>
          <dt>* PvP Def (%)</dt>
          <dd>
            <span className="text-amber-300">{formulasAgility.defenseRatePVP}</span>
          </dd>
          <dd className="text-center">
            <span className="text-amber-300">-</span>
          </dd>
        </>
      )}
    </>
  );
}
