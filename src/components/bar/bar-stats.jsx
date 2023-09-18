import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addStatsBar } from "../../features/build/stats-bar-slice";
import statsBar from "../../functions/formulas/formulas-bar/stats-bar";

export default function BarStats() {
  const character = useSelector((state) => state.charSelected[0]);
  const barStats = useSelector((state) => state.statsBarSlice);
  const setAncient = useSelector((state) => state.setAncient);
  const dispatch = useDispatch();

  useEffect(() => {
    if (character) statsBar(character, dispatch, addStatsBar, setAncient);
  }, [character, dispatch]);

  return (
    <>
      <div className="relative flex">
        <div className="flex justify-center items-center bg-[url('./assets/windows-stats/interface/hp.png')] h-[110px] w-[125px]">
          <span className="inline-block text-center">
            {barStats.hp} / {barStats.hp}
          </span>
        </div>
        <div className="absolute left-[101px] top-[26px] flex justify-center items-end bg-[url('./assets/windows-stats/interface/sd.png')] h-[25px] w-[145px]">
          <h2>
            <span>{barStats.sd}</span> / <span>{barStats.sd}</span>
          </h2>
        </div>
      </div>
      <div className="relative flex">
        <div className="absolute right-[104px] top-[19px] flex justify-center items-end bg-[url('./assets/windows-stats/interface/ag.png')] h-[20px] w-[135px]">
          <span>
            {barStats.ag} / {barStats.ag}
          </span>
        </div>
        <div className="flex justify-center items-center bg-[url('./assets/windows-stats/interface/mana.png')] h-[96px] w-[125px]">
          <span>
            {barStats.mana} / {barStats.mana}
          </span>
        </div>
      </div>
    </>
  );
}
