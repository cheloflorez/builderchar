import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wings from "./modal-items/wings";
import { addItem } from "../../features/build/char-selected";
import { addSet } from "../../features/build/set-ancient";
import typeOption from "../../functions/others/type-options";
import selectSet from "../../functions/others/select-set";

export default function Modal({ modalActive, setModalActive }) {
  const items = useSelector((state) => state[modalActive]);
  const [itemFilter, setItemFilter] = useState([]);

  const character = useSelector((state) => state.charSelected[0]);

  const [resetOptions, setResetOptions] = useState(false);

  const AllOptions = useSelector((state) => state.options);
  const [optionsWings, setOptionsWings] = useState(null);

  const dispatch = useDispatch();

  const [item, setItem] = useState({});

  const handleChange = (e) => {
    setItem(itemFilter.find((element) => element.name === e));
    setResetOptions(!resetOptions);
  };

  const handleClick = () => {
    dispatch(addItem(item));
    setModalActive(false);
  };
  useEffect(() => {
    const filteredItems = items.filter((type) => character.class.some((c) => type.class.includes(c)));
    setItemFilter(filteredItems);
  }, [items]);

  useEffect(() => {
    // PROBLEMAS DE RETRASO AL PINTAR EN EL DOM
    //funcion que cambio el tipo de opciones
    typeOption(item, AllOptions, setOptionsWings);
    //funcion que carga las opciones de un set ancient
    selectSet(character.items, AllOptions, dispatch, addSet);
  }, [modalActive, character, item, AllOptions]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-black/50 duration-300">
      <div className="text-center justify-center p-2 min-w-[30%] min-h-[30%] w-max h-max bg-[url('/src/assets/windows-stats/back.png')] rounded-lg">
        <div>
          <select name="select" onChange={(e) => handleChange(e.target.value)} className="h-8 mt-3 rounded">
            <option value="select">Select {modalActive}</option>
            {itemFilter.map((value, index) => {
              return (
                <option value={value.name} key={index}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-4 grid grid-cols-4 justify-center">
          <Wings
            item={item}
            setItem={setItem}
            resetOptions={resetOptions}
            optionsWings={optionsWings}
            modalActive={modalActive}
          />
        </div>
        <button onClick={handleClick} className="mt-2 bg-[url('/src/assets/windows-stats/save.png')] bg-cover bg-center  w-[115px] h-[45px] ">
          <span className="text-orange-400">Guardar</span>
        </button>
      </div>
    </div>
  );
}
