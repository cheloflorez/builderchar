export default function specializationEnergy(character, setSpecialization) {
  let specialization;
  if (character.energy <= 1500) specialization = character.energy / 15000;
  if (character.energy > 1500 && character.energy <= 2000) specialization = 0.1 + (character.energy - 1500) / 2500;
  if (character.energy > 2000 && character.energy <= 3000) specialization = 0.3 + (character.energy - 2000) / 6666;
  switch (character.class[0]) {
    case "Dark Wizard":
      setSpecialization({
        splWizMin: Math.floor((character.energy / 9) * specialization),
        splWizMax: Math.floor((character.energy / 4) * specialization),
      });

      break;

    default:
      break;
  }
}
