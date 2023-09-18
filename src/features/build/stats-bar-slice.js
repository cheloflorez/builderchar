import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hp: 0,
  mana: 0,
  ag: 0,
  sd: 0,
};
const statsBar = createSlice({
  name: "item",
  initialState,
  reducers: {
    addStatsBar: (state, action) => {
      const {hp,mana,ag,sd} = action.payload
      state.hp = hp
      state.mana = mana
      state.ag = ag
      state.sd = sd
    },
  },
});

export const { addStatsBar } = statsBar.actions;

export default statsBar.reducer;
