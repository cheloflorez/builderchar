// utils/characterUtils.js

// Mapear char URLs a keys del store
export const selectChar = (char) => {
  switch (char) {
    case "dark-wizard":
      return { charName: "darkWizard" };
    case "dark-knight":
      return { charName: "darkKnight" };
    case "elf":
      return { charName: "elf" };
    case "magic-gladiator":
      return { charName: "magicGladiator" };
    case "dark-lord":
      return { charName: "darkLord" };
    case "summoner":
      return { charName: "summoner" };
    case "rage-fighter":
      return { charName: "rageFighter" };
    case "grow-lancer":
      return { charName: "growLancer" };
    case "rune-wizard":
      return { charName: "runeWizard" };
    case "slayer":
      return { charName: "slayer" };
    case "gun-crusher":
      return { charName: "gunCrusher" };
    case "white-wizard":
      return { charName: "whiteWizard" };
    case "mage":
      return { charName: "mage" };
    case "illusion-knight":
      return { charName: "illusionKnight" };
    default:
      return { charName: null };
  }
};

// Obtener clase del personaje según nivel
export const classChar = (character) => {
  if (!character) return "";
  
  const level = character.level;
  let classChar;

  if (character.class.length === 4) {
    if (level < 150) classChar = character.class[0];
    if (level >= 150 && level < 400) classChar = character.class[1];
    if (level >= 400 && level < 800) classChar = character.class[2];
    if (level >= 800) classChar = character.class[3];
  }
  if (character.class.length === 3) {
    if (level < 400) classChar = character.class[0];
    if (level >= 400 && level < 800) classChar = character.class[1];
    if (level >= 800) classChar = character.class[2];
  }
  return classChar;
};

// Calcular puntos de frutas
export const fruitsPoints = (character) => {
  if (!character) return 0;
  
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

  const level = character.level;
  let points;

  if (level < 400) points = fruitsOne[Math.floor(level / 10 - 1)];
  if (level >= 400) points = fruitsOne[39];

  if (character.class[0] === "Magic Gladiator") {
    if (level < 400) points = fruitsThree[Math.floor(level / 10 - 1)];
    if (level >= 400) points = fruitsThree[39];
  }
  if (character.class[0] === "Dark Lord" || character.class[0] === "Grow Lancer") {
    if (level < 400) points = fruitsTwo[Math.floor(level / 10 - 1)];
    if (level >= 400) points = fruitsTwo[39];
  }

  if (level < 10) points = 0;
  return points || 0;
};