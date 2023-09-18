import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pad",
    url: "/src/assets/items/sets/pad/pad-helm.webp",
    class: ["Dark Wizard"],
    defense: 18,
    defenseDefault: 18,
    update: 0,
    type: "Helm",
    typeLife: "typeDefense",
    optionType: "excellentOptions",
    ancient: ["Barnake", "Apollo"],
  },
];
const helm = createSlice({
  name: "helm",
  initialState,
  reducers: {},
});

export default helm.reducer;
