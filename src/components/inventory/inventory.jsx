import { useState } from "react";
import Modal from "./modal-inventory";
import { useSelector } from "react-redux";
import PositionImage from "./position-image";

export default function Inventory() {
  const [modalActive, setModalActive] = useState(false);

  const itemsSelected = useSelector((state) => state.charSelected);
  const handleClick = (item) => {
    setModalActive(item);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative bg-[url('./assets/windows-stats/inventory.png')] w-[310px] h-[345px]">
        {itemsSelected.length > 0 && <PositionImage itemsSelected={itemsSelected} />}
      </div>

      <div className="relative bg-[url('./assets/windows-stats/inventory.png')] bg-contain bg-top w-[225px] h-[250px] text-white text-xs">
        <button onClick={() => handleClick("pet")} className="absolute top-14 left-6">
          Pet
        </button>
        <button className="absolute top-16 left-[59px]">Neck</button>
        <button onClick={() => handleClick("helm")} className="absolute top-14 left-[100px]">
          Helm
        </button>
        <button onClick={() => handleClick("wings")} className="absolute top-14 right-[31px]">
          Wings
        </button>
        <button className="absolute top-28 left-2">Weapon 1</button>
        <button className="absolute top-[120px] left-[50px]">Earring R</button>
        <button onClick={() => handleClick("armor")} className="absolute top-28 left-[97px]">
          Armor
        </button>
        <button className="absolute top-[120px] right-[46px]">Earring L</button>
        <button className="absolute top-28 right-1">Weapon 2</button>
        <button onClick={() => handleClick("gloves")} className="absolute bottom-[68px] left-4">
          Gloves
        </button>
        <button className="absolute bottom-[60px] left-14">Ring R</button>
        <button onClick={() => handleClick("pants")} className="absolute bottom-[68px] left-[100px]">
          Pants
        </button>
        <button className="absolute bottom-[60px] right-14">Ring L</button>
        <button onClick={() => handleClick("boots")} className="absolute bottom-[68px] right-4">
          Boots
        </button>
        <button className="absolute bottom-5 left-4">Artifact</button>
        <button className="absolute bottom-5 right-0.5">Pentagram</button>
      </div>
      {modalActive && <Modal modalActive={modalActive} setModalActive={setModalActive} />}
    </div>
  );
}
