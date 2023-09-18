import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pad",
    url: "/src/assets/items/sets/pad/pad-gloves.webp",
    class: ["Dark Wizard"],
    defense: 18,
    defenseDefault: 18,
    update: 0,
    type: "Gloves",
    typeLife: "typeDefense",
    optionType: "excellentOptions",
    ancient: ["Apollo"],
  },
];
const gloves = createSlice({
  name: "gloves",
  initialState,
  reducers: {},
});

export default gloves.reducer;
