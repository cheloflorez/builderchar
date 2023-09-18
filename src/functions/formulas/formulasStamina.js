export default function formulasSta(character,setFormulasStamina) {
  switch (character.class[0]) {
    case "Rage Fighter":
      setFormulasStamina({
        prxAtkPwr: 50 + Math.floor(character.stamina / 10)
      })
      break;
  }
}
