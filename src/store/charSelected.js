// store/charSelected.js
import { proxy } from 'valtio';
import { charactersStore } from './characters.js';
import { fruitsPoints } from '../utils/characterUtils.js';

// Store principal para el personaje seleccionado
export const charSelectedStore = proxy({
  selectedCharacter: null,

  // Añadir un personaje seleccionado
  addChar: (characterData) => {
    const mergeItems = (incomingItems) => {
      const defaultItems = {
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
      };

      if (!incomingItems) return defaultItems;

      return {
        set: {
          helm: incomingItems.set?.helm || null,
          armor: incomingItems.set?.armor || null,
          pants: incomingItems.set?.pants || null,
          gloves: incomingItems.set?.gloves || null,
          boots: incomingItems.set?.boots || null,
          weapon1: incomingItems.set?.weapon1 || null,
          weapon2: incomingItems.set?.weapon2 || null
        },
        earrings: {
          left: incomingItems.earrings?.left || null,
          right: incomingItems.earrings?.right || null
        },
        rings: {
          left: incomingItems.rings?.left || null,
          right: incomingItems.rings?.right || null
        },
        pet: incomingItems.pet || null,
        wings: incomingItems.wings || null,
        pendant: incomingItems.pendant || null,
        artifact: incomingItems.artifact || null,
        pentagram: incomingItems.pentagram || null
      };
    };
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
      items: mergeItems(characterData.items),
      baseStats,
      '3rdTree': Array.isArray(characterData['3rdTree']) ? [...characterData['3rdTree']] : []
    };
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

    char.level = level > 1700 ? 1700 : level;

    // ✅ AGREGAR ESTA LÍNEA: Resetear fruits cuando cambia el nivel
    char.fruits = 0;

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
    if (char.level >= 1200) {
      points = 2565 - totalAddedStats;
    }
    if (char.level <= 1 || char.level === "") {
      points = "-";
    }
    if (totalAddedStats > 0 && char.level <= 1) {
      points = -totalAddedStats;
    }

    char.points = points;
  },

  // Incrementar stats
  increaseStats: ({ stat, points }) => {
    if (!charSelectedStore.selectedCharacter) {
      return;
    }

    const char = charSelectedStore.selectedCharacter;

    if (char.points >= points) {
      // Verificar que stats existe
      if (!char.stats) {
        return;
      }
      char.stats[stat] += points;
      char.points -= points;
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
        char['3rdTree'][existingSkillIndex].level = level; // ← Esto debe estar
      }
    } else if (level > 0) {
      // Agregar nuevo skill con el valor calculado
      const newSkill = {
        id: skillId,
        valueType,
        value: calculatedValue,
        level: level // AGREGAR ESTA LÍNEA
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
  },
  // Incrementar fruits (agrega 1 fruit y 1 point)
  increaseFruits: (amount = 1) => {
    if (!charSelectedStore.selectedCharacter) return;

    const char = charSelectedStore.selectedCharacter;
    const maxFruits = fruitsPoints(char);

    if (char.fruits + amount <= maxFruits) {
      char.fruits += amount;
      char.points += amount;
    }
  },
  decreaseFruits: (amount = 1) => {
    if (!charSelectedStore.selectedCharacter) return;

    const char = charSelectedStore.selectedCharacter;
    const actualAmount = Math.min(amount, char.fruits);

    if (actualAmount > 0) {
      char.fruits -= actualAmount;
      char.points -= actualAmount;
    }
  },
});