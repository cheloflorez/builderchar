import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    optionsBasic: [
      { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
      { Luck: true },
      {
        typeDefense: { typeFive: "Additional Defense" },
        /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
      },
    ],
    optionsAdvanced: [
      { hp: true, HP: 4, multiplier: 0, rate: "%", name: "HP" },
      { mana: true, Mana: 4, multiplier: 0, rate: "%", name: "Mana" },
      {
        DefRate: 10,
        name: "DefRate",
        rate: "%",
        multiplier: 0,
      },
      {
        damageReduceRate: 4,
        name: "damageReduceRate",
        rate: "%",
        multiplier: 0,
      },
      {
        damageReflect: 5,
        name: "damageReflect",
        rate: "%",
        multiplier: 0,
      },
      {
        increaseObtainingZenRate: 30,
        name: "increaseObtainingZenRate",
        rate: "%",
        multiplier: 0,
      },
    ],
    optionsInDOM: [
      [
        "Increase Maximun Life by ",
        "Increase Maximun Mana by ",
        "Increases Defense Success Rate by ",
        "Decreases Damage by ",
        "Reflect Damage by ",
        "Increases the amount of Zen acquired for hunting monsters by ",
      ],
      ["HP", "Mana", "Def Rate", "Decrease DMG", "Reflect", "Zen"],
    ],
  },
];

const excellentOptions = createSlice({
  name: "excellent",
  initialState,
  reducers: {},
});

export default excellentOptions.reducer;
