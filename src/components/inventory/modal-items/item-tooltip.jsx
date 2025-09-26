// components/inventory/modal-items/item-tooltip.jsx
import React, { useState } from 'react';
import { getExcellentOptionBonus } from '../../../database/excellentOptions';
import { getAncientSetData } from '../../../database/ancientSets';
import { getMasterySetData } from '../../../database/masterySets';
import { getItemTemplate, detectAncientSets, detectMasterySets } from '../../../helpers/itemHelpers';


const ItemTooltip = ({ item, character, children, position = 'top' }) => {


  const [isVisible, setIsVisible] = useState(false);

  if (!item) return children;
  const template = getItemTemplate(item.templateId);
  if (!template) return children;

  const getPositionClasses = () => {
    switch (position) {
      case 'top': return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom': return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left': return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right': return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default: return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const renderStatValue = (value, isPositive = true, suffix = '') => {
    if (!value || value === 0) return null;
    const color = isPositive ? 'text-green-400' : 'text-red-400';
    const sign = isPositive && value > 0 ? '+' : '';
    return <span className={color}>{sign}{value}{suffix}</span>;
  };

  const getStatDisplayName = (statKey) => {
    const statNames = {
      criticalDamageRate: 'Critical Damage Rate',
      excellentDamageRate: 'Excellent Damage Rate',
      defenseIgnoreRate: 'Defense Ignore Rate',
      damageIncreaseRate: 'Damage Increase',
      manaRecoveryRate: 'Mana Recovery',
      skillDamage: 'Skill Damage',
      attackPower: 'Attack Power',
      defense: 'Defense',
      life: 'Life',
      mana: 'Mana'
    };
    return statNames[statKey] || statKey;
  };

  const getStatSuffix = (statKey) => {
    const percentStats = [
      'criticalDamageRate',
      'excellentDamageRate',
      'defenseIgnoreRate',
      'damageIncreaseRate',
      'manaRecoveryRate'
    ];
    return percentStats.includes(statKey) ? '%' : '';
  };

  const renderBasicStats = () => {
    const stats = [];

    if (template.upgradeValues) {
      Object.keys(template.upgradeValues).forEach(statKey => {
        const upgradeArray = template.upgradeValues[statKey];
        const upgradeLevel = Math.min(item.upgradeLevel || 0, upgradeArray.length - 1);
        const value = upgradeArray[upgradeLevel];

        if (statKey === 'defense') stats.push(['Defense', value]);
        else if (statKey === 'attackMin' && template.upgradeValues.attackMax) {
          const maxValue = template.upgradeValues.attackMax[upgradeLevel];
          stats.push(['Attack', `${value}~${maxValue}`]);
        }
      });
    }

    if (template.level) stats.push(['Required Level', template.level]);
    if (template.durability) stats.push(['Durability', template.durability]);

    return stats;
  };

  const renderExcellentOptions = () => {
    if (!item.activeExcellentOptions?.length) return null;
    return (
      <div className="border-t border-purple-500/30 pt-2 mt-2">
        <h4 className="text-purple-400 font-semibold text-xs mb-1">Excellent Options:</h4>
        <div className="space-y-1">
          {item.activeExcellentOptions.map((optionId, index) => {
            const option = getExcellentOptionBonus(optionId);
            if (!option) return null;
            return (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-gray-300">{option.name}</span>
                <span className="text-purple-400">{option.displayValue}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Función general para Ancient / Mastery
  const renderSetOptions = (type) => {

    const equippedAncientSets = detectAncientSets(character);
    const equippedMasterySets = detectMasterySets(character);

    let activeSet = null;
    let color = '';
    let setName = '';
    let equippedCount = 0;

    if (type === 'ancient' && item.activeAncientSet) {
      activeSet = getAncientSetData(item.activeAncientSet);
      color = 'orange';
      setName = item.activeAncientSet;
      equippedCount = equippedAncientSets[setName]?.count || 0;
    } else if (type === 'mastery' && item.master) {
      activeSet = getMasterySetData(item.master);
      color = 'yellow';
      setName = item.master;
      equippedCount = equippedMasterySets[setName]?.count || 0;
    } else {
      return null;
    }

    if (!activeSet) return null;

    // Solo mostrar los bonuses activos según cantidad de piezas equipadas
    const activeBonuses = Object.keys(activeSet.setBonuses)
      .filter(req => equippedCount >= parseInt(req))
      .sort((a, b) => parseInt(a) - parseInt(b));

    if (activeBonuses.length === 0) return null;

    return (
      <div className={`border-t border-${color}-500/30 pt-2 mt-2`}>
        <h4 className={`text-${color}-400 font-semibold text-xs mb-1`}>
          {type === 'ancient' ? 'Ancient Set:' : 'Mastery Set:'}
        </h4>
        <div className={`text-${color}-400 text-xs font-bold mb-2`}>{activeSet.name}</div>

        <div className="space-y-1">
          {activeBonuses.map((requiredCount, index) => {
            const bonus = activeSet.setBonuses[requiredCount];
            const required = parseInt(requiredCount);

            return (
              <div key={index} className="text-xs">
                <div className="flex items-center gap-2">
                  <span className={`text-${color}-300`}>({required} items):</span>
                  <span className={`text-${color}-400`}>{bonus.description}</span>
                </div>

                <div className="ml-4 mt-1 space-y-1">
                  {Object.keys(bonus).map(statKey => {
                    if (statKey === 'description') return null;
                    const value = bonus[statKey];
                    const statDisplayName = getStatDisplayName(statKey);
                    return (
                      <div key={statKey} className="flex justify-between text-xs">
                        <span className="text-gray-300">{statDisplayName}:</span>
                        <span className={`text-${color}-300`}>
                          +{value}{getStatSuffix(statKey)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSpecialOptions = () => {
    const specials = [];
    if (item.hasLuck) specials.push(<div key="luck" className="text-xs"><span className="text-cyan-400">✦ Luck +4</span></div>);
    if (item.hasJewelOfLife) specials.push(<div key="jol" className="text-xs"><span className="text-pink-400">♦ Jewel of Life +12</span></div>);
    if (!specials.length) return null;
    return (
      <div className="border-t border-cyan-500/30 pt-2 mt-2">
        <h4 className="text-cyan-400 font-semibold text-xs mb-1">Special Options:</h4>
        <div className="space-y-1">{specials}</div>
      </div>
    );
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute ${getPositionClasses()} z-50 pointer-events-none`}>
          <div className="bg-gray-900/95 border border-amber-500/50 rounded-lg p-3 shadow-2xl backdrop-blur-sm min-w-[280px] max-w-[400px]">

            {/* Header */}
            <div className="border-b border-amber-500/30 pb-2 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <img src={item.url} alt={item.displayName || item.name} className="w-8 h-8 object-contain" style={{ imageRendering: 'pixelated' }} />
                <div className="flex-1">
                  <h3 className="text-amber-300 font-bold text-sm">{item.displayName || item.name}</h3>
                </div>
              </div>
            </div>

            {/* Basic Stats */}
            <div className="space-y-1 text-xs mb-2">
              {renderBasicStats().map(([label, value], index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-300">{label}:</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Excellent, Ancient, Mastery, Specials */}
            {renderExcellentOptions()}
            {renderSetOptions('ancient')}
            {renderSetOptions('mastery')}
            {renderSpecialOptions()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemTooltip;
