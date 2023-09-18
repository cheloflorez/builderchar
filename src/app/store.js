import { configureStore } from "@reduxjs/toolkit";
import characters from "../features/characters/characters";
import wings from "../features/items/wings";
import itemsSelected from "../features/build/items-selected";
import charSelected from "../features/build/char-selected";
import statsBarSlice from "../features/build/stats-bar-slice";
import options from "../features/options/options";
import helm from "../features/items/helm";
import armor from "../features/items/armor"
import gloves from "../features/items/gloves";
import pants from "../features/items/pants";
import boots from "../features/items/boots";
import setAncient from "../features/build/set-ancient";

export const store = configureStore({
  reducer: {
    characters,
    setAncient,
    wings,
    helm,
    armor,
    gloves,
    pants,
    boots,
    options,
    itemsSelected,
    charSelected,
    statsBarSlice,
  },
});
