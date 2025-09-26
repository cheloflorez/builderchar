// database/excellentOptions.js

export const EXCELLENT_OPTIONS = {
  'exc_mana_5': {
    name: "Increase Mana +1/8",
    statKey: 'zenObtainIncreaseRate',
    value: 12.5, // 1/8 = 12.5%
    displayValue: "+1/8",
    applicableTypes: ['helm', 'armor', 'pants', 'gloves', 'boots']
  },
  
  'exc_zen_30': {
    name: "Increase Zen after hunt +30%",
    statKey: 'increaseObtainingZenRate',
    value: 30,
    displayValue: "+30%",
    applicableTypes: ['helm', 'armor', 'pants', 'gloves', 'boots']
  },
  
  'exc_dmg_dec_4': {
    name: "Damage Decrease +4%",
    statKey: 'damageReduceRate',
    value: 4,
    displayValue: "+4%",
    applicableTypes: ['helm', 'armor', 'pants', 'gloves', 'boots']
  },
  
  'exc_life_5': {
    name: "Increase Life +5%",
    statKey: 'lifeIncreaseRate',
    value: 5,
    displayValue: "+5%",
    applicableTypes: ['helm', 'armor', 'pants', 'gloves', 'boots']
  },
  
  'exc_def_success_15': {
    name: "Defense Success Rate +15%",
    statKey: 'defenseSuccessRate',
    value: 15,
    displayValue: "+15%",
    applicableTypes: ['armor', 'pants', 'gloves', 'boots']
  }
};

export const getExcellentOptionBonus = (optionId) => {
  return EXCELLENT_OPTIONS[optionId];
};

export const getAvailableExcellentOptions = (itemType) => {
  return Object.keys(EXCELLENT_OPTIONS).filter(optionId => 
    EXCELLENT_OPTIONS[optionId].applicableTypes.includes(itemType)
  );
};

// src/database/excellentOptions.js - AGREGAR al final del archivo:

export const LUCK_OPTIONS = {
  weapons: {
    label: 'Additional Damage',
    values: [
      { level: 1, display: '+4', value: 4 },
      { level: 2, display: '+8', value: 8 },
      { level: 3, display: '+12', value: 12 },
      { level: 4, display: '+16', value: 16 }
    ]
  },
  armor: {
    label: 'Additional Defense',
    values: [
      { level: 1, display: '+4', value: 4 },
      { level: 2, display: '+8', value: 8 },
      { level: 3, display: '+12', value: 12 },
      { level: 4, display: '+16', value: 16 }
    ]
  },
  defense: {
    label: 'Life Recovery',
    values: [
      { level: 1, display: '1%', value: 1 },
      { level: 2, display: '2%', value: 2 },
      { level: 3, display: '3%', value: 3 },
      { level: 4, display: '4%', value: 4 }
    ]
  }
};

export const getLuckOption = (itemType) => {
  if (itemType === 'weapon') return LUCK_OPTIONS.weapons;
  if (['helm', 'armor', 'pants', 'gloves', 'boots', 'wings'].includes(itemType)) {
    return LUCK_OPTIONS.armor; // Por defecto defense
  }
  return null;
};