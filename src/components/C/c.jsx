import CExtends from "./cExtends";
import Level from "./level";
import Points from "./points";
import Stats from "./stats/stats";

export default function CWindows() {
  return (
    <div className="flex">
      <div className="bg-[url('./assets/windows-stats/class-stats.png')] w-[309px] h-[612px]">
        <div className="relative text-sm text-slate-300 grid grid-cols-2">
          <Level />
          <Points />
          <Stats />
        </div>
      </div>
      <CExtends />
    </div>
  );
}
