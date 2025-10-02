// utils/extendedStatsSystem.js
import { getAllEquippedItems, calculateItemStats, calculateAncientSetBonuses, calculateMasterySetBonuses } from '../helpers/itemHelpers.js';

// ✅ DEFINICIÓN DE TODAS LAS OPCIONES EXTENDIDAS
export const EXTENDED_STATS_CONFIG = {
  criticalDamageRate: {
    label: "*Critical DMG (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  excellentDamageRate: {
    label: "*Excellent DM (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  doubleDamageRate: {
    label: "*Double DMG (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  tripleDamageRate: {
    label: "*Triple DMG (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  defenseIgnoreRate: {
    label: "*Def ignore (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  returnDamageRate: {
    label: "*Return DMG (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  skillDamage: {
    label: "*Skill ATK DMG inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  criticalDamage: {
    label: "*Crit DMG inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  excellentDamage: {
    label: "*Exc DMG inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageIncreaseRate: {
    label: "*DMG inc (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  damageReduceRate: {
    label: "*DMG Reduction (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  damageReduce: {
    label: "*DMG Reduc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageReflect: {
    label: "*DMG Reflect (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageAbsorb: {
    label: "*DMG Absorb (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageCorrect: {
    label: "*DMG Correction",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  AutomaticHPRecoveryIncreaseRate: {
    label: "*HP recovery",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  lifeRecoveryForKillMonster: {
    label: "*Mob Atk HP recovery",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  restoreAllLifeRate: {
    label: "*Res all HP (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  lifeAbsorb: {
    label: "*HP absorb",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  autoManaRecoveryRate: {
    label: "*MP recovery",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  manaRecoveryForKillMonster: {
    label: "*Mob Atk MP rec",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  restoreAllManaRate: {
    label: "*Res all MP (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  reduceUseManaRate: {
    label: "*MP use redc (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  AutomaticAGRecoveryIncreaseRate: {
    label: "*AG rec (%)",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  reduceAGusedRate: {
    label: "*AG usage reduction (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  SDRecoverySpeedIncreaseRate: {
    label: "*SD recovery (%)",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdRecoveryForKillMonster: {
    label: "*Mob Atk SD red",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  restoreAllSDRate: {
    label: "*Restore all SD (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdAbsorb: {
    label: "*SD absorb",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdRateWhenAttack: {
    label: "*SD(%) when attacked",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdRateWhenAttack2: {
    label: "*SD % when attacking",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdIgnoreRate: {
    label: "*SD Ignore (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  stunRate: {
    label: "*Stun (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  stunResistenceRate: {
    label: "*Stun resistance (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  basicDefense: {
    label: "*Basic Def",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  shieldAbsorb: {
    label: "*Shield absorb",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  shieldBlockRate: {
    label: "*Shield block(%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  weaponBlockRate: {
    label: "*Weapon block(%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  zenObtainIncreaseRate: {
    label: "*Zen obtain increase rate(%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
};

// ✅ FÓRMULAS PARA STATS QUE NECESITAN CÁLCULOS ADICIONALES
const STAT_FORMULAS = {
  autoManaRecoveryRate: (value, character) => {
    const baseManaRecRate = 3.7;
    const manaFlask = character.statsBar?.mana || 0;
    return ((baseManaRecRate + value) / 100) * manaFlask;
  },

  AutomaticHPRecoveryIncreaseRate: (value, character) => {
    const baseLifeRecRate = 1;
    const lifeFlask = character.statsBar?.hp || 0;
    return ((baseLifeRecRate + value) / 100) * lifeFlask;
  },

  SDRecoverySpeedIncreaseRate: (value, character) => {
    const sdFlask = character.statsBar?.sd || 0;
    const baseRate = sdFlask * 0.003344; // 0.3344%
    const cartaBonus = value; // El % que viene de carta/3rd tree/items
    return baseRate * (1 + cartaBonus / 100);
  },

AutomaticAGRecoveryIncreaseRate: (value, character) => {
    const agFlask = character.statsBar?.ag || 0;
    const baseRate = 0.0368; // 6.78%
    const cartaBonus = value / 100; // Convertir % a decimal
    return Math.floor(agFlask * (baseRate + cartaBonus));
  }
};

// ✅ FUNCIÓN PRINCIPAL PARA CALCULAR TODAS LAS EXTENDED STATS
export const calculateExtendedStats = (character) => {
  const extendedStats = {};

  // Inicializar todas las stats en 0
  Object.keys(EXTENDED_STATS_CONFIG).forEach(statKey => {
    extendedStats[statKey] = 0;
  });

  // ✅ 1. BONUS DEL 3RD TREE
  if (character['3rdTree']) {
    character['3rdTree'].forEach(skill => {
      const statKey = skill.valueType;
      if (statKey && extendedStats.hasOwnProperty(statKey)) {
        extendedStats[statKey] += skill.value;
      }
    });
  }

  // ✅ 2. BONUS DEL 4TH TREE (cuando lo agregues)
  if (character['4thTree']) {
    character['4thTree'].forEach(skill => {
      const statKey = getExtendedStatKey(skill.valueType);
      if (statKey && extendedStats.hasOwnProperty(statKey)) {
        extendedStats[statKey] += skill.value;
      }
    });
  }

  // ✅ 3. BONUS DE ITEMS
  if (character.items) {
    // Items individuales
    const equippedItems = getAllEquippedItems(character);
    equippedItems.forEach(item => {
      const itemStats = calculateItemStats(item);
      Object.keys(itemStats).forEach(statKey => {
        if (extendedStats.hasOwnProperty(statKey)) {
          extendedStats[statKey] += itemStats[statKey];
        }
      });
    });

    // Ancient set bonuses
    const ancientBonuses = calculateAncientSetBonuses(character);
    Object.keys(ancientBonuses).forEach(statKey => {
      if (extendedStats.hasOwnProperty(statKey)) {
        extendedStats[statKey] += ancientBonuses[statKey];
      }
    });

    // 🔹 Mastery set bonuses
    const masteryBonuses = calculateMasterySetBonuses(character);
    Object.keys(masteryBonuses).forEach(statKey => {
      if (extendedStats.hasOwnProperty(statKey)) {
        extendedStats[statKey] += masteryBonuses[statKey];
      }
    });
  }
  // ✅ 4. APLICAR FÓRMULAS A STATS QUE LO NECESITEN
  Object.keys(STAT_FORMULAS).forEach(statKey => {
    if (extendedStats.hasOwnProperty(statKey)) {
      extendedStats[statKey] = STAT_FORMULAS[statKey](extendedStats[statKey], character);
    }
  });

  return extendedStats;
};

// ✅ MAPEAR VALUETYPES A EXTENDED STATS
const getExtendedStatKey = (valueType) => {
  const mapping = {
    'CritDmgRate': 'criticalDamageRate',
    'ExcDmgRate': 'excellentDamageRate',
    'DoubleDmgRate': 'doubleDamageRate',
    'TripleDmgRate': 'tripleDamageRate',
    'DefIgnoreRate': 'defenseIgnoreRate',
    'ReturnDmgRate': 'returnDamageRate',
    'SkillDmg': 'skillDamage',
    'CritDmg': 'criticalDamage',
    'ExcDmg': 'excellentDamage',
    'DmgIncRate': 'damageIncreaseRate',
    'DmgReduceRate': 'damageReduceRate',
    'DmgReduce': 'damageReduce',
    'DmgReflect': 'damageReflect',
    'DmgAbsorb': 'damageAbsorb',
    'HPRecRate': 'lifeRecoveryRate',
    'HPRecKill': 'lifeRecoveryForKillMonster',
    'HPRestoreRate': 'restoreAllLifeRate',
    'HPAbsorb': 'lifeAbsorb',
    'MPRecRate': 'manaRecoveryRate',
    'MPRecKill': 'manaRecoveryForKillMonster',
    'MPRestoreRate': 'restoreAllManaRate',
    'MPReduceRate': 'reduceUseManaRate',
    'AGRecRate': 'recoveryAGRate',
    'AGReduceRate': 'reduceAGusedRate',
    'SDRecRate': 'recoverySDRate',
    'SDRecKill': 'sdRecoveryForKillMonster',
    'SDRestoreRate': 'restoreAllSDRate',
    'SDAbsorb': 'sdAbsorb',
    'SDRateAttacked': 'sdRateWhenAttack',
    'SDRateAttack': 'sdRateWhenAttack2',
    'SDIgnoreRate': 'sdIgnoreRate',
    'StunRate': 'stunRate',
    'StunResRate': 'stunResistenceRate',
    'BasicDef': 'basicDefense',
    'ShieldAbsorb': 'shieldAbsorb',
    'ShieldBlockRate': 'shieldBlockRate',
    'WeaponBlockRate': 'weaponBlockRate',
    'ZenIncRate': 'increaseObtainingZenRate'
  };

  return mapping[valueType] || null;
};

// ✅ FORMATEAR VALOR PARA DISPLAY
export const formatExtendedStatValue = (statKey, value) => {
  const config = EXTENDED_STATS_CONFIG[statKey];
  if (!config) return "-";

  if (value === 0) return "-";

  let formattedValue = value;

  // Aplicar decimales si es necesario
  if (config.decimal && value % 1 !== 0) {
    formattedValue = value.toFixed(1);
  }

  // Agregar sufijo
  return `${formattedValue}${config.suffix}`;
};