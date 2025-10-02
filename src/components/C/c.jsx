import Level from "./level";
import Points from "./points";
import Stats from "./stats/stats";
import ExtendedStats from "./ExtendedStats";

export default function CWindows() {
  return (
    <div className="flex">
      {/* Panel principal de stats - siempre visible */}
      <div className="bg-[url('/windows-stats/class-stats.png')] w-[309px] h-[612px]">
        <div className="relative text-sm text-slate-300 grid grid-cols-2">
          <Level />
          <Points />
          <Stats />
        </div>
      </div>
      
      {/* Panel extendido - siempre visible y pegado */}
      <div className="bg-[url('/windows-stats/classStatsExtends.png')] w-[295px] h-[612px] text-sm">
        <div className="relative translate-x-5 translate-y-24 pt-1 w-64 h-[494px] overflow-y-scroll">
          <ExtendedStats />
        </div>
      </div>
    </div>
  );
}