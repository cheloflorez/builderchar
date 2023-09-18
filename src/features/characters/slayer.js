import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  class: ["Slayer", "Royal Slayer", "Master Slayer", "Slaughterer"],
  level: 1,
  points: 0,
  fruits: 0,
  strength: 28,
  agility: 30,
  stamina: 15,
  energy: 10,
  maxSpeed: 384,
};

const slayer = createSlice({
  name: "slayer",
  initialState,
  reducers: {
    selectLevel: (state, action) => {
      const stats = state.agility - 18 + state.strength - 18 + state.stamina - 15 + state.energy - 30;
      state.level = action.payload;
      if (action.payload > 1500) state.level = 1500;
      if (state.level < 150 && state.level > 1) state.points = (state.level - 1) * 5 - stats;
      if (state.level >= 150) state.points = (state.level - 1) * 5 + 20 - stats;
      if (state.level > 220 && state.level <= 400) state.points = 1115 + (state.level - 220) * 6 - stats;
      if (state.level >= 400) state.points = 2265 - stats;
      if (state.level >= 800) state.points = 2365 - stats;
      if (state.level <= 1 || state.level === "") state.points = "-";
      if (stats > 0 && state.level <= 1) state.points = -stats;
    },
  },
});

export const { selectLevel } = slayer.actions;

export default slayer.reducer;

/* const darkWizard = createSlice({
  name: "dark-wizard",
  initialState,
  reducers: {
    increaseStats: (state, action) => {
      const stat = action.payload[0];
      const points = action.payload[1];
      if (state.points <= points) {
        state[stat] = state[stat] + state.points;
        state.points = state.points - state.points;
      }
      if (state.points > points) {
        state.points = state.points - points;
        state[stat] = state[stat] + points;
      }
    },
    reduceStats: (state, action) => {
      const statsBase = {
        strength: 18,
        agility: 18,
        stamina: 15,
        energy: 30,
      };
      const stat = action.payload[0];
      const points = action.payload[1];
      if (state[stat] - statsBase[stat] < points) {
        const restStat =  state[stat] - statsBase[stat]
        state.points += restStat
        state[stat] = state[stat] - restStat;
      }
      if (state[stat] > statsBase[stat]) {
        state[stat] = state[stat] - points;
        state.points += points;
      }
    },
    selectLevel: (state, action) => {
      const stats = state.agility - 18 + state.strength - 18 + state.stamina - 15 + state.energy - 30;
      state.level = action.payload;
      if (action.payload > 1500) state.level = 1500;
      if (state.level < 150 && state.level > 1) state.points = (state.level - 1) * 5 - stats;
      if (state.level >= 150) state.points = (state.level - 1) * 5 + 20 - stats;
      if (state.level > 220 && state.level <= 400) state.points = 1115 + (state.level - 220) * 6 - stats;
      if (state.level >= 400) state.points = 2265 - stats;
      if (state.level >= 800) state.points = 2365 - stats;
      if (state.level <= 1 || state.level === "") state.points = "-";
      if (stats > 0 && state.level <= 1) state.points = -stats;
    },
  },
});

export const { increaseStats, selectLevel, reduceStats } = darkWizard.actions;
*/
