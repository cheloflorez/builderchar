// components/C/ExtendedStats.jsx
import React, { useMemo } from 'react';
import { useSelectedCharacter } from '../../hooks/useCharacter';
import { 
  EXTENDED_STATS_CONFIG, 
  calculateExtendedStats, 
  formatExtendedStatValue 
} from '../../utils/extendedStats';
import "../../styles/scroll-bar.css";

const ExtendedStats = () => {
  const { character } = useSelectedCharacter();

  // ✅ Calcular todas las extended stats dinámicamente
  const extendedStats = useMemo(() => {
    if (!character) return {};
    return calculateExtendedStats(character);
  }, [character]);

  if (!character) return null;

  return (
    <div className="space-y-1">
      {Object.entries(EXTENDED_STATS_CONFIG).map(([statKey, config]) => {
        const value = extendedStats[statKey] || 0;
        const displayValue = formatExtendedStatValue(statKey, value);
        
        return (
          <div key={statKey} className="flex justify-between">
            <span className="text-slate-300">{config.label}</span>
            <span className={`pr-3 ${value > 0 ? 'text-green-400' : 'text-amber-300'}`}>
              {displayValue}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ExtendedStats;