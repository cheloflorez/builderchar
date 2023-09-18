import { combineReducers } from "@reduxjs/toolkit";
import darkWizard from "./dark-wizard";
import darkKnight from "./dark-knight";
import elf from "./elf";
import magicGladiator from "./magic-gladiator";
import darkLord from "./dark-lord";
import summoner from "./summoner";
import rageFighter from "./rage-fighter";
import growLancer from "./grow-lancer";
import runeWizard from "./rune-wizard";
import slayer from "./slayer";
import gunCrusher from "./gun-crusher";
import whiteWizard from "./white-wizard";
import mage from "./mage";
import illusionKnight from "./illusion-knight";

const characters = combineReducers({
  darkWizard,
  darkKnight,
  elf,
  magicGladiator,
  darkLord,
  summoner,
  rageFighter,
  growLancer,
  runeWizard,
  slayer,
  gunCrusher,
  whiteWizard,
  mage,
  illusionKnight,
});

export default characters;