// store/charSelected.js
import { proxy } from 'valtio';
import { charactersStore } from './characters.js';

// Store principal para el personaje seleccionado
export const charSelectedStore = proxy({
  selectedCharacter: null,

  // Añadir un personaje seleccionado
  addChar: (characterData) => {
    // Crear baseStats con las stats iniciales del personaje
    const baseStats = {
      strength: characterData.stats?.strength || characterData.strength || 18,
      agility: characterData.stats?.agility || characterData.agility || 18,
      stamina: characterData.stats?.stamina || characterData.stamina || 15,
      energy: characterData.stats?.energy || characterData.energy || 30,
    };

    // Agregar command solo si es Dark Lord
    if (characterData.class[0] === "Dark Lord") {
      baseStats.command = characterData.stats?.command || characterData.command || 25;
    }

    // Asegurar que el character tenga la estructura stats correcta
    const characterStats = {
      strength: characterData.stats?.strength || characterData.strength || 18,
      agility: characterData.stats?.agility || characterData.agility || 18,
      stamina: characterData.stats?.stamina || characterData.stamina || 15,
      energy: characterData.stats?.energy || characterData.energy || 30,
      // ✅ NUEVO: Blue stats para 3rd y 4th tree
      strengthBlue: 0,
      agilityBlue: 0,
      staminaBlue: 0,
      energyBlue: 0
    };

    if (characterData.class[0] === "Dark Lord") {
      characterStats.command = characterData.stats?.command || characterData.command || 25;
      characterStats.commandBlue = 0;
    }

    // IMPORTANTE: Crear el objeto completo de una vez
    charSelectedStore.selectedCharacter = {
      ...characterData,
      stats: characterStats, // ← OBJETO NUEVO, no referencia
      items: {
        set: {
          helm: null,
          armor: null,
          pants: null,
          gloves: null,
          boots: null,
          weapon1: null,
          weapon2: null
        },
        earrings: {
          left: null,
          right: null
        },
        rings: {
          left: null,
          right: null
        },
        pet: null,
        wings: null,
        pendant: null,
        artifact: null,
        pentagram: null
      },
      baseStats,
      '3rdTree': []
    };

    console.log('🎯 CHARACTER ADDED - stats:', charSelectedStore.selectedCharacter.stats);
  },

  // Equipar item
  addItem: (newItem) => {
    if (!charSelectedStore.selectedCharacter || !newItem) return;

    const itemType = newItem.type;

    // Mapear el tipo de item a su ubicación en la estructura
    if (['helm', 'armor', 'pants', 'gloves', 'boots', 'weapon1', 'weapon2'].includes(itemType)) {
      // Items del set
      charSelectedStore.selectedCharacter.items.set[itemType] = newItem;
    } else if (itemType === 'earringL') {
      charSelectedStore.selectedCharacter.items.earrings.left = newItem;
    } else if (itemType === 'earringR') {
      charSelectedStore.selectedCharacter.items.earrings.right = newItem;
    } else if (itemType === 'ringL') {
      charSelectedStore.selectedCharacter.items.rings.left = newItem;
    } else if (itemType === 'ringR') {
      charSelectedStore.selectedCharacter.items.rings.right = newItem;
    } else if (['pet', 'wings', 'pendant', 'artifact', 'pentagram'].includes(itemType)) {
      // Items únicos
      charSelectedStore.selectedCharacter.items[itemType] = newItem;
    }

    // Si es un item vacío (para desequipar), establecer como null
    if (newItem.empty || newItem.remove) {
      if (['helm', 'armor', 'pants', 'gloves', 'boots', 'weapon1', 'weapon2'].includes(itemType)) {
        charSelectedStore.selectedCharacter.items.set[itemType] = null;
      } else if (itemType === 'earringL') {
        charSelectedStore.selectedCharacter.items.earrings.left = null;
      } else if (itemType === 'earringR') {
        charSelectedStore.selectedCharacter.items.earrings.right = null;
      } else if (itemType === 'ringL') {
        charSelectedStore.selectedCharacter.items.rings.left = null;
      } else if (itemType === 'ringR') {
        charSelectedStore.selectedCharacter.items.rings.right = null;
      } else if (['pet', 'wings', 'pendant', 'artifact', 'pentagram'].includes(itemType)) {
        charSelectedStore.selectedCharacter.items[itemType] = null;
      }
    }
  },

  // Cambiar nivel
  selectLevel: (level) => {
    if (!charSelectedStore.selectedCharacter) return;

    const char = charSelectedStore.selectedCharacter;
    const baseStats = char.baseStats;

    // Calcular stats añadidas (sin incluir blue stats)
    const totalAddedStats =
      (char.stats.strength - baseStats.strength) +
      (char.stats.agility - baseStats.agility) +
      (char.stats.stamina - baseStats.stamina) +
      (char.stats.energy - baseStats.energy) +
      (char.stats.command ? (char.stats.command - (baseStats.command || 0)) : 0);

    char.level = level > 1500 ? 1500 : level;

    // Calcular puntos según nivel
    let points = 0;
    if (char.level < 150 && char.level > 1) {
      points = (char.level - 1) * 5 - totalAddedStats;
    } else if (char.level >= 150) {
      points = (char.level - 1) * 5 + 20 - totalAddedStats;
    }
    if (char.level > 220 && char.level <= 400) {
      points = 1115 + (char.level - 220) * 6 - totalAddedStats;
    }
    if (char.level >= 400) {
      points = 2265 - totalAddedStats;
    }
    if (char.level >= 800) {
      points = 2365 - totalAddedStats;
    }
    if (char.level <= 1 || char.level === "") {
      points = "-";
    }
    if (totalAddedStats > 0 && char.level <= 1) {
      points = -totalAddedStats;
    }

    char.points = points;

    const fruitsOne = [
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 69, 73, 77, 81, 85,
      89, 93, 97, 101, 105, 109, 113, 117, 122, 127,
    ];
    const fruitsTwo = [
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77,
      80, 83, 87, 91, 95, 99, 103, 107, 111, 115,
    ];
    const fruitsThree = [
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 49, 52, 55, 58, 61, 64, 67, 70,
      73, 76, 79, 82, 85, 88, 91, 94, 97, 100,
    ];
    let fruits;

    if (level < 400) fruits = fruitsOne[Math.floor(level / 10 - 1)];
    if (level >= 400) fruits = fruitsOne[39];

    if (character.class[0] === "Magic Gladiator") {
      if (level < 400) fruits = fruitsThree[Math.floor(level / 10 - 1)];
      if (level >= 400) fruits = fruitsThree[39];
    }
    if (character.class[0] === "Dark Lord" || character.class[0] === "Grow Lancer") {
      if (level < 400) fruits = fruitsTwo[Math.floor(level / 10 - 1)];
      if (level >= 400) fruits = fruitsTwo[39];
    }

    if (level < 10) fruits = 0;

    char.fruits = fruits;
  },

  // Incrementar stats
  increaseStats: ({ stat, points }) => {
    if (!charSelectedStore.selectedCharacter) {
      console.log('❌ No selectedCharacter');
      return;
    }

    const char = charSelectedStore.selectedCharacter;

    if (char.points >= points) {
      // Verificar que stats existe
      if (!char.stats) {
        console.log('❌ No stats object');
        return;
      }

      char.stats[stat] += points;
      char.points -= points;

      // Debug logs
      console.log(`✅ INCREASED ${stat} by ${points}`);
      console.log(`New ${stat}:`, char.stats[stat]);
      console.log(`Remaining points:`, char.points);
      console.log('Full stats object:', char.stats);
    } else {
      console.log(`❌ Not enough points. Have: ${char.points}, Need: ${points}`);
    }
  },

  // Decrementar stats
  decreaseStats: ({ stat, points, baseStats }) => {
    if (!charSelectedStore.selectedCharacter) return;

    const char = charSelectedStore.selectedCharacter;
    const baseValue = char.baseStats[stat];
    const currentValue = char.stats[stat];

    // No bajar por debajo del valor base
    const maxDecrease = Math.min(points, currentValue - baseValue);

    if (maxDecrease > 0) {
      char.stats[stat] -= maxDecrease;
      char.points += maxDecrease;

      // Debug logs
      console.log(`✅ DECREASED ${stat} by ${maxDecrease}`);
      console.log(`New ${stat}:`, char.stats[stat]);
      console.log(`Remaining points:`, char.points);
    } else {
      console.log(`❌ Cannot decrease ${stat}. At base value: ${baseValue}`);
    }
  },

  // ✅ NUEVO: Actualizar skill del 3rd tree y blue stats
  update3rdTreeSkill: ({ skillId, level, valueType, values }) => {
    if (!charSelectedStore.selectedCharacter) return;

    const char = charSelectedStore.selectedCharacter;

    // Inicializar 3rdTree si no existe
    if (!char['3rdTree']) {
      char['3rdTree'] = [];
    }

    // Calcular el valor según el nivel
    const calculatedValue = values && values[level] ? values[level] : 0;

    // Buscar si el skill ya existe
    const existingSkillIndex = char['3rdTree'].findIndex(skill => skill.id === skillId);

    if (existingSkillIndex !== -1) {
      // Actualizar skill existente
      if (level === 0) {
        // Remover skill si el nivel es 0
        char['3rdTree'].splice(existingSkillIndex, 1);
      } else {
        // Actualizar el valor con el valor calculado
        char['3rdTree'][existingSkillIndex].value = calculatedValue;
      }
    } else if (level > 0) {
      // Agregar nuevo skill con el valor calculado
      const newSkill = {
        id: skillId,
        valueType,
        value: calculatedValue
      };
      char['3rdTree'].push(newSkill);
    }
  },
  // Nuevo método para actualizar stats bar
  updateStatsBar: (statsBarData) => {
    if (!charSelectedStore.selectedCharacter) return;

    charSelectedStore.selectedCharacter.statsBar = {
      hp: statsBarData.hp,
      sd: statsBarData.sd,
      mana: statsBarData.mana,
      ag: statsBarData.ag
    };
  }
});