import { useEffect, useState } from "react";

export default function Life({ value, resetOptions, item, setItem }) {
  const [selectValue, setSelectValue] = useState("");
  const [lifeOption, setLifeOption] = useState({
    hp: false,
    wiz: false,
    dmg: false,
    curse: false,
    defense: false,
  });

  const addLifeOption = (e) => {
    const { value } = e.target;
    const { hp, wiz, curse, dmg, defense } = lifeOption;
    const { optionLifeWiz, optionLifeCurse, optionLifeDmg, lifeRecoveryRate, optionLifeDefense, ...rest } = item;

    if (hp) setItem({ ...rest, lifeRecoveryRate: value });
    if (wiz) setItem({ ...rest, optionLifeWiz: value });
    if (curse) setItem({ ...rest, optionLifeCurse: value });
    if (dmg) setItem({ ...rest, optionLifeDmg: value });
    if (defense) setItem({ ...rest, optionLifeDefense: value });

    setSelectValue(value);
    console.log(selectValue);
  };

  const handleLifeOption = (e) => {
    const { value } = e.target;

    const options = { hp: false, wiz: false, dmg: false, curse: false, defense: false };

    if (value === "hp") options.hp = true;
    if (value === "wiz") options.wiz = true;
    if (value === "dmg") options.dmg = true;
    if (value === "curse") options.curse = true;
    if (value === "defense") options.defense = true;

    setSelectValue("");
    setLifeOption(options);
    const { lifeRecoveryRate, optionLifeWiz, optionLifeCurse, optionLifeDmg, optionLifeDefense, ...rest } = item;
    setItem(rest);
  };

  useEffect(() => {
    setSelectValue("");
    setLifeOption({
      wiz: false,
      curse: false,
      dmg: false,
      hp: false,
      defense: false,
    });
  }, [resetOptions]);

  return (
    <>
      {value && (
        <div>
          <label htmlFor="life">Add Life: </label>
          <select name="life" value={selectValue} onChange={(e) => addLifeOption(e)} className="text-black w-20">
            <option>Select</option>
            <option value={lifeOption.hp ? "1" : "4"}>{lifeOption.hp ? "+1%" : "+4"}</option>
            <option value={lifeOption.hp ? "2" : "8"}>{lifeOption.hp ? "+2%" : "+8"}</option>
            <option value={lifeOption.hp ? "3" : "12"}>{lifeOption.hp ? "+3%" : "+12"}</option>
            <option value={lifeOption.hp ? "4" : "16"}>{lifeOption.hp ? "+4%" : "+16"}</option>
          </select>
          <div className="flex flex-col mt-2">
            {value.typeOne && (
              <div>
                <label htmlFor="hp" className="mr-2">
                  {value.typeOne}
                </label>
                <input
                  type="checkbox"
                  checked={lifeOption.hp}
                  onChange={(e) => handleLifeOption(e)}
                  name="hp"
                  value="hp"
                />
              </div>
            )}
            {value.typeTwo && (
              <div>
                <label htmlFor="wiz" className="mr-2">
                  {value.typeTwo}
                </label>
                <input
                  type="checkbox"
                  checked={lifeOption.wiz}
                  value="wiz"
                  onChange={(e) => handleLifeOption(e)}
                  name="wiz"
                />
              </div>
            )}
            {value.typeThree && (
              <div>
                <label htmlFor="dmg" className="mr-2">
                  {value.typeThree}
                </label>
                <input
                  type="checkbox"
                  checked={lifeOption.dmg}
                  value="dmg"
                  onChange={(e) => handleLifeOption(e)}
                  name="dmg"
                />
              </div>
            )}
            {value.typeFour && (
              <div>
                <label htmlFor="curse" className="mr-2">
                  {value.typeFour}
                </label>
                <input
                  type="checkbox"
                  checked={lifeOption.curse}
                  value="curse"
                  onChange={(e) => handleLifeOption(e)}
                  name="curse"
                />
              </div>
            )}
            {value.typeFive && (
              <div>
                <label htmlFor="defense" className="mr-2">
                  {value.typeFive}
                </label>
                <input
                  type="checkbox"
                  checked={lifeOption.defense}
                  value="defense"
                  onChange={(e) => handleLifeOption(e)}
                  name="defense"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
