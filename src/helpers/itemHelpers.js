// helpers/itemHelpers.js
import { ITEMS_DATABASE } from '../database/itemsDatabase.js';
import { getExcellentOptionBonus } from '../database/excellentOptions.js';
import { ANCIENT_SETS } from '../database/ancientSets.js';

// ✅ OBTENER TEMPLATE COMPLETO
export const getItemTemplate = (templateId) => {
  return ITEMS_DATABASE[templateId];
};

// ✅ VERIFICAR CAPABILITIES
export const canItemHaveLuck = (templateId) => {
  const template = getItemTemplate(templateId);
  return template?.canHaveLuck || false;
};

export const canItemHaveJewelOfLife = (templateId) => {
  const template = getItemTemplate(templateId);
  return template?.canHaveJewelOfLife || false;
};

export const canItemHaveAncient = (templateId) => {
  const template = getItemTemplate(templateId);
  return template?.ancientSets?.length > 0;
};

// ✅ CALCULAR STATS TOTALES DE UN ITEM
export const calculateItemStats = (equippedItem) => {
  const template = getItemTemplate(equippedItem.templateId);
  if (!template) return {};
  
  const stats = {};
  
  // 1. Stats base + upgrade
  Object.keys(template.upgradeValues || {}).forEach(statKey => {
    const upgradeArray = template.upgradeValues[statKey];
    const upgradeLevel = Math.min(equippedItem.upgradeLevel || 0, upgradeArray.length - 1);
    stats[statKey] = upgradeArray[upgradeLevel];
  });
  
  // 2. Excellent options
  if (equippedItem.activeExcellentOptions) {
    equippedItem.activeExcellentOptions.forEach(optionId => {
      const optionBonus = getExcellentOptionBonus(optionId);
      if (optionBonus) {
        stats[optionBonus.statKey] = (stats[optionBonus.statKey] || 0) + optionBonus.value;
      }
    });
  }
  
  // 3. Luck bonus
  if (equippedItem.hasLuck && canItemHaveLuck(equippedItem.templateId)) {
    stats.luck = (stats.luck || 0) + 4;
  }
  
  // 4. Jewel of Life bonus
  if (equippedItem.hasJewelOfLife && canItemHaveJewelOfLife(equippedItem.templateId)) {
    stats.life = (stats.life || 0) + 12;
  }
  
  return stats;
};

// ✅ OBTENER TODOS LOS ITEMS EQUIPADOS
export const getAllEquippedItems = (character) => {
  const items = [];
  
  if (!character?.items) return items;
  
  // Items del set
  if (character.items.set) {
    Object.values(character.items.set).forEach(item => {
      if (item) items.push(item);
    });
  }
  
  // Earrings
  if (character.items.earrings) {
    if (character.items.earrings.left) items.push(character.items.earrings.left);
    if (character.items.earrings.right) items.push(character.items.earrings.right);
  }
  
  // Rings
  if (character.items.rings) {
    if (character.items.rings.left) items.push(character.items.rings.left);
    if (character.items.rings.right) items.push(character.items.rings.right);
  }
  
  // Otros items únicos
  ['pet', 'wings', 'pendant', 'artifact', 'pentagram', 'neck'].forEach(slot => {
    if (character.items[slot]) {
      items.push(character.items[slot]);
    }
  });
  
  return items;
};

// ✅ DETECTAR ANCIENT SETS EQUIPADOS
export const detectAncientSets = (character) => {
  const equippedItems = getAllEquippedItems(character);
  const ancientSets = {};
  
  equippedItems.forEach(item => {
    if (item.activeAncientSet) {
      if (!ancientSets[item.activeAncientSet]) {
        ancientSets[item.activeAncientSet] = {
          count: 0,
          items: []
        };
      }
      ancientSets[item.activeAncientSet].count++;
      ancientSets[item.activeAncientSet].items.push({
        type: getItemTemplate(item.templateId).type,
        name: getItemTemplate(item.templateId).name
      });
    }
  });
  
  return ancientSets;
};

// ✅ CALCULAR BONUS DE ANCIENT SETS ACTIVOS
export const calculateAncientSetBonuses = (character) => {
  const ancientSets = detectAncientSets(character);
  const totalBonuses = {};
  
  Object.keys(ancientSets).forEach(setName => {
    const setData = ANCIENT_SETS[setName];
    const equippedCount = ancientSets[setName].count;
    
    if (setData) {
      Object.keys(setData.setBonuses).forEach(requiredCount => {
        const required = parseInt(requiredCount);
        if (equippedCount >= required) {
          const bonuses = setData.setBonuses[requiredCount];
          
          Object.keys(bonuses).forEach(statKey => {
            if (statKey !== 'description') {
              totalBonuses[statKey] = (totalBonuses[statKey] || 0) + bonuses[statKey];
            }
          });
        }
      });
    }
  });
  
  return totalBonuses;
};

// ✅ OBTENER INFO DE ANCIENT SETS PARA UI
export const getAncientSetsInfo = (character) => {
  const ancientSets = detectAncientSets(character);
  const setsInfo = [];
  
  Object.keys(ancientSets).forEach(setName => {
    const setData = ANCIENT_SETS[setName];
    const equippedCount = ancientSets[setName].count;
    
    if (setData) {
      const activeBonuses = [];
      const inactiveBonuses = [];
      
      Object.keys(setData.setBonuses).forEach(requiredCount => {
        const required = parseInt(requiredCount);
        const bonus = setData.setBonuses[requiredCount];
        
        if (equippedCount >= required) {
          activeBonuses.push({
            requiredCount: required,
            description: bonus.description,
            isActive: true
          });
        } else {
          inactiveBonuses.push({
            requiredCount: required,
            description: bonus.description,
            isActive: false
          });
        }
      });
      
      setsInfo.push({
        setName,
        displayName: setData.name,
        equippedCount,
        maxItems: setData.maxItems,
        items: ancientSets[setName].items,
        activeBonuses,
        inactiveBonuses
      });
    }
  });
  
  return setsInfo;
};