import Agility from "./agility";
import Command from "./command";
import Energy from "./energy";
import Stamina from "./stamina";
import Strength from "./strength";

export default function Stats() {
  return <dl className="absolute grid pt-1 pl-1 grid-cols-3 top-[252px] left-7">
    <Strength />
    <Agility />
    <Stamina />
    <Energy />
    <Command />
  </dl>;
}
