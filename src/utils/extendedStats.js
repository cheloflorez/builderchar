// utils/extendedStatsSystem.js
import { getAllEquippedItems, calculateItemStats, calculateAncientSetBonuses } from '../helpers/itemHelpers.js';

// ✅ DEFINICIÓN DE TODAS LAS OPCIONES EXTENDIDAS
export const EXTENDED_STATS_CONFIG = {
  criticalDamageRate: {
    label: "*Crit dmg (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  excellentDamageRate: {
    label: "*Exc dmg (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  doubleDamageRate: {
    label: "*Double dmg (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  tripleDamageRate: {
    label: "*Triple dmg (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  defenseIgnoreRate: {
    label: "*Def ign (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  returnDamageRate: {
    label: "*Return dmg (%)",
    suffix: "%",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  skillDamage: {
    label: "*Skill Atk dmg inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  criticalDamage: {
    label: "*Crit dmg inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  excellentDamage: {
    label: "*Exc dmg inc",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageIncreaseRate: {
    label: "*Dmg inc (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  damageReduceRate: {
    label: "*Dmg Redc (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items', 'sets']
  },
  damageReduce: {
    label: "*Reduccion de daños",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageReflect: {
    label: "*Dmg Reflc (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  damageAbsorb: {
    label: "*Dmg Absorb (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  lifeRecoveryRate: {
    label: "*HP rec (%)",
    suffix: "",
    decimal: true,
    sources: ['3rdTree', '4thTree', 'items']
  },
  lifeRecoveryForKillMonster: {
    label: "*Mob Atk HP rec",
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
  manaRecoveryRate: {
    label: "*MP rec (%)",
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
  recoveryAGRate: {
    label: "*AG rec (%)",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  reduceAGusedRate: {
    label: "*AG usage red (%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  recoverySDRate: {
    label: "*SD rec (%)",
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
    label: "*Res all SD (%)",
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
    label: "*SD(%) when atckd",
    suffix: "",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  sdRateWhenAttack2: {
    label: "*SD % when atk",
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
    label: "*Stun res (%)",
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
    label: "*Shield blck(%)",
    suffix: "%",
    decimal: false,
    sources: ['3rdTree', '4thTree', 'items']
  },
  weaponBlockRate: {
    label: "*Weapon blck(%)",
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
  }
  
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

// ✅ AGREGAR BONUSES DE ITEMS
const addItemBonuses = (item, extendedStats) => {
  // Aquí mapeas las propiedades de los items a las extended stats
  if (item.criticalDamageRate) extendedStats.criticalDamageRate += item.criticalDamageRate;
  if (item.excellentDamageRate) extendedStats.excellentDamageRate += item.excellentDamageRate;
  if (item.defenseIgnoreRate) extendedStats.defenseIgnoreRate += item.defenseIgnoreRate;
  if (item.skillDamage) extendedStats.skillDamage += item.skillDamage;
  if (item.damageIncreaseRate) extendedStats.damageIncreaseRate += item.damageIncreaseRate;
  if (item.lifeRecoveryRate) extendedStats.lifeRecoveryRate += item.lifeRecoveryRate;
  // ... agregar más según necesites
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