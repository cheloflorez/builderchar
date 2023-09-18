// FUNCION QUE CAMBIA EL TIPO DE OPCION DE LOS ITEMS (EXCELLENT, ANCIENT, WINGS)
// SOLO SE ESTA USANDO EN wings.jsx (components > inventory > modal-items) LINEA 75

export default function typeOption(item, AllOptions, setOptionsWings) {
  if (item?.optionType === "excellentOptions") {
    setOptionsWings(AllOptions[item.optionType][0]);
  } else if (item?.activeAncient) {
    const set = AllOptions.ancientOption.find((element) => element.name === item.optionType);
    setOptionsWings(set[set.name]);
  } else if (item?.tier > 0 || item?.tier === "event") {
    switch (item.tier) {
      case 1:
        setOptionsWings(AllOptions[item.optionType][0]);
        break;
      case 2:
        setOptionsWings(AllOptions[item.optionType][1]);
        break;
      case 3:
        setOptionsWings(AllOptions[item.optionType][2]);
        break;
      case "event":
        setOptionsWings(AllOptions[item.optionType][3]);
        break;
      default:
        setOptionsWings(null);
        break;
    }
  } else {
    setOptionsWings(null);
  }
}
