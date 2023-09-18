import { useEffect, useState } from "react";

export default function Update({ value, item, setItem, resetOptions }) {
  const [selectUpdate, setSelectUpdate] = useState("");
  const updateItem = (e, value) => {
    const multiply = e.target.value;
    let addDefense = 0;
    setSelectUpdate(multiply);
    let hpMax, manaMax;

    if (item.hpMax > 0) hpMax = item.options[3][0].default + item.options[3][0].multiplier * multiply;
    if (item.manaMax > 0) manaMax = item.options[3][1].default + item.options[3][1].multiplier * multiply;

    addDefense = multiply * value.defense;
    if (multiply > 9) {
      let addExtraDef = 0;
      for (let i = 0; i <= multiply - 9; i++) {
        addExtraDef = addExtraDef + i;
      }
      addDefense = addDefense + addExtraDef;
    }

    let dmgIncreaseRate = value.DamageIncreaseRate[0];

    if (item.defense === 15 || item.name === "Cloak of Innoncence") dmgIncreaseRate = value.DamageIncreaseRate[1];

    const DamageIncreaseRate = item.DamageIncreaseRateDefault + multiply * dmgIncreaseRate;
    const damageAbsorb = item.damageAbsorbDefault + multiply * value.damageAbsorb;
    const defense = item.defenseDefault + addDefense;
    const minLevel = item.minLevelDefault + multiply * value.level;

    if (item.type === "wings") {
      setItem({
        ...item,
        DamageIncreaseRate,
        damageAbsorb,
        defense,
        update: multiply,
        minLevel,
        hpMax,
        manaMax,
      });
    }
    if (item.type === "Helm") {
      setItem({
        ...item,
        defense,
        update: multiply,
      });
    }
  };

  useEffect(() => {
    setSelectUpdate("");
  }, [resetOptions]);

  return (
    <>
      {value.update && (
        <div>
          <label htmlFor="update">Subir nivel: </label>
          <select name="update" value={selectUpdate} onChange={(e) => updateItem(e, value)} className="text-black">
            <option value="0">0</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
            <option value="8">+8</option>
            <option value="9">+9</option>
            <option value="10">+10</option>
            <option value="11">+11</option>
            <option value="12">+12</option>
            <option value="13">+13</option>
            <option value="14">+14</option>
            <option value="15">+15</option>
          </select>
        </div>
      )}
    </>
  );
}
