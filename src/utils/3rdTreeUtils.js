// 🔥 SISTEMA AUTOMÁTICO - NO MÁS SWITCHES MANUALES
export const calculate3rdTreeBonus = (character) => {
  const bonus = {
    // Stats base que se suman directamente
    strength: 0,
    agility: 0,
    stamina: 0,
    energy: 0,
    command: 0,
  };

  // Si no hay 3rd tree skills, devolver bonus vacío
  if (!character['3rdTree'] || character['3rdTree'].length === 0) {
    return bonus;
  }

  // 🚀 AUTOMÁTICO: Procesar cada skill del 3rd tree
  character['3rdTree'].forEach(skill => {
    const valueType = skill.valueType;
    // Verificar si el valueType existe en nuestro objeto bonus
    if (bonus.hasOwnProperty(valueType)) {
      bonus[valueType] += skill.value;
    } else {
      // Si es un nuevo tipo, lo agregamos automáticamente
      bonus[valueType] = skill.value;
    }
  });

  return bonus;
};

// Función helper para obtener stats totales (base + manual + 3rd tree)
export const getTotalStats = (character) => {
  const bonus = calculate3rdTreeBonus(character);
  
  return {
    strength: character.stats.strength + bonus.strength,
    agility: character.stats.agility + bonus.agility,
    stamina: character.stats.stamina + bonus.stamina,
    energy: character.stats.energy + bonus.energy,
    command: (character.stats.command || 0) + bonus.command,
    level: character.level
  };
};

// Función para obtener el mínimo que se puede bajar cada stat
export const getMinimumStats = (character) => {
  const bonus = calculate3rdTreeBonus(character);
  
  return {
    strength: character.baseStats.strength + bonus.strength,
    agility: character.baseStats.agility + bonus.agility,
    stamina: character.baseStats.stamina + bonus.stamina,
    energy: character.baseStats.energy + bonus.energy,
    command: (character.baseStats.command || 0) + bonus.command
  };
};

