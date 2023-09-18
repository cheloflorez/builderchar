import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    tier: 1,
    optionsBasic: [
      { update: true, defense: 3, damageAbsorb: 2, DamageIncreaseRate: [2], level: 4 },
      { Luck: true },
      {
        typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" },
      },
    ],
  },
  {
    tier: 2,
    optionsBasic: [
      { update: true, defense: 2, damageAbsorb: 2, DamageIncreaseRate: [1, 2], level: 4 },
      { Luck: true },
      {
        typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" },
        typePhysicalMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeThree: "Additional Dmg" },
      },
    ],
    optionsAdvanced: [
      { hp: true, hpMax: 50, multiplier: 5, name: "hpMax" },
      { mana: true, manaMax: 50, multiplier: 5, name: "manaMax" },
      {
        defenseIgnoreRate: 3,
        name: "defenseIgnoreRate",
        rate: "%",
        multiplier: 0,
      },
    ],
    optionsInDOM: [
      ["Increases Life by ", "Increases Mana by ", "Increase Enemy DEF Ignore Rate by "],
      ["Max Hp ", "Max Mana ", "Ignore "],
    ],
  },
  {
    tier: 3,
    optionsBasic: [
      { update: true, defense: 4, damageAbsorb: 2, DamageIncreaseRate: [2], level: 0 },
      { Luck: true },
      {
        typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" },
        typePhysicalMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeThree: "Additional Dmg" },
      },
    ],
    optionsAdvanced: [
      {
        restoreAllLifeRate: 5,
        name: "restoreAllLifeRate",
        rate: "%",
        multiplier: 0,
      },
      {
        restoreAllManaRate: 5,
        name: "restoreAllManaRate",
        rate: "%",
        multiplier: 0,
      },
      {
        returnDamageRate: 5,
        name: "returnDamageRate",
        rate: "%",
        multiplier: 0,
      },
      {
        defenseIgnoreRate: 5,
        name: "defenseIgnoreRate",
        rate: "%",
        multiplier: 0,
      },
    ],
    optionsInDOM: [
      [
        "Increase chance of Fully Recovering Life by ",
        "Increase chance of Fully Recovering Mana by ",
        "Increase chance to return incoming damage by ",
        "Increase Enemy DEF Ignore Rate by ",
      ],
      ["Recover Max Hp ", "Recover Max Mana ", "Return Dmg", "Ignore "],
    ],
  },
  {
    tier: "event",
    optionsBasic: [{ Luck: true }],
    optionsAdvanced: [
      {
        restoreAllLifeRate: 4,
        name: "restoreAllLifeRate",
        rate: "%",
      },
      {
        defenseIgnoreRate: 4,
        name: "defenseIgnoreRate",
        rate: "%",
      },
      {
        doubleDamageRate: 4,
        name: "doubleDamageRate",
        rate: "%",
      },
    ],
    optionsInDOM: [
      ["Increase HP Full Recovery Rate by ", "Increase Enemy DEF Ignore Rate by ", "Increase Double DMG Rate by "],
    ],
  },
];

const wingsOptions = createSlice({
  name: "wings",
  initialState,
  reducers: {},
});

export default wingsOptions.reducer;
