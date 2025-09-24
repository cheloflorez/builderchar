// components/inventory/modal-items/item-tooltip.jsx
import React, { useState } from 'react';
import { getItemTemplate, calculateItemStats } from '../../../helpers/itemHelpers';
import { getExcellentOptionBonus } from '../../../database/excellentOptions';
import { getAncientSetData } from '../../../database/ancientSets';

const ItemTooltip = ({ item, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!item) {
    return children;
  }

  // Obtener template del item desde la base de datos
  const template = getItemTemplate(item.templateId);
  if (!template) {
    return children; // Si no hay template, no mostrar tooltip
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const renderStatValue = (value, isPositive = true, suffix = '') => {
    if (!value || value === 0) return null;
    const color = isPositive ? 'text-green-400' : 'text-red-400';
    const sign = isPositive && value > 0 ? '+' : '';
    return (
      <span className={color}>{sign}{value}{suffix}</span>
    );
  };

  const renderUpgradeInfo = () => {
    if (!item.upgradeLevel || item.upgradeLevel === 0) return null;
    
    return (
      <div className="text-center mb-2">
        <span className="text-yellow-400 font-bold">+{item.upgradeLevel}</span>
      </div>
    );
  };

  const renderBasicStats = () => {
    const stats = [];
    
    // Stats calculadas con upgrades
    if (template.upgradeValues) {
      Object.keys(template.upgradeValues).forEach(statKey => {
        const upgradeArray = template.upgradeValues[statKey];
        const upgradeLevel = Math.min(item.upgradeLevel || 0, upgradeArray.length - 1);
        const value = upgradeArray[upgradeLevel];
        
        if (statKey === 'defense') {
          stats.push(['Defense', value]);
        } else if (statKey === 'attackMin' && template.upgradeValues.attackMax) {
          const maxValue = template.upgradeValues.attackMax[upgradeLevel];
          stats.push(['Attack', `${value}~${maxValue}`]);
        }
      });
    }
    
    if (template.level) {
      stats.push(['Required Level', template.level]);
    }

    if (template.durability) {
      stats.push(['Durability', template.durability]);
    }

    return stats;
  };

  const renderExcellentOptions = () => {
    if (!item.activeExcellentOptions || item.activeExcellentOptions.length === 0) {
      return null;
    }

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

  const renderAncientOptions = () => {
    if (!item.activeAncientSet) return null;

    const ancientSet = getAncientSetData(item.activeAncientSet);
    if (!ancientSet) return null;

    return (
      <div className="border-t border-orange-500/30 pt-2 mt-2">
        <h4 className="text-orange-400 font-semibold text-xs mb-1">Ancient Set:</h4>
        <div className="text-orange-400 text-xs font-bold mb-2">{ancientSet.name}</div>
        
        {/* Mostrar bonus del set disponibles */}
        <div className="space-y-1">
          {Object.keys(ancientSet.setBonuses).map((requiredCount, index) => {
            const bonus = ancientSet.setBonuses[requiredCount];
            const required = parseInt(requiredCount);
            
            return (
              <div key={index} className="text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-orange-300">({required} items):</span>
                  <span className="text-orange-400">{bonus.description}</span>
                </div>
                
                {/* Mostrar bonus específicos si están activos */}
                <div className="ml-4 mt-1 space-y-1">
                  {Object.keys(bonus).map((statKey) => {
                    if (statKey === 'description') return null;
                    
                    const value = bonus[statKey];
                    const statDisplayName = getStatDisplayName(statKey);
                    
                    return (
                      <div key={statKey} className="flex justify-between text-xs">
                        <span className="text-gray-300">{statDisplayName}:</span>
                        <span className="text-orange-300">+{value}{getStatSuffix(statKey)}</span>
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

  const renderSpecialOptions = () => {
    const specials = [];
    
    if (item.hasLuck) {
      specials.push(
        <div key="luck" className="text-xs">
          <span className="text-cyan-400">✦ Luck +4</span>
        </div>
      );
    }
    
    if (item.hasJewelOfLife) {
      specials.push(
        <div key="jol" className="text-xs">
          <span className="text-pink-400">♦ Jewel of Life +12</span>
        </div>
      );
    }

    if (specials.length === 0) return null;

    return (
      <div className="border-t border-cyan-500/30 pt-2 mt-2">
        <h4 className="text-cyan-400 font-semibold text-xs mb-1">Special Options:</h4>
        <div className="space-y-1">
          {specials}
        </div>
      </div>
    );
  };

  const renderItemCategory = () => {
    return (
      <div className="text-xs text-gray-400 mb-1">
        {template.category && (
          <span className="capitalize">{template.category}</span>
        )}
        {template.type && template.category && ' • '}
        {template.type && (
          <span className="capitalize">{template.type}</span>
        )}
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
            
            {/* Header del item */}
            <div className="border-b border-amber-500/30 pb-2 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <img 
                  src={item.url} 
                  alt={item.displayName || item.name}
                  className="w-8 h-8 object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="flex-1">
                  <h3 className="text-amber-300 font-bold text-sm">
                    {item.displayName || item.name}
                  </h3>
                  {renderItemCategory()}
                </div>
              </div>
              
              {/* Información de upgrade */}
              {renderUpgradeInfo()}
            </div>

            {/* Stats básicas */}
            <div className="space-y-1 text-xs mb-2">
              {renderBasicStats().map(([label, value], index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-300">{label}:</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Excellent Options */}
            {renderExcellentOptions()}

            {/* Ancient Set Options */}
            {renderAncientOptions()}

            {/* Special Options (Luck, JOL, etc.) */}
            {renderSpecialOptions()}

            {/* Flecha del tooltip */}
            <div className={`absolute w-0 h-0 ${
              position === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900' :
              position === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900' :
              position === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900' :
              'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900'
            }`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemTooltip;