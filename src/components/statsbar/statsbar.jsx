// components/StatsBar/StatsBar.jsx
import React, { useEffect } from 'react';
import { useSelectedCharacter } from '../../hooks/useCharacter';
import statsBar from '../../functions/formulas/formulas-bar/stats-bar';

const StatsBar = () => {
  const { character, updateStatsBar } = useSelectedCharacter();

  // Recalcular stats cuando cambie el personaje, stats, items o 3rdTree
  useEffect(() => {
    if (character) {
      // Llamar a la función de cálculo con datos vacíos para setAncient por ahora
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

  const statsData = [
    {
      image: '/src/assets/windows-stats/interface/hp.png',
      value: character.statsBar?.hp || 0,
      label: 'HP',
      color: 'text-red-400'
    },
    {
      image: '/src/assets/windows-stats/interface/mana.png',
      value: character.statsBar?.mana || 0,
      label: 'Mana',
      color: 'text-blue-400'
    },
    {
      image: '/src/assets/windows-stats/interface/sd.png',
      value: character.statsBar?.sd || 0,
      label: 'SD',
      color: 'text-yellow-400'
    },
    {
      image: '/src/assets/windows-stats/interface/ag.png',
      value: character.statsBar?.ag || 0,
      label: 'AG',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="mt-4 p-3 bg-black/20 rounded-lg border border-gray-600/30">
      <div className="text-xs text-gray-400 font-semibold mb-3 text-center">
        Character Resources
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {statsData.map((stat, index) => (
          <div key={stat.label} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={stat.image}
                alt={stat.label}
                className="object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold drop-shadow-lg">
                  {stat.value.toLocaleString()}
                </span>
              </div>
            </div>
            <span className={`${stat.color} text-xs mt-1 font-medium`}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;