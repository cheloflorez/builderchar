import dw from "../assets/characters/dark-wizard.png";
import dk from "../assets/characters/dark-knight.png";
import elf from "../assets/characters/elf.png";
import mg from "../assets/characters/magic-gladiator.png";
import dl from "../assets/characters/dark-lord.png";
import sum from "../assets/characters/summoner.png";
import rf from "../assets/characters/rage-fighter.png";
import gl from "../assets/characters/grow-lancer.png";
import rw from "../assets/characters/rune-wizard.png";
import sl from "../assets/characters/slayer.png";
import gc from "../assets/characters/gun-crusher.png";
import ww from "../assets/characters/white-wizard.png";
import lm from "../assets/characters/mage.png";
import ik from "../assets/characters/ilusion-knight.png";
import { Link } from "react-router-dom";

const chars = [
  { src: dw, alt: "dark-wizard" },
  { src: dk, alt: "dark-knight" },
  { src: elf, alt: "elf" },
  { src: mg, alt: "magic-gladiator" },
  { src: dl, alt: "dark-lord" },
  { src: sum, alt: "summoner" },
  { src: rf, alt: "rage-fighter" },
  { src: gl, alt: "grow-lancer" },
  { src: rw, alt: "rune-wizard" },
  { src: sl, alt: "slayer" },
  { src: gc, alt: "gun-crusher" },
  { src: ww, alt: "white-wizard" },
  { src: lm, alt: "mage" },
  { src: ik, alt: "illusion-knight" },
];

export default function Root() {
  return (
    <main>
      <h2 className="text-center font-bold text-3xl py-1">Seleccionar Personaje</h2>
      <div className="grid grid-cols-5 p-10 gap-1 overflow-hidden">
        {chars.map((char) => {
          return (
            <Link key={char.alt} to={`/${char.alt}`}>
              <img src={char.src} alt={char.alt} className="h-96 object-center front object-none" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
