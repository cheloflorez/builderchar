export default function formulasEne(character, setFormulasEnergy, setSpecialization, setAncient) {
  let wizDmg = 0,
    wizDmgRate = 1,
    curseDmg = 0,
    energyStatsBlue = 0;

  character.items.map((value) => {
    const { optionLifeCurse, optionLifeWiz } = value;
    if (value.optionLifeWiz) {
      wizDmg = wizDmg + parseInt(optionLifeWiz);
    }
    if (value.optionLifeCurse) {
      curseDmg = curseDmg + parseInt(optionLifeCurse);
    }
  });

  if (setAncient.length > 0) {
    setAncient.forEach((value) => {
      if (value.wizDmgRate > 0 && wizDmgRate !== 1) wizDmgRate = wizDmgRate * (value.wizDmgRate / 100 + 1);
      if (value.wizDmgRate > 0 && wizDmgRate === 1) wizDmgRate = wizDmgRate + value.wizDmgRate / 100;
      if (value.statsEnergy > 0) energyStatsBlue = energyStatsBlue + value.statsEnergy;
    });
  }

  const strength = character.strength,
    agility = character.agility,
    stamina = character.stamina,
    energy = character.energy,
    classChar = character.class[0];

  let specialization;
  if (energy + energyStatsBlue <= 1500) specialization = (energy + energyStatsBlue) / 15000;
  if (energy + energyStatsBlue > 1500 && energy + energyStatsBlue <= 2000)
    specialization = 0.1 + (energy + energyStatsBlue - 1500) / 2500;
  if (energy + energyStatsBlue > 2000 && energy + energyStatsBlue <= 3000)
    specialization = 0.3 + (energy + energyStatsBlue - 2000) / 6666;
  if (energy + energyStatsBlue > 3000) specialization = 0.45;

  switch (classChar) {
    case "Dark Wizard":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 9) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
      });
      break;
    case "Dark Knight":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor((energy + energyStatsBlue) / 10),
      });
      break;
    case "Magic Gladiator":
      if (energy + energyStatsBlue <= 1800) specialization = (energy + energyStatsBlue) / 18000;
      if (energy + energyStatsBlue > 1800 && energy + energyStatsBlue <= 2500)
        specialization = 0.1 + (energy + energyStatsBlue - 1800) / 3500;
      if (energy + energyStatsBlue > 2500 && energy + energyStatsBlue <= 3000)
        specialization = 0.3 + (energy + energyStatsBlue - 2000) / 3333;
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
        skillPwr: 200,
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 9) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
      });
      break;
    case "Dark Lord":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor((energy + energyStatsBlue) / 20),
      });
      break;
    case "Summoner":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
        curseMin:
          Math.floor((energy + energyStatsBlue) / 17 + Math.floor(((energy + energyStatsBlue) / 9) * specialization)) +
          curseDmg,
        curseMax:
          Math.floor((energy + energyStatsBlue) / 9 + Math.floor(((energy + energyStatsBlue) / 4) * specialization)) +
          curseDmg,
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 9) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
        splCurseMin: Math.floor(((energy + energyStatsBlue) / 9) * specialization),
        splCurseMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
      });
      break;
    case "Rage Fighter":
      setFormulasEnergy({
        energyStatsBlue,
        AOEAtkPwr: 100 + Math.floor((energy + energyStatsBlue) / 10) + Math.floor(agility / 8),
        divAtkPwr: 50 + Math.floor(stamina / 10),
      });
      break;
    case "Grow Lancer":
      setFormulasEnergy({
        energyStatsBlue,
        retAtkPwr: 97 + Math.floor(strength / 10),
        rageAtkPwr: 97 + Math.floor(agility / 10),
      });
      break;
    case "Rune Mage":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 9) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
      });
      break;
    case "Slayer":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 120 + Math.floor(strength / 8) + Math.floor(agility / 28),
      });
      break;
    case "Gun Crusher":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 8) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 8) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 4) * specialization),
      });
      break;
    case "White Wizard":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 5) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 3) * (specialization + 1)) + wizDmg) * wizDmgRate),
        magicPower: 200 + Math.floor((energy + energyStatsBlue) / 50),
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 5) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 3) * specialization),
      });
      break;
    case "Mage":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor(((energy + energyStatsBlue) / 5) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor(((energy + energyStatsBlue) / 3) * (specialization + 1)) + wizDmg) * wizDmgRate),
        magicPower: 140 + Math.floor((energy + energyStatsBlue) / 100),
      });
      setSpecialization({
        splWizMin: Math.floor(((energy + energyStatsBlue) / 5) * specialization),
        splWizMax: Math.floor(((energy + energyStatsBlue) / 3) * specialization),
      });
      break;
    case "Illusion Knight":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor(strength / 30) + Math.floor(agility / 30),
      });
      break;
  }
}
