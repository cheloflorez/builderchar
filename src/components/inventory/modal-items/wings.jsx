import { useEffect, useState } from "react";
import BasicOptions from "../../options/basic-options";
import { useSelector } from "react-redux";
import Ancients from "../../options/ancients";
import Ancient from "./ancient";
export default function Wings({ item, setItem, resetOptions, optionsWings, modalActive }) {
  const test = useSelector((state) => state.setAncient);
  const [checkboxOptions, setCheckboxOptions] = useState({
    hpMax: false,
    manaMax: false,
    defenseIgnoreRate: false,
    returnDamageRate: false,
    restoreAllManaRate: false,
    restoreAllLifeRate: false,
  });

  const handleCheckOptions = (e, option) => {
    const { name } = e.target;

    let MaxOptions = 1,
      currentOption = 0;

    const options = {
      hpMax: false,
      manaMax: false,
      defenseIgnoreRate: false,
      returnDamageRate: false,
      restoreAllManaRate: false,
      restoreAllLifeRate: false,
    };
    let updateState = {};

    let { hpMax, manaMax, defenseIgnoreRate, returnDamageRate, restoreAllManaRate, restoreAllLifeRate, ...rest } = item;

    if (item.tier >= 3 || item.optionType === "excellentOptions") {
      let optionSelected, nameOption;
      MaxOptions = 2;
      for (const property in checkboxOptions) {
        if (checkboxOptions[property]) {
          currentOption++;
          optionSelected = optionsWings.optionsAdvanced.find((opt) => opt[property] > 0);
          nameOption = property;
          rest = { ...rest, [nameOption]: optionSelected[nameOption] };
          options[nameOption] = true;
        }
      }
      if (currentOption >= MaxOptions) {
        options[name] = false;
        updateState = { ...rest };
      }
    }

    if (currentOption < MaxOptions) {
      options[name] = !checkboxOptions[name];
      if (options[name]) {
        updateState = { ...rest, [name]: option[name] };
      } else {
        options[name] = false;
        updateState = { ...rest };
      }
    }
    setCheckboxOptions(options);
    setItem(updateState);
  };

  useEffect(() => {
    setCheckboxOptions({
      hpMax: false,
      manaMax: false,
      defenseIgnoreRate: false,
      returnDamageRate: false,
      restoreAllManaRate: false,
      restoreAllLifeRate: false,
    });
  }, [resetOptions]);

  return (
    <>
      <div className="col-span-2 flex flex-col justify-center items-center text-white text-sm text-center ">
        {item?.name && (
          <>
            <h4>
              <span
                className={`${item.update >= 7 && item.tier > 0 ? "text-yellow-300" : null} 
                ${item.activeAncient || item.optionType === "excellentOptions" ? "text-green-300" : null}`}
              >
                {item.optionType === "excellentOptions" && "Excellent"}
                {item.activeAncient && item.optionType} {item.name} {item.type}
                {item.update > 0 && ` +${item.update}`}
              </span>
            </h4>
            <img src={item.url} alt={item.name} />
            <ul>
              {item.damage && (
                <li>
                  {"DMG: "}
                  {item.damage}
                </li>
              )}
              {item.defense > 0 && <li>Armor: {item.defense}</li>}
              {item.DamageIncreaseRate > 0 && <li>Increases Damage by {item.DamageIncreaseRate}%</li>}
              {item.damageAbsorb > 0 && <li>Absorb of {item.damageAbsorb}% in comming DMG</li>}
              {item.minLevel > 0 && (
                <li>
                  <span>Minimun level required: {item.minLevel}</span>
                </li>
              )}
              <br />
              {item.criticalDamageRate && (
                <>
                  <li>
                    <span className="text-blue-300">Luck(success rate Jewel of Soul +25%)</span>
                  </li>
                  <li>
                    <span className="text-blue-300">Luck(critical damage rate +5%)</span>
                  </li>
                </>
              )}
              <>
                <li>
                  <span className="text-blue-300">
                    {item.lifeRecoveryRate > 0 && <>Automatic HP Recovery {item.lifeRecoveryRate}%</>}
                    {item.optionLifeWiz > 0 && <>Additional Wizardry Dmg +{item.optionLifeWiz}</>}
                    {item.optionLifeCurse > 0 && <>Addsitional Curse Spell +{item.optionLifeCurse}</>}
                    {item.optionLifeDmg > 0 && <>Addsitional Dmg +{item.optionLifeDmg}</>}
                    {item.optionLifeDefense > 0 && <>Additional Defense +{item.optionLifeDefense}</>}
                  </span>
                </li>
              </>
              <br />
              {item.activeAncient ? <Ancient item={item} optionsWings={optionsWings} /> : null}
              {optionsWings?.optionsAdvanced?.map((opt, index) => {
                const { name } = opt;
                if (item.tier === "event") {
                  return (
                    <li key={index}>
                      <span className="text-blue-300">
                        {optionsWings.optionsInDOM[0][index]} {item[name]}
                        {opt.rate}
                      </span>
                    </li>
                  );
                }
                if (checkboxOptions[name]) {
                  return (
                    <li key={index}>
                      <span className="text-blue-300">
                        {optionsWings.optionsInDOM[0][index]} {opt[name] + opt.multiplier * item.update}
                        {opt.rate}
                      </span>
                    </li>
                  );
                }
                return;
              })}
            </ul>
          </>
        )}
      </div>
      <div className="text-white col-span-2 flex flex-col justify-center items-center">
        {item?.ancient?.length > 0 ? <Ancients item={item} setItem={setItem} /> : null}
        {item?.name ? <h2 className="mb-2">Opciones</h2> : null}
        <form className="flex flex-col justify-center items-center gap-y-4">
          <BasicOptions resetOptions={resetOptions} item={item} setItem={setItem} optionsWings={optionsWings} />
          {optionsWings?.optionsAdvanced
            ? optionsWings?.optionsAdvanced.map((opt, index) => {
                const { name } = opt;
                if (item && item.activeAncient !== undefined) {
                  return null;
                }
                if (item?.tier <= 3 || item?.optionType === "excellentOptions") {
                  return (
                    <div key={index}>
                      <label htmlFor="">
                        {optionsWings.optionsInDOM.length > 1 ? (
                          <>
                            {optionsWings.optionsInDOM[1][index]} {opt[name] + opt.multiplier * item.update}
                          </>
                        ) : null}
                        {opt.rate})
                        <input
                          className="ml-2"
                          type="checkbox"
                          name={name}
                          checked={checkboxOptions[name]}
                          onChange={(e) => handleCheckOptions(e, opt)}
                        />
                      </label>
                    </div>
                  );
                }
              })
            : null}
        </form>
      </div>
    </>
  );
}
