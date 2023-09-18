import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pad",
    url: "/src/assets/items/sets/pad/pad-armor.webp",
    class: ["Dark Wizard"],
    defense: 25,
    defenseDefault: 25,
    update: 0,
    type: "Armor",
    typeLife: "typeDefense",
    optionType: "excellentOptions",
    ancient: ["Apollo"],
  },
];
const armor = createSlice({
  name: "armor",
  initialState,
  reducers: {},
});

export default armor.reducer;
