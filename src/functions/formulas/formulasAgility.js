import { getTotalStats, calculate3rdTreeBonus } from '../../utils/3rdTreeUtils.js';
import { calculateTotalLifeBonuses, getLifeBonus } from '../../helpers/itemHelpers.js';



export default function formulasAgi(character, setFormulasAgility , setSpecializationAgi) {
  let defense = 0,
    defenseRate = 1;

  const bonus = calculate3rdTreeBonus(character);
  const totalStats = getTotalStats(character);

  const totalDefenseBonus = getLifeBonus(character, 'defense'); // 20

  // ✅ Usar stats totales incluyendo blue stats
  const strength = totalStats.strength;
  const agility = totalStats.agility;
  const level = character.level;
  const classChar = character.class[0];

  // 🔥 AQUÍ TIENES EL DefenseRatePVP del 3rd tree
  const defenseRatePVPBonus = bonus.DefenseratePVP || 0;
  const defenseSussRate = (bonus.DefenseSuccessRateIncrease / 100) || 0;

  let specialization;
  if (agility <= 1800) specialization = agility / 18000;
  if (agility > 1800 && agility <= 2500) specialization = 0.1 + (agility - 1800) / 3500;
  if (agility > 2500 && agility <= 3000) specialization = 0.3 + (agility - 2000) / 3333;


  let specialization2;
  if (agility <= 1500) specialization2 = agility / 15000;
  if (agility > 1500 && agility <= 2000) specialization2 = 0.1 + (agility - 1500) / 2500;
  if (agility > 2000 && agility <= 3000) specialization2 = 0.3 + (agility - 2000) / 6666;
  if (agility > 3000) specialization2 = 0.45;


  switch (classChar) {
    case "Dark Wizard":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense + totalDefenseBonus,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(Math.floor(agility / 3) * defenseRate + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 4) + defenseRatePVPBonus,
      });
      setSpecializationAgi({
        splAtkRate: Math.floor((level * 5 + agility * 1.5 + strength / 4) * specialization2),
        splPVPAtkRate: Math.floor((level * 3 + agility * 4) * specialization2),
      });
      break;
    case "Dark Knight":
      setFormulasAgility({
        defense: Math.floor((agility / 3) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 15),
        defenseRate: Math.floor(agility / 3 + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      setSpecializationAgi({
        splDef: Math.floor((agility / 3) * specialization),
      });
      break;
    case "Fairy Elf":
      setFormulasAgility({
        defense: Math.floor(agility / 10) + defense,
        speed: Math.floor(agility / 50),
        defenseRate: Math.floor((agility / 4) * (specialization + 1) + ((agility / 4) * (specialization + 1) * defenseSussRate)),
        defenseRatePVP: Math.floor((level * 2 + agility / 10) * (specialization + 1)),
      });
      setSpecializationAgi({
        splAtkMin: Math.floor((strength / 14 + Math.floor(agility / 7)) * specialization),
        splAtkMax: Math.floor((strength / 8 + Math.floor(agility / 4)) * specialization),
        splDefRate: Math.floor(agility / 4 * specialization),
        splPVPDefRate: Math.floor((level * 2 + agility / 10) * specialization),
      });
      break;
    case "Magic Gladiator":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3 + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      break;
    case "Dark Lord":
      setFormulasAgility({
        defense: Math.floor((agility / 7) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 7 + ((agility / 7) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      setSpecializationAgi({ splDef: Math.floor((agility / 7) * specialization) });
      break;
    case "Summoner":
      setFormulasAgility({
        defense: Math.floor(agility / 3) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4 + ((agility / 4) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 2),
      });
      break;
    case "Rage Fighter":
      setFormulasAgility({
        defense: Math.floor(agility / 8) + defense,
        speed: Math.floor(agility / 8),
        defenseRate: Math.floor(agility / 10 + ((agility / 10) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 3 + agility / 10),
      });
      break;
    case "Grow Lancer":
      setFormulasAgility({
        defense: Math.floor((agility / 7) * (specialization + 1)) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4 + ((agility / 4) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 5),
      });
      setSpecializationAgi({
        splDef: Math.floor((agility / 7) * specialization),
      });
      break;
    case "Rune Mage":
      setFormulasAgility({
        defense: Math.floor(agility / 5) + defense,
        speed: Math.floor(agility / 12),
        defenseRate: Math.floor(agility / 3 + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecializationAgi({
        splAtkRate: Math.floor((level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * specialization2),
        splPVPAtkRate: Math.floor((level * 3 + Math.floor(agility * 4)) * specialization2),
      });
      break;
    case "Slayer":
      setFormulasAgility({
        defense: Math.floor(agility / 5) + defense,
        speed: Math.floor(agility / 12),
        defenseRate: Math.floor((agility / 3) * (specialization + 1) + ((agility / 3) * (specialization + 1) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecializationAgi({
        splAtkMin: Math.floor((Math.floor(strength / 9) + Math.floor(agility / 20)) * specialization),
        splAtkMax: Math.floor((Math.floor(strength / 5) + Math.floor(agility / 14)) * specialization),
        splDefRate: Math.floor((agility / 3) * specialization),
      });
      break;
    case "Gun Crusher":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 20),
        defenseRate: Math.floor(agility / 4 + ((agility / 4) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 3),
      });
      setSpecializationAgi({
        splAtkRate: Math.floor((level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * specialization2),
        splPVPAtkRate: Math.floor((level * 3 + agility * 3) * specialization2),
      });
      break;
    case "White Wizard":
      setFormulasAgility({
        defense: Math.floor(agility / 3) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3 + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      setSpecializationAgi({
        splAtkRate: Math.floor((level * 5 + Math.floor(agility * 1.5 + strength / 4)) * specialization2),
        splPVPAtkRate: Math.floor((level * 3 + agility * 4) * specialization2),
      });
      break;
    case "Mage":
      setFormulasAgility({
        defense: Math.floor(agility / 4) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor((agility / 3) + ((agility / 3) * specialization2) + ((agility / 3) * (specialization + 1) * defenseSussRate)),
        defenseRatePVP: Math.floor((level * 2 + agility / 4) + (level * 2 + agility / 4) * specialization2),
      });
      setSpecializationAgi({
        splDefRate: Math.floor((agility / 3) * specialization2),
        splPVPDefRate: Math.floor((level * 2 + agility / 4) * specialization2),
      });
      break;
    case "Illusion Knight":
      setFormulasAgility({
        defense: Math.floor(agility / 7) + defense,
        speed: Math.floor(agility / 10),
        defenseRate: Math.floor(agility / 3 + ((agility / 3) * defenseSussRate)),
        defenseRatePVP: Math.floor(level * 2 + agility / 4),
      });
      setSpecializationAgi({
        splAtkMin: Math.floor((Math.floor(strength / 9) + Math.floor(agility / 20)) * specialization),
        splAtkMax: Math.floor((Math.floor(strength / 5) + Math.floor(agility / 14)) * specialization),
        splDef: Math.floor((agility / 120) + (strength / 140)),
      });
      break;
  }
}