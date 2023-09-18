import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const itemsSelected = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.length > 0) {
        const replace = state.findIndex((element) => element.type === action.payload.type);
        state.splice(replace, 1, action.payload);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addItem } = itemsSelected.actions;

export default itemsSelected.reducer;
