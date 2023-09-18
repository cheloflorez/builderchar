// FUNCION QUE CARGA LAS OPCIONES DE CUALQUIER SET ACC (POR AHORA SOLO 1 A LA VEZ) Y MOSTRAR LOS CAMBIOS EN EL DOM
// ESTA FUNCION SOLO SE UTILIZA EN wings.jsx (components > inventory > modal-items) LINEA 80

export default function selectSet(itemsSelected, AllOptions, dispatch, addSet) {
  if (itemsSelected.length > 0) {
    let test = 0,
      nameSet = "",
      OptionsSet = {};

    AllOptions.ancientOption.forEach((value) => {
      // prop,prop2 = Nombre del set acc
      const prop = value.name;
      itemsSelected.forEach((value) => {
        const prop2 = value.optionType;

        // la comparacion se realiza para saber cuantas partes de un set acc tienes
        if (prop === prop2) {
          nameSet = prop;
          test++;
        }
      });
    });

    if (test > 0) {
      //filtra el set seleccionado
      const setSelected = AllOptions.ancientOption.find((value) => value.name === nameSet);

      // ingresa hacia las opciones que tiene del set
      setSelected[nameSet].optionsAdvanced.forEach((value, index) => {
        // nombre de la opcion
        const { name } = value;

        // optionsAmount mira cuantas opciones se tienen que activar
        const optionsAmount = setSelected[nameSet].optionsActivated[test - 1];

        if (index < optionsAmount) {
          // option es igual al valor de la opcion que se tiene que activar
          const option = value[name];
          OptionsSet = { ...OptionsSet, [name]: option };
        }
      });
      dispatch(addSet(OptionsSet));
    }
  }
}
