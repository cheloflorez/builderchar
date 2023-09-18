import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const setAncient = createSlice({
  name: "setAncient",
  initialState,
  reducers: {
    addSet: (state, action) => {
      if (state.length > 0) {
        state.splice(0, 1, action.payload);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addSet } = setAncient.actions;

export default setAncient.reducer;
