import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formulasEne from "../../../functions/formulas/formulasEnergy";

export default function Energy() {
  const character = useSelector((state) => state.charSelected[0]);
  const setAncient = useSelector((state) => state.setAncient);

  const [formulasEnergy, setFormulasEnergy] = useState({});
  const [specialization, setSpecialization] = useState({});

  useEffect(() => {
    if (character) formulasEne(character, setFormulasEnergy, setSpecialization, setAncient);
  }, [character]);

  return (
    <>
      {character && (
        <>
          <dt>Energy</dt>
          <dd>
            <span className="text-amber-300">{character.energy}</span>
          </dd>
          <dd className="text-center">
            <span className="text-blue-300">
              {formulasEnergy.energyStatsBlue === 0 ? "-" : <>(+{formulasEnergy.energyStatsBlue})</>}
            </span>
          </dd>
          {formulasEnergy.wizMin && (
            <>
              <dt>
                <span className="text-violet-500">* SPl Wiz Dmg</span>
              </dt>
              <dd className="col-span-2">
                <span className="text-violet-500">
                  {specialization.splWizMax < 1 ? (
                    "-"
                  ) : (
                    <>
                      {specialization.splWizMin} ~ {specialization.splWizMax}
                    </>
                  )}
                </span>
              </dd>
              {formulasEnergy.curseMin && (
                <>
                  {" "}
                  <dt>
                    <span className="text-violet-500">* SPl Curse</span>
                  </dt>
                  <dd className="col-span-2">
                    <span className="text-violet-500">
                      {specialization.splCurseMax < 1 ? (
                        "-"
                      ) : (
                        <>
                          {specialization.splCurseMin} ~ {specialization.splCurseMax}
                        </>
                      )}
                    </span>
                  </dd>
                </>
              )}
              <dt>* Wizardry Dmg</dt>
              <dd>
                <span className="text-amber-300">
                  {formulasEnergy.wizMin} ~ {formulasEnergy.wizMax}
                </span>
              </dd>
              <dd>
                <span className="text-amber-300"></span>
              </dd>
              {formulasEnergy.magicPower && (
                <>
                  <dt>* Magic Power(%)</dt>
                  <dd>
                    <span className="text-amber-300">{formulasEnergy.magicPower}%</span>
                  </dd>
                  <dd>
                    <span className="text-amber-300"></span>
                  </dd>
                </>
              )}
              {formulasEnergy.curseMax && (
                <>
                  <dt>* Curse</dt>
                  <dd>
                    <span className="text-amber-300">
                      {formulasEnergy.curseMin} ~ {formulasEnergy.curseMax}
                    </span>
                  </dd>
                  <dd>
                    <span className="text-amber-300"></span>
                  </dd>
                </>
              )}
            </>
          )}
          {formulasEnergy.skillPwr && (
            <>
              <dt>* Skill Atk Pwr(%)</dt>
              <dd className="col-span-2">
                <span className="text-amber-300">{formulasEnergy.skillPwr}%</span>
              </dd>
            </>
          )}
          {formulasEnergy.AOEAtkPwr && (
            <>
              <dt>* Div Atk Pwr(%)</dt>
              <dd className="col-span-2">
                <span className="text-amber-300">{formulasEnergy.divAtkPwr}%</span>
              </dd>
              <dt>* AOE Atk Pwr(%)</dt>
              <dd>
                <span className="text-amber-300">{formulasEnergy.AOEAtkPwr}%</span>
              </dd>
            </>
          )}
          {formulasEnergy.retAtkPwr && (
            <>
              <dt>* Ret Atk Pwr(%)</dt>
              <dd className="col-span-2">
                <span className="text-amber-300">{formulasEnergy.retAtkPwr}%</span>
              </dd>
              <dt>* Rage Atk Pwr(%)</dt>
              <dd>
                <span className="text-amber-300">{formulasEnergy.rageAtkPwr}%</span>
              </dd>
            </>
          )}
        </>
      )}
    </>
  );
}
