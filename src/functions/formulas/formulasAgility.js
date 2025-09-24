import { getTotalStats, calculate3rdTreeBonus } from '../../utils/3rdTreeUtils.js';

export default function formulasAgi(character, setFormulasAgility, setSpecialization) {
  let defense = 0,
    defenseRate = 1;

  const bonus = calculate3rdTreeBonus(character);
  const totalStats = getTotalStats(character);


  // ✅ Usar stats totales incluyendo blue stats
  const strength = totalStats.strength;
  const agility = totalStats.agility;
  const level = character.level;
  const classChar = character.class[0];

  // 🔥 AQUÍ TIENES EL DefenseRatePVP del 3rd tree
  const defenseRatePVPBonus = bonus.DefenseRatePVP || 0;

  let specialization;
  if (agility <= 1500) specialization = agility / 15000;
  if (agility > 1500 && agility <= 2000) specialization = 0.1 + (agility - 1500) / 2500;
  if (agility > 2000 && agility <= 3000) specialization = 0.3 + (agility - 2000) / 6666;
  if (agility > 3000) specialization = 0.45;

  switch (classChar) {
    case "Dark Wizard":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(Math.floor(agility / 3) * defenseRate),
        defenseRatePVP: Math.floor(level * 2 + agility / 4) + defenseRatePVPBonus,
      });
      break;
    case "Dark Knight":
      setFormulasAgility({
        defense: Math.floor((agility / 3) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 15),
        defenseRate: Math.floor(agility / 3),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      setSpecialization({
        splDef: Math.floor((agility / 3) * specialization),
      });
      break;
    case "Fairy Elf":
      setFormulasAgility({
        defense: Math.floor(agility / 10) + defense,
        speed: Math.floor(agility / 50),
        defenseRate: Math.floor((agility / 4) * (specialization + 1)),
        defenseRatePVP: Math.floor((level * 2 + agility / 10) * (specialization + 1)),
      });
      break;
    case "Magic Gladiator":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      break;
    case "Dark Lord":
      setFormulasAgility({
        defense: Math.floor((agility / 7) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 7),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      setSpecialization({ splDef: Math.floor((agility / 7) * specialization) });
      break;
    case "Summoner":
      setFormulasAgility({
        defense: Math.floor(agility / 3) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      break;
    case "Rage Fighter":
      setFormulasAgility({
        defense: Math.floor(agility / 8) + defense,
        speed: Math.floor(agility / 8),
        defenseRate: Math.floor(agility / 10),
        defenseRatePVP: Math.floor(level * 3 + agility / 10),
      });
      break;
    case "Grow Lancer":
      setFormulasAgility({
        defense: Math.floor((agility / 7) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4),
        defenseRatePVP: Math.floor(level * 2 + agility / 5),
      });
      setSpecialization({
        splDef: Math.floor((agility / 7) * specialization),
      });
      break;
    case "Rune Mage":
      setFormulasAgility({
        defense: Math.floor(agility / 5) + defense,
        speed: Math.floor(agility / 12),
        defenseRate: Math.floor(agility / 3),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecialization({
        /* splAtkRate */
        splDefRate: Math.floor((level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * specialization),
        splPVPAtkRate: Math.floor((level * 3 + Math.floor(agility * 4)) * specialization),
      });
      break;
    case "Slayer":
      let specializationDef;
      if (agility <= 1800) specializationDef = agility / 18000;
      if (agility > 1800 && agility <= 2500) specializationDef = 0.1 + (agility - 1800) / 3500;
      if (agility > 2500 && agility <= 3000) specializationDef = 0.3 + (agility - 2000) / 3333;
      setFormulasAgility({
        defense: Math.floor(agility / 10) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor((agility / 3) * (specializationDef + 1)),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecialization({
        splAtkMin: Math.floor((Math.floor(strength / 9) + Math.floor(agility / 20)) * specialization),
        splAtkMax: Math.floor((Math.floor(strength / 5) + Math.floor(agility / 14)) * specialization),
        splDefRate: Math.floor((agility / 3) * specializationDef),
      });
      break;
    case "Gun Crusher":
      setFormulasAgility({
        defense: Math.floor(agility / 3) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecialization({
        /* splAtkRate */
        splDefRate: Math.floor((level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * specialization),
        splPVPAtkRate: Math.floor((level * 3 + agility * 4) * specialization),
      });
      break;
    case "White Wizard":
      setFormulasAgility({
        defense: Math.floor(agility / 3) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      setSpecialization({
        /* splAtkRate */
        splDefRate: Math.floor((level * 5 + Math.floor(agility * 1.5 + strength / 4)) * specialization),
        splPVPAtkRate: Math.floor((level * 3 + agility * 4) * specialization),
      });
      break;
    case "Mage":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor((agility / 3) * (specialization + 1)),
        defenseRatePVP: Math.floor((level * 2 + agility / 4) * (specialization + 1)),
      });
      setSpecialization({
        splDefRate: Math.floor((agility / 3) * specialization),
        splPVPDefRate: Math.floor((level * 2 + agility / 4) * specialization),
      });
      break;
    case "Illusion Knight":
      setFormulasAgility({
        defense: Math.floor(agility / 7) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      setSpecialization({
        splAtkMin: 0,
        splAtkMax: 0,
        splDef: 0,
      });
      break;
  }
}