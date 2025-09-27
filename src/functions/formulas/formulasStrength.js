// functions/formulas/formulasStrength.js
import { getTotalStats, calculate3rdTreeBonus } from '../../utils/3rdTreeUtils.js';

export default function formulasStr(character, setFormulasStrength, setSpecialization , setCombatPower) {
  // ✅ CENTRALIZADO: Obtener todos los bonus de una vez
  const bonus = calculate3rdTreeBonus(character);
  const totalStats = getTotalStats(character);
  
  // Usar stats totales en lugar de base
  const strength = totalStats.strength;
  const agility = totalStats.agility;
  const stamina = totalStats.stamina;
  const energy = totalStats.energy;
  const level = character.level;
  const command = totalStats.command;
  const classChar = character.class[0];
  
  // ✅ Para attack damage, buscar skills del 3rd tree con tipo 'AtkDmg'
  let Dmg = 0;
  if (character['3rdTree']) {
    character['3rdTree'].forEach(skill => {
      if (skill.valueType === 'AtkDmg') {
        Dmg += skill.value;
      }
    });
  }

  let specialization;
  if (strength <= 1500) specialization = strength / 15000;
  if (strength > 1500 && strength <= 2000) specialization = 0.1 + (strength - 1500) / 2500;
  if (strength > 2000 && strength <= 3000) specialization = 0.3 + (strength - 2000) / 6666;
  if (strength > 3000) specialization = 0.45;

  switch (classChar) {
    case "Dark Wizard":
      setFormulasStrength({
        attackMin: Math.floor(strength / 8) + Dmg,
        attackMax: Math.floor(strength / 4) + Dmg,
        attackRate: Math.floor((level * 5 + agility * 1.5 + strength / 4) * (specialization + 1)),
        attackRatePVP: Math.floor((level * 3 + agility * 4) * (specialization + 1)),
      });
      break;
    case "Dark Knight":
      setFormulasStrength({
        attackMin: Math.floor((strength / 6) * (specialization + 1)) + Dmg,
        attackMax: Math.floor((strength / 4) * (specialization + 1)) + Dmg,
        attackRate: Math.floor(level * 5 + agility * 1.5 + strength / 4),
        attackRatePVP: level * 3 + agility * 4.5,
      });
      setSpecialization({
        splAtkMin: Math.floor((strength / 6) * specialization),
        splAtkMax: Math.floor((strength / 4) * specialization),
      });
      setCombatPower({
        CombatPower: 0
      })
      break;
    case "Fairy Elf":
      setFormulasStrength({
        attackMin: Math.floor(Math.floor(strength / 14) + Math.floor(agility / 7) * (specialization + 1)) + Dmg,
        attackMax: Math.floor(Math.floor(strength / 8) + Math.floor(agility / 4) * (specialization + 1)) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4),
        attackRatePVP: Math.floor(level * 3 + agility * 0.6),
      });
      break;
    case "Magic Gladiator":
      setFormulasStrength({
        attackMin: Math.floor(strength / 6 + (energy / 12) * (specialization + 1)) + Dmg,
        attackMax: Math.floor(strength / 4 + (energy / 8) * (specialization + 1)) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 2.5) + Math.floor(strength / 4),
        attackRatePVP: level * 3 + agility * 3.5,
      });
      setSpecialization({
        splAtkMin: Math.floor((strength / 6 + energy / 12) * specialization),
        splAtkMax: Math.floor((strength / 4 + energy / 8) * specialization),
      });
      break;
    case "Dark Lord":
      setFormulasStrength({
        attackMin: Math.floor((strength / 7 + energy / 14) * (specialization + 1)) + Dmg,
        attackMax: Math.floor((strength / 5 + energy / 10) * (specialization + 1)) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 3) + Math.floor(strength / 4) + Math.floor(command / 10),
        attackRatePVP: level * 3 + agility * 4,
      });
      setSpecialization({
        splAtkMin: Math.floor((strength / 7 + energy / 14) * specialization),
        splAtkMax: Math.floor((strength / 5 + energy / 10) * specialization),
      });
      break;
    case "Summoner":
      setFormulasStrength({
        attackMin: Math.floor(strength / 7 + agility / 7) + Dmg,
        attackMax: Math.floor(strength / 4 + agility / 4) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4),
        attackRatePVP: Math.floor(level * 3 + agility * 3.5),
      });
      break;
    case "Rage Fighter":
      setFormulasStrength({
        attackMin: Math.floor(Math.floor(stamina / 15) + Math.floor(strength / 7) * (specialization + 1)) + Dmg,
        attackMax: Math.floor(Math.floor(stamina / 12) + Math.floor(strength / 5) * (specialization + 1)) + Dmg,
        attackRate: level * 3 + Math.floor(agility * 1.25) + Math.floor(strength / 6),
        attackRatePVP: level * 3 + Math.floor(agility * 3.5),
      });
      setSpecialization({
        splAtkMin: Math.floor((Math.floor(stamina / 15) + Math.floor(strength / 7)) * specialization),
        splAtkMax: Math.floor((Math.floor(stamina / 12) + Math.floor(strength / 5)) * specialization),
      });
      break;
    case "Grow Lancer":
      setFormulasStrength({
        attackMin: Math.floor(Math.floor(strength / 8) + Math.floor(agility / 10) * (specialization + 1)) + Dmg,
        attackMax: Math.floor(Math.floor(strength / 4) + Math.floor(agility / 6) * (specialization + 1)) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.25) + Math.floor(strength / 4),
        attackRatePVP: level * 3 + Math.floor(agility * 2.5),
      });
      setSpecialization({
        splAtkMin: Math.floor((Math.floor(strength / 8) + Math.floor(agility / 10)) * specialization),
        splAtkMax: Math.floor((Math.floor(strength / 4) + Math.floor(agility / 6)) * specialization),
      });
      break;
    case "Rune Mage":
      setFormulasStrength({
        attackMin: Math.floor(strength / 8) + Dmg,
        attackMax: Math.floor(strength / 4) + Dmg,
        attackRate: Math.floor(
          (level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * (specialization + 1)
        ),
        attackRatePVP: Math.floor((level * 3 + Math.floor(agility * 4)) * (specialization + 1)),
      });
      break;
    case "Slayer":
      setFormulasStrength({
        attackMin: Math.floor((strength / 9 + agility / 20) * (specialization + 1)) + Dmg,
        attackMax: Math.floor((strength / 5 + agility / 14) * (specialization + 1)) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4),
        attackRatePVP: level * 3 + Math.floor(agility * 4),
      });
      break;
    case "Gun Crusher":
      if (agility <= 1500) specialization = agility / 15000;
      if (agility > 1500 && agility <= 2000) specialization = 0.1 + (agility - 1500) / 2500;
      if (agility > 2000 && agility <= 3000) specialization = 0.3 + (agility - 2000) / 6666;
      if (agility > 3000) specialization = 0.45;
      setFormulasStrength({
        attackMin: Math.floor(strength / 8) + Dmg,
        attackMax: Math.floor(strength / 4) + Dmg,
        attackRate: Math.floor(
          (level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4)) * (specialization + 1)
        ),
        attackRatePVP: Math.floor(level * 3 + agility * 3 + (level * 3 + agility * 4) * specialization),
      });
      break;
    case "White Wizard":
      setFormulasStrength({
        attackMin: Math.floor(strength / 8) + Dmg,
        attackMax: Math.floor(strength / 4) + Dmg,
        attackRate: Math.floor((level * 5 + Math.floor(agility * 1.5 + strength / 4)) * (specialization + 1)),
        attackRatePVP: Math.floor((level * 3 + agility * 4) * (specialization + 1)),
      });
      break;
    case "Mage":
      setFormulasStrength({
        attackMin: Math.floor(strength / 8) + Dmg,
        attackMax: Math.floor(strength / 4) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 2),
        attackRatePVP: level * 3 + Math.floor(agility * 4),
      });
      break;
    case "Illusion Knight":
      setFormulasStrength({
        attackMin: Math.floor(strength / 11) + Math.floor(agility / 9) + Dmg,
        attackMax: Math.floor(strength / 9) + Math.floor(agility / 6) + Dmg,
        attackRate: level * 5 + Math.floor(agility * 1.5) + Math.floor(strength / 4),
        attackRatePVP: level * 3 + Math.floor(agility * 2.5),
      });
      break;
  }
}