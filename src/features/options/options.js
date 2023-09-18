import { combineReducers } from "@reduxjs/toolkit";
import excellentOptions from "./excellentOptions";
import wingsOption from "./wingsOption";
import ancientOption from "./ancientOption";

const options = combineReducers({
  excellentOptions,
  wingsOption,
  ancientOption,
});

export default options;
