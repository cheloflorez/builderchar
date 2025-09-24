import { getTotalStats, calculate3rdTreeBonus } from '../../utils/3rdTreeUtils.js';

export default function formulasSta(character, setFormulasStamina) {

  const bonus = calculate3rdTreeBonus(character);
  const totalStats = getTotalStats(character);

  const stamina = totalStats.stamina

  switch (character.class[0]) {
    case "Rage Fighter":
      setFormulasStamina({
        prxAtkPwr: 50 + Math.floor(stamina / 10)
      })
      break;
  }
}