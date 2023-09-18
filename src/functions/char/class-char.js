export default function classChar(character) {
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
}
