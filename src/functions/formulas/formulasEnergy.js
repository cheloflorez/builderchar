import { getTotalStats, calculate3rdTreeBonus } from '../../utils/3rdTreeUtils.js';

export default function formulasEne(character, setFormulasEnergy, setSpecialization) {
  let wizDmg = 0,
    wizDmgRate = 1,
    curseDmg = 0;

  const bonus = calculate3rdTreeBonus(character);
  const totalStats = getTotalStats(character);

  // ✅ Usar blue stats directamente del character
  const energyStatsBlue = character.stats.energyBlue || 0;

  const strength = totalStats.strength
  const agility = totalStats.agility
  const stamina = totalStats.stamina
  const energy = totalStats.energy
  const classChar = character.class[0];

  // ✅ Buscar bonus de wizardry damage del 3rd tree
  if (character['3rdTree']) {
    character['3rdTree'].forEach(skill => {
      if (skill.valueType === 'WizDmg') {
        wizDmg += skill.value;
      }
      if (skill.valueType === 'WizDmgRate') {
        wizDmgRate += skill.value / 100; // Si es porcentaje
      }
      if (skill.valueType === 'CurseDmg') {
        curseDmg += skill.value;
      }
    });
  }

  let specialization;
  if (energy <= 1500) specialization = energy / 15000;
  if (energy > 1500 && energy <= 2000)
    specialization = 0.1 + (energy - 1500) / 2500;
  if (energy > 2000 && energy <= 3000)
    specialization = 0.3 + (energy - 2000) / 6666;
  if (energy > 3000) specialization = 0.45;

  switch (classChar) {
    case "Dark Wizard":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor((energy / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 9) * specialization),
        splWizMax: Math.floor((energy / 4) * specialization),
      });
      break;
    case "Dark Knight":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor(energy / 10),
      });
      break;
    case "Magic Gladiator":
      if (energy <= 1800) specialization = energy / 18000;
      if (energy > 1800 && energy <= 2500)
        specialization = 0.1 + (energy - 1800) / 3500;
      if (energy > 2500 && energy <= 3000)
        specialization = 0.3 + (energy - 2000) / 3333;
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor((energy / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
        skillPwr: 200,
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 9) * specialization),
        splWizMax: Math.floor((energy / 4) * specialization),
      });
      break;
    case "Dark Lord":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor(energy / 20),
      });
      break;
    case "Summoner":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor((energy / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
        curseMin:
          Math.floor(energy / 17 + Math.floor((energy / 9) * specialization)) +
          curseDmg,
        curseMax:
          Math.floor(energy / 9 + Math.floor((energy / 4) * specialization)) +
          curseDmg,
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 9) * specialization),
        splWizMax: Math.floor((energy / 4) * specialization),
        splCurseMin: Math.floor((energy / 9) * specialization),
        splCurseMax: Math.floor((energy / 4) * specialization),
      });
      break;
    case "Rage Fighter":
      setFormulasEnergy({
        energyStatsBlue,
        AOEAtkPwr: 100 + Math.floor(energy / 10) + Math.floor(agility / 8),
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
        wizMin: Math.floor((Math.floor((energy / 9) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 9) * specialization),
        splWizMax: Math.floor((energy / 4) * specialization),
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
        wizMin: Math.floor((Math.floor((energy / 8) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 8) * specialization),
        splWizMax: Math.floor((energy / 4) * specialization),
      });
      break;
    case "White Wizard":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor((energy / 5) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 3) * (specialization + 1)) + wizDmg) * wizDmgRate),
        magicPower: 200 + Math.floor(energy / 50),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 5) * specialization),
        splWizMax: Math.floor((energy / 3) * specialization),
      });
      break;
    case "Mage":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor((Math.floor((energy / 5) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor((Math.floor((energy / 3) * (specialization + 1)) + wizDmg) * wizDmgRate),
        magicPower: 140 + Math.floor(energy / 100),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 5) * specialization),
        splWizMax: Math.floor((energy / 3) * specialization),
      });
      break;
    case "Illusion Knight":
      setFormulasEnergy({
        energyStatsBlue,
        skillPwr: 200 + Math.floor(strength / 30) + Math.floor(agility / 30),
      });
      break;
    case "Alchemist":
      setFormulasEnergy({
        energyStatsBlue,
        wizMin: Math.floor(30 + (Math.floor((energy / 4) * (specialization + 1)) + wizDmg) * wizDmgRate),
        wizMax: Math.floor(45 + (Math.floor((energy / 3) * (specialization + 1)) + wizDmg) * wizDmgRate),
        magicPower: Math.floor(165 + energy / 65),
      });
      setSpecialization({
        splWizMin: Math.floor((energy / 5) * specialization),
        splWizMax: Math.floor((energy / 3) * specialization),
      });
  }
}