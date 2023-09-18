import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const charSelected = createSlice({
  name: "char",
  initialState,
  reducers: {
    addChar: (state, action) => {
      const newState = Object.assign({}, action.payload, { items: [] });
      state.splice(0, 1, newState);
    },
    addItem: (state, action) => {
      if (action.payload !== undefined) {
        if (state.length > 0) {
          const items = state[0].items || []; // Accede al array "items" dentro del primer objeto del estado, o crea uno nuevo si no existe
          const replaceIndex = items.findIndex((element) => element.type === action.payload.type);
          if (replaceIndex !== -1) {
            // Si se encuentra un elemento con el mismo tipo, reemplázalo
            items.splice(replaceIndex, 1, action.payload);
          } else {
            // Si no se encuentra un elemento con el mismo tipo, agrégalo al final del array
            items.push(action.payload);
          }

          const arr = items;
          const newArr = arr.filter((obj) => Object.keys(obj).length !== 0);

          state[0].items = newArr;
        }
      }
    },
    selectLevel: (state, action) => {
      let { level, points } = state[0];

      level = action.payload;
      if (action.payload > 1500) level = 1500;
      if (level < 150 && level > 1) points = (level - 1) * 5;
      if (level >= 150) points = (level - 1) * 5 + 20;
      if (level > 220 && level <= 400) points = 1115 + (level - 220) * 6;
      if (level >= 400) points = 2265;
      if (level >= 800) points = 2365;
      if (level <= 1 || level === "") points = "-";

      state[0].level = level;
      state[0].points = points;
    },
  },
});

export const { addChar, addItem, selectLevel } = charSelected.actions;

export default charSelected.reducer;
