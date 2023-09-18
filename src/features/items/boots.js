import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pad",
    url: "/src/assets/items/sets/pad/pad-boots.webp",
    class: ["Dark Wizard"],
    defense: 16,
    defenseDefault: 16,
    update: 0,
    type: "Boots",
    typeLife: "typeDefense",
    optionType: "excellentOptions",
    ancient: ["Barnake"],
  },
];
const boots = createSlice({
  name: "boots",
  initialState,
  reducers: {},
});

export default boots.reducer;
