import React, { useEffect } from 'react';
import { useSelectedCharacter } from '../../hooks/useCharacter';
import statsBar from '../../functions/formulas/formulas-bar/stats-bar';

const StatsBar = () => {
  const { character, updateStatsBar } = useSelectedCharacter();

  // Recalcular stats cuando cambie el personaje
  useEffect(() => {
    if (character) {
      statsBar(character, updateStatsBar, []);
    }
  }, [
    character?.stats, 
    character?.items, 
    character?.['3rdTree'], 
    character?.level, 
    updateStatsBar
  ]);

  if (!character) {
    return null;
  }

    // Configuración de posiciones - fácil de ajustar
  const statsConfig = [
    { 
      key: 'hp', 
      color: 'text-white', 
      position: { top: '25px', left: '143px' } 
    },
    { 
      key: 'mana', 
      color: 'text-white', 
      position: { top: '25px', left: '665px' } 
    },
    { 
      key: 'ag', 
      color: 'text-white', 
      position: { top: '0px', left: '565px' } 
    },
    { 
      key: 'sd', 
      color: 'text-white', 
      position: { top: '0px', left: '253px' } 
    }
  ];


  return (
    <div 
      className="relative bg-[url('/windows-stats/statsbar.webp')] bg-cover bg-center"
      style={{ width: '924px', height: '103px' }}
    >
      {statsConfig.map(stat => (
        <div 
          key={stat.key}
          className={`absolute flex items-center justify-center ${stat.color} font-bold text-sm drop-shadow-lg`}
          style={{ 
            ...stat.position,
            width: '100px',
            height: '30px'
          }}
        >
          {character.statsBar?.[stat.key] || 0}
        </div>
      ))}
    </div>
  );
};


export default StatsBar;