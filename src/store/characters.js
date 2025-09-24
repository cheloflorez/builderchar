// store/characters.js
import { proxy } from 'valtio';

// Definir los personajes base con sus stats iniciales
const charactersData = {
  darkWizard: {
    class: ["Dark Wizard", "Soul Master", "Grand Master", "Soul Wizard"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 18,
      agility: 18,
      stamina: 15,
      energy: 30
    },
    baseStats: {
      strength: 18,
      agility: 18,
      stamina: 15,
      energy: 30
    },
    maxSpeed: 284
  },
  darkKnight: {
    class: ["Dark Knight", "Blade Knight", "Blade Master", "Dragon Knight"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 28,
      agility: 20,
      stamina: 25,
      energy: 10
    },
    baseStats: {
      strength: 28,
      agility: 20,
      stamina: 25,
      energy: 10
    },
    maxSpeed: 288
  },
  elf: {
    class: ["Fairy Elf", "Muse Elf", "High Elf", "Noble Elf"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 22,
      agility: 25,
      stamina: 20,
      energy: 15
    },
    baseStats: {
      strength: 22,
      agility: 25,
      stamina: 20,
      energy: 15
    },
    maxSpeed: 275
  },
  magicGladiator: {
    class: ["Magic Gladiator", "Duel Master", "Magic Knight"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 26,
      agility: 26,
      stamina: 26,
      energy: 26
    },
    baseStats: {
      strength: 26,
      agility: 26,
      stamina: 26,
      energy: 26
    },
    maxSpeed: 351
  },
  darkLord: {
    class: ["Dark Lord", "Lord Emperor", "Empire Lord"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 26,
      agility: 20,
      stamina: 20,
      energy: 15,
      command: 25
    },
    baseStats: {
      strength: 26,
      agility: 20,
      stamina: 20,
      energy: 15,
      command: 25
    },
    maxSpeed: 450
  },
  summoner: {
    class: ["Summoner", "Bloody Summoner", "Dimension Master", "Dimension Summoner"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 21,
      agility: 21,
      stamina: 18,
      energy: 23
    },
    baseStats: {
      strength: 21,
      agility: 21,
      stamina: 18,
      energy: 23
    },
    maxSpeed: 188
  },
  rageFighter: {
    class: ["Rage Fighter", "Fist Master", "Fist Blazer"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 32,
      agility: 27,
      stamina: 25,
      energy: 20
    },
    baseStats: {
      strength: 32,
      agility: 27,
      stamina: 25,
      energy: 20
    },
    maxSpeed: 441
  },
  growLancer: {
    class: ["Grow Lancer", "Mirage Lancer", "Shining Lancer"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 30,
      agility: 30,
      stamina: 25,
      energy: 24
    },
    baseStats: {
      strength: 30,
      agility: 30,
      stamina: 25,
      energy: 24
    },
    maxSpeed: 273
  },
  runeWizard: {
    class: ["Rune Mage", "Rune Spell Master", "Rune Grand Master", "Rune Wizard"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 13,
      agility: 18,
      stamina: 14,
      energy: 40
    },
    baseStats: {
      strength: 13,
      agility: 18,
      stamina: 14,
      energy: 40
    },
    maxSpeed: 274
  },
  slayer: {
    class: ["Slayer", "Royal Slayer", "Master Slayer", "Slaughterer"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 28,
      agility: 30,
      stamina: 15,
      energy: 10
    },
    baseStats: {
      strength: 28,
      agility: 30,
      stamina: 15,
      energy: 10
    },
    maxSpeed: 384
  },
  gunCrusher: {
    class: ["Gun Crusher", "Gun Breaker", "Master Gun Breaker", "Heist Gun Crusher"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 20,
      agility: 18,
      stamina: 20,
      energy: 25
    },
    baseStats: {
      strength: 20,
      agility: 18,
      stamina: 20,
      energy: 25
    },
    maxSpeed: 280
  },
  whiteWizard: {
    class: ["White Wizard", "Light Master", "Shine Wizard", "Shine Master"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 19,
      agility: 19,
      stamina: 15,
      energy: 30
    },
    baseStats: {
      strength: 19,
      agility: 19,
      stamina: 15,
      energy: 30
    },
    maxSpeed: 304
  },
  mage: {
    class: ["Mage", "Wo Mage", "Arch Mage", "Mystic Mage"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 18,
      agility: 18,
      stamina: 19,
      energy: 30
    },
    baseStats: {
      strength: 18,
      agility: 18,
      stamina: 19,
      energy: 30
    },
    maxSpeed: 290
  },
  illusionKnight: {
    class: ["Illusion Knight", "Mirage Knight", "Ilussion Master", "Mystic Knight"],
    level: 1,
    points: 0,
    fruits: 0,
    stats: {
      strength: 25,
      agility: 28,
      stamina: 15,
      energy: 15
    },
    baseStats: {
      strength: 25,
      agility: 28,
      stamina: 15,
      energy: 15
    },
    maxSpeed: 350
  }
};

// Crear el proxy state para los personajes
export const charactersStore = proxy({
  characters: charactersData,
  
  // Obtener personaje por key
  getCharacter: (charKey) => {
    return charactersStore.characters[charKey];
  }
});