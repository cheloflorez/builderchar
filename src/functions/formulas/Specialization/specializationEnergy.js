export default function specializationEnergy(character, setSpecialization) {
  let specialization;
  if (character.stats.energy <= 1500) specialization = character.stats.energy / 15000;
  if (character.stats.energy > 1500 && character.stats.energy <= 2000) specialization = 0.1 + (character.stats.energy - 1500) / 2500;
  if (character.stats.energy > 2000 && character.stats.energy <= 3000) specialization = 0.3 + (character.stats.energy - 2000) / 6666;
  switch (character.class[0]) {
    case "Dark Wizard":
      setSpecialization({
        splWizMin: Math.floor((character.stats.energy / 9) * specialization),
        splWizMax: Math.floor((character.stats.energy / 4) * specialization),
      });

      break;

    default:
      break;
  }
}
