// database/ancientSets.js

export const ANCIENT_SETS = {
  barnake: {
    name: "Barnake Set",
    maxItems: 5,
    setBonuses: {
      2: { 
        criticalDamageRate: 5,
        description: "Critical Damage Rate +5%" 
      },
      3: { 
        excellentDamageRate: 10,
        description: "Excellent Damage Rate +10%" 
      },
      5: { 
        defenseIgnoreRate: 15,
        damageIncreaseRate: 8,
        description: "Defense Ignore Rate +15%, Damage Increase +8%" 
      }
    }
  },
  
  apollo: {
    name: "Apollo Set",
    maxItems: 4,
    setBonuses: {
      2: { 
        manaRecoveryRate: 8,
        skillDamage: 12,
        description: "Mana Recovery +8%, Skill Damage +12" 
      },
      4: { 
        criticalDamageRate: 18,
        excellentDamageRate: 15,
        description: "Critical Damage +18%, Excellent Damage +15%" 
      }
    }
  }
};

export const getAncientSetData = (setName) => {
  return ANCIENT_SETS[setName];
};