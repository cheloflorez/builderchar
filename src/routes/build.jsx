import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CWindows from "../components/C/c";
import BarStats from "../components/bar/bar-stats";
import Inventory from "../components/inventory/inventory";
import selectChar from "../functions/char/select-char";
import { addChar } from "../features/build/char-selected";

export default function Build() {
  const params = useParams();
  const { charName } = selectChar(params.char);
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters[charName]);
  console.log(character)
  useEffect(() => {
    dispatch(addChar(character));
  }, [character,dispatch]);

  return (
    <div className="bg-[url('src/assets/screen.jpg')] bg-no-repeat bg-cover h-screen overflow-hidden">
      <div className="flex justify-between px-4 pt-1">
        <CWindows />
        <Inventory />
      </div>
      <div className="flex items-end justify-around text-white -mt-4 text-xs">
      </div>
    </div>
  );
}
