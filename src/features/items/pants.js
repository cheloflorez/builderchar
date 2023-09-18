import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pad",
    url: "/src/assets/items/sets/pad/pad-pants.webp",
    class: ["Dark Wizard"],
    defense: 17,
    defenseDefault: 17,
    update: 0,
    type: "Pants",
    typeLife: "typeDefense",
    optionType: "excellentOptions",
    ancient: ["Barnake", "Apollo"],
  },
];
const pants = createSlice({
  name: "pants",
  initialState,
  reducers: {},
});

export default pants.reducer;
