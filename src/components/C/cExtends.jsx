import "../../styles/scroll-bar.css";
import { useState } from "react";

const extendsOptions = [
  { value: "*Crit dmg (%)", opt: "criticalDamageRate", rate: "%", decimal: true },
  { value: "*Exc dmg (%)", opt: "excellentDamageRate", rate: "%", decimal: true },
  { value: "*Double dmg (%)", opt: "doubleDamageRate", rate: "%", decimal: true },
  { value: "*Triple dmg (%)", opt: "tripleDamageRate", rate: "%", decimal: true },
  { value: "*Def ign (%)", opt: "defenseIgnoreRate", rate: "%", decimal: true },
  { value: "*Return dmg (%)", opt: "returnDamageRate", rate: "%", decimal: true },
  { value: "*Skill Atk dmg inc", opt: "skillDamage" },
  { value: "*Crit dmg inc", opt: "criticalDamage" },
  { value: "*Exc dmg inc", opt: "excellentDamage" },
  { value: "*Dmg inc (%)", opt: "DamageIncreaseRate", rate: "%" },
  { value: "*Dmg Redc (%)", opt: "damageReduceRate", rate: "%" },
  { value: "*Reduccion de daños", opt: "damageReduce" },
  { value: "*Dmg Reflc (%)", opt: "damageReflect", rate: "%" },
  { value: "*Dmg Absorb (%)", opt: "damageAbsorb", rate: "%" },
  { value: "*HP rec (%)", opt: "lifeRecoveryRate", decimal: true },
  { value: "*Mob Atk HP rec", opt: "lifeRecoveryForKillMonster", decimal: true },
  { value: "*Res all HP (%)", opt: "restoreAllLifeRate", rate: "%", decimal: true },
  { value: "*HP absorb", opt: "lifeAbsorb" },
  { value: "*MP rec (%)", opt: "manaRecoveryRate", decimal: true },
  { value: "*Mob Atk MP rec", opt: "manaRecoveryForKillMonster", decimal: true },
  { value: "*Res all MP (%)", opt: "restoreAllManaRate", rate: "%", decimal: true },
  { value: "*MP use redc (%)", opt: "reduceUseManaRate", rate: "%" },
  { value: "*AG rec (%)", opt: "recoveryAGRate" },
  { value: "*AG usage red (%)", opt: "reduceAGusedRate", rate: "%" },
  { value: "*SD rec (%)", opt: "recoverySDRate", decimal: true },
  { value: "*Mob Atk SD red", opt: "sdRecoveryForKillMonster", decimal: true },
  { value: "*Res all SD (%)", opt: "restoreAllSDRate", rate: "%", decimal: true },
  { value: "*SD absorb", opt: "sdAbsorb" },
  { value: "*SD(%) when atckd", opt: "sdRateWhenAttack" },
  { value: "*SD % when atk", opt: "sdRateWhenAttack2" },
  { value: "*SD Ignore (%)", opt: "sdIgnoreRate", rate: "%" },
  { value: "*Stun (%)", opt: "stunRate", rate: "%" },
  { value: "*Stun res (%)", opt: "stunResistenceRate", rate: "%" },
  { value: "*Basic Def", opt: "basicDefense" },
  { value: "*Shield absorb", opt: "shieldAbsorb" },
  { value: "*Shield blck(%)", opt: "shieldBlockRate", rate: "%" },
  { value: "*Weapon blck(%)", opt: "weaponBlockRate", rate: "%" },
  { value: "*Zen ob inc (%)", opt: "increaseObtainingZenRate", rate: "%" },
];

export default function CExtends() {

  const [isActive, setIsActive] = useState(false);

  const valueCExtends = (options) => {

    let result = 0;

    return (
      <span className="text-amber-300 pr-3">
        {result <= 0 ? (
          "-"
        ) : options.rate ? (
          <>
            {result}
            {options.rate}
          </>
        ) : (
          result
        )}
      </span>
    );
  };

  return (
    <>
      {isActive ? (
        <div className="relative bg-[url('./assets/windows-stats/classStatsExtends.png')] w-[295px] h-[612px] text-sm">
          <h2 className="absolute top-[72px] left-8 text-sm text-slate-300">Effect and options</h2>
          <div className="relative translate-x-5 translate-y-24 pt-1 w-64 h-[494px] overflow-y-scroll">
            <div>
              {extendsOptions.map((options, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <span className="text-slate-300">{options.value}</span>
                    {valueCExtends(options)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex  text-white items-center">
        <button className="relative" onClick={() => setIsActive(!isActive)}>
          <div>
            <div className="absolute -left-[22px] -top-[35px] scale-[0.1] w-0 h-0 border-b-transparent border-b-[50px] border-t-transparent border-t-[50px] border-r-amber-300 border-r-[50px]"></div>
            <div className="absolute -left-[15px] -top-[35px] scale-[0.1] w-0 h-0 border-b-transparent border-b-[50px] border-t-transparent border-t-[50px] border-l-amber-300 border-l-[50px]"></div>
          </div>
        </button>
      </div>
    </>
  );
}
