// database/itemsDatabase.js

export const ITEMS_DATABASE = {
  // ========================================
  // 🪖 HELMS
  // ========================================
  bloodangel_helm: {
    id: "bloodangel_helm",
    name: "Blood Angel Helm",
    type: "helm",
    category: "set",
    level: 1,
    class: ["Dark Wizard"],
    durability: 20,
    url: "/items/sets/Bloodangel/BloodangelWizardHelm.png",
    baseStats: { defense: 8 },
    upgradeValues: {
      defense: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5'],
    maxExcellentOptions: 2,
    canHaveLuck: true,
    hasMastery: true,
    masteryName: "BloodAngel",
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  // ========================================
  // 🛡️ ARMORS
  // ========================================
  bloodangel_armor: {
    id: "bloodangel_armor",
    name: "Bloodangel Armor",
    type: "armor",
    category: "set",
    level: 1,
    class: ["Dark Wizard"],
    durability: 25,
    url: "/items/sets/Bloodangel/BloodangelWizardArmor.png",
    baseStats: { defense: 12 },
    upgradeValues: {
      defense: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5', 'exc_def_success_15'],
    maxExcellentOptions: 2,
    hasMastery: true,
    masteryName: "BloodAngel",
    canHaveLuck: true,
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  // ========================================
  // 👖 PANTS
  // ========================================
  bloodangel_pants: {
    id: "bloodangel_pants",
    name: "Bloodangel Pants",
    type: "pants",
    category: "set",
    level: 1,
    class: ["Dark Wizard"],
    durability: 20,
    url: "/items/sets/Bloodangel/BloodangelWizardPants.png",
    baseStats: { defense: 10 },
    upgradeValues: {
      defense: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5'],
    maxExcellentOptions: 2,
    hasMastery: true,
    masteryName: "BloodAngel",
    canHaveLuck: true,
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  // ========================================
  // 🧤 GLOVES
  // ========================================
  bloodangel_gloves: {
    id: "bloodangel_gloves",
    name: "Bloodangel Gloves",
    type: "gloves",
    category: "set",
    level: 1,
    class: ["Dark Wizard"],
    durability: 15,
    url: "/items/sets/Bloodangel/BloodangelWizardGloves.png",
    baseStats: { defense: 6 },
    upgradeValues: {
      defense: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5'],
    maxExcellentOptions: 2,
    canHaveLuck: true,
    hasMastery: true,
    masteryName: "BloodAngel",
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  // ========================================
  // 👢 BOOTS
  // ========================================
  bronze_boots: {
    id: "bronze_boots",
    name: "Bronze Boots",
    type: "boots",
    category: "set",
    level: 1,
    class: ["Dark Knight", "Dark Lord"],
    durability: 18,
    url: "/items/bronze_boots.png",
    baseStats: { defense: 7 },
    upgradeValues: {
      defense: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5'],
    maxExcellentOptions: 2,
    ancientSets: ["barnake"],
    canHaveLuck: true,
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  leather_boots: {
    id: "leather_boots",
    name: "Leather Boots",
    type: "boots",
    category: "set",
    level: 1,
    class: ["Dark Wizard", "Summoner", "Fairy Elf"],
    durability: 15,
    url: "/items/leather_boots.png",
    baseStats: { defense: 5 },
    upgradeValues: {
      defense: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30', 'exc_dmg_dec_4', 'exc_life_5'],
    maxExcellentOptions: 2,
    ancientSets: ["barnake"],
    canHaveLuck: true,
    canHaveJewelOfLife: true,
    maxUpgrade: 15
  },

  // ========================================
  // ⚔️ WEAPONS
  // ========================================
  kris: {
    id: "kris",
    name: "Kris",
    type: "weapon",
    category: "weapon",
    level: 1,
    class: ["Dark Knight", "Dark Lord", "Magic Gladiator"],
    durability: 25,
    url: "/items/kris.png",
    baseStats: {
      attackMin: 1,
      attackMax: 4
    },
    upgradeValues: {
      attackMin: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      attackMax: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30'],
    maxExcellentOptions: 2,
    ancientSets: ["barnake"],
    canHaveLuck: true,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  short_sword: {
    id: "short_sword",
    name: "Short Sword",
    type: "weapon",
    category: "weapon",
    level: 1,
    class: ["Dark Knight", "Dark Lord", "Magic Gladiator"],
    durability: 30,
    url: "/items/short_sword.png",
    baseStats: {
      attackMin: 2,
      attackMax: 6
    },
    upgradeValues: {
      attackMin: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      attackMax: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30'],
    maxExcellentOptions: 2,
    ancientSets: ["barnake"],
    canHaveLuck: true,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  skull_staff: {
    id: "skull_staff",
    name: "Skull Staff",
    type: "weapon",
    category: "weapon",
    level: 1,
    class: ["Dark Wizard", "Summoner"],
    durability: 20,
    url: "/items/skull_staff.png",
    baseStats: {
      attackMin: 1,
      attackMax: 3
    },
    upgradeValues: {
      attackMin: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      attackMax: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    excellentOptions: ['exc_mana_5', 'exc_zen_30'],
    maxExcellentOptions: 2,
    ancientSets: ["barnake"],
    canHaveLuck: true,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  // ========================================
  // 💍 RINGS
  // ========================================
  ring_of_ice: {
    id: "ring_of_ice",
    name: "Ring of Ice",
    type: "ring",
    category: "jewelry",
    level: 15,
    class: ["Dark Wizard", "Summoner"],
    durability: 15,
    url: "/items/ring_ice.png",
    baseStats: { defense: 3 },
    upgradeValues: {
      defense: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    excellentOptions: [],
    maxExcellentOptions: 0,
    ancientSets: [],
    canHaveLuck: false,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  ring_of_poison: {
    id: "ring_of_poison",
    name: "Ring of Poison",
    type: "ring",
    category: "jewelry",
    level: 15,
    class: ["Dark Wizard", "Summoner"],
    durability: 15,
    url: "/items/ring_poison.png",
    baseStats: { defense: 3 },
    upgradeValues: {
      defense: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    excellentOptions: [],
    maxExcellentOptions: 0,
    ancientSets: [],
    canHaveLuck: false,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  // ========================================
  // 👂 EARRINGS
  // ========================================
  earring_of_wind: {
    id: "earring_of_wind",
    name: "Earring of Wind",
    type: "earring",
    category: "jewelry",
    level: 15,
    class: ["Fairy Elf"],
    durability: 12,
    url: "/items/earring_wind.png",
    baseStats: { defense: 2 },
    upgradeValues: {
      defense: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    },
    excellentOptions: [],
    maxExcellentOptions: 0,
    ancientSets: [],
    canHaveLuck: false,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  // ========================================
  // 🪶 WINGS
  // ========================================
  wings_of_elf: {
    id: "wings_of_elf",
    name: "Wings of Elf",
    type: "wings",
    category: "wings",
    level: 180,
    class: ["Fairy Elf"],
    durability: 200,
    url: "/items/wings_elf.png",
    baseStats: { defense: 40 },
    upgradeValues: {
      defense: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70]
    },
    excellentOptions: ['exc_life_5'],
    maxExcellentOptions: 1,
    ancientSets: [],
    canHaveLuck: false,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  },

  wings_of_soul: {
    id: "wings_of_soul",
    name: "Wings of Soul",
    type: "wings",
    category: "wings",
    level: 180,
    class: ["Dark Wizard", "Summoner"],
    durability: 200,
    url: "/items/wings_soul.png",
    baseStats: { defense: 40 },
    upgradeValues: {
      defense: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70]
    },
    excellentOptions: ['exc_life_5'],
    maxExcellentOptions: 1,
    ancientSets: [],
    canHaveLuck: false,
    canHaveJewelOfLife: false,
    maxUpgrade: 15
  }
};

// Helper function to get item template
export const getItemTemplate = (itemId) => {
  return ITEMS_DATABASE[itemId];
};