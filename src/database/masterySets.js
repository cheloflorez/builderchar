// database/ancientSets.js

export const MASTERY_SETS = {
  BloodAngel: {
    name: "Mastery Blood Angel",
    maxItems: 4,
    setBonuses: {
      2: { 
        criticalDamageRate: 15,
        description: "Critical Damage Rate +15%" 
      },
      3: { 
        excellentDamageRate: 20,
        description: "Excellent Damage Rate +20%" 
      },
      4: { 
        defenseIgnoreRate: 15,
        damageIncreaseRate: 8,
        description: "Defense Ignore Rate +15%, Damage Increase +8%" 
      }
    }
  },
};

export const getMasterySetData = (setName) => {
  return MASTERY_SETS[setName];
};

