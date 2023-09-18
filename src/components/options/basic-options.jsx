import React from "react";
import Update from "./update";
import Luck from "./luck";
import Life from "./life";

export default function BasicOptions({ resetOptions, item, setItem, optionsWings }) {
  return (
    <>
      {optionsWings?.optionsBasic.map((value, index) => {
        return (
          <div className="text-white col-span-2" key={index}>
            <Update item={item} setItem={setItem} value={value} resetOptions={resetOptions} />
            <Luck item={item} setItem={setItem} value={value} resetOptions={resetOptions} />
            <Life item={item} setItem={setItem} value={value[item?.typeLife]} resetOptions={resetOptions} />
          </div>
        );
      })}
    </>
  );
}
