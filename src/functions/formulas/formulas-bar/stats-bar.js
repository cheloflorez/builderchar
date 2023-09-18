export default function statsBar(character, dispatch, addStatsBar, setAncient) {
  const classChar = character.class[0];

  let { strength, agility, stamina, energy, command, level } = character;

  const allStats = strength + agility + stamina + energy;
  const allStatsDL = allStats + command;

  let defense = 0,
    hpMax = 0,
    manaMax = 0,
    hpRate = 1,
    manaRate = 1,
    agMax = 0;

  if (setAncient.length > 0) {
    setAncient.forEach((value) => {
      if (value.agMax > 0) agMax = agMax + value.agMax;
      if (value.defense > 0) defense = defense + value.defense;
      if (value.hpMax > 0) hpMax = hpMax + value.hpMax;
      if (value.manaMax > 0) manaMax = manaMax + value.manaMax;
    });
  }

  character.items.forEach((value) => {
    if (value.defense > 0) defense = defense + value.defense;
    if (value.hpMax > 0) hpMax = hpMax + value.hpMax;
    if (value.manaMax > 0) manaMax = manaMax + value.manaMax;
    if (value.HP > 0 && hpRate !== 1) hpRate = hpRate * (value.HP / 100 + 1);
    if (value.Mana > 0 && manaRate !== 1) manaRate = manaRate * (value.Mana / 100 + 1);
    if (value.HP > 0 && hpRate === 1) hpRate = hpRate + value.HP / 100;
    if (value.Mana > 0 && manaRate === 1) manaRate = manaRate + value.Mana / 100;
  });
  if (level < 1) level = 1;

  switch (classChar) {
    case "Dark Wizard":
      defense = Math.floor((defense + Math.floor(agility / 4)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((Math.floor(45 + stamina + level - 1) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30))) + defense,
          mana: Math.floor((energy * 2 + (level - 1) * 2 + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.4 + stamina * 0.3 + energy * 0.2) + agMax,
        })
      );
      break;
    case "Dark Knight":
      defense = Math.floor((defense + Math.floor(agility / 3)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((35 + Math.floor(stamina * 3 + (level - 1) * 2) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + level * (level / 30) + defense),
          mana: Math.floor((10 + energy + Math.floor((level - 1) / 2) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.15 + agility * 0.2 + stamina * 0.3 + energy) + agMax,
        })
      );
      break;
    case "Fairy Elf":
      defense = Math.floor((defense + Math.floor(agility / 10)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((40 + Math.floor(stamina * 2 + level - 1) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((22.5 + Math.floor(energy * 1.5 + (level - 1) * 1.5) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.3 + agility * 0.2 + stamina * 0.3 + energy * 0.2) + agMax,
        })
      );
      break;
    case "Magic Gladiator":
      defense = Math.floor((defense + Math.floor(agility / 4)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((58 + Math.floor(stamina * 2 + level - 1) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((8 + Math.floor(energy * 2 + level - 1) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.25 + stamina * 0.3 + energy * 0.15) + agMax,
        })
      );
      break;
    case "Dark Lord":
      defense = Math.floor((defense + Math.floor(agility / 7)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((50 + Math.floor(stamina * 2 + (level - 1) * 1.5) + hpMax) * hpRate),
          sd: Math.floor(allStatsDL * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((17.5 + Math.floor(energy * 1.5 + level - 1) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.3 + agility * 0.2 + stamina * 0.1 + energy * 0.15 + command * 0.3) + agMax,
        })
      );
      break;
    case "Summoner":
      defense = Math.floor((defense + Math.floor(agility / 3)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((34 + stamina * 2 + level - 1 + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((0.9 + Math.floor(energy * 1.7 + (level - 1) * 1.5) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.25 + stamina * 0.3 + energy * 0.15) + agMax,
        })
      );
      break;
    case "Rage Fighter":
      defense = Math.floor((defense + Math.floor(agility / 8)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((50 + Math.floor(stamina * 2 + (level - 1) * 1.3) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((14 + Math.floor(energy * 1.3 + level - 1) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.15 + agility * 0.2 + stamina * 0.3 + energy) + agMax,
        })
      );
      break;
    case "Grow Lancer":
      defense = Math.floor((defense + Math.floor(agility / 7)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((85 + Math.floor(stamina + (level - 1) * 2) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((16 + Math.floor(energy + level - 1) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.15 + agility * 0.2 + stamina * 0.3 + energy) + agMax,
        })
      );
      break;
    case "Rune Mage":
      defense = Math.floor((defense + Math.floor(agility / 5)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((32 + Math.floor(stamina * 2 + (level - 1) * 1.2) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((-12 + Math.floor(energy * 1.8 + (level - 1) * 1.5) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.2 + stamina * 0.3 + energy * 0.75) + agMax,
        })
      );
      break;
    case "Slayer":
      defense = Math.floor((defense + Math.floor(agility / 10)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((85 + Math.floor(stamina * 3 + (level - 1) * 1.5) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((energy + (level - 1) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.4 + stamina * 0.3 + energy) + agMax,
        })
      );
      break;
    case "Gun Crusher":
      defense = Math.floor((defense + Math.floor(agility / 3)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((60 + Math.floor(stamina * 2 + (level - 1) * 1.5) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((30 + energy * 2 + (level - 1) * 1.5 + manaMax) * manaRate),
          // AG FALTA
          ag: Math.floor(strength * 0.15 + agility * 0.2 + stamina * 0.3 + energy) + agMax,
        })
      );
      break;
    case "White Wizard":
      defense = Math.floor((defense + Math.floor(agility / 3)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((40 + Math.floor(stamina * 2 + (level - 1) * 2) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((10 + energy * 2 + (level - 1) * 2 + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.4 + stamina * 0.3 + energy * 0.25) + agMax,
        })
      );
      break;
    case "Mage":
      defense = Math.floor((defense + Math.floor(agility / 3)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((50 + Math.floor(stamina * 2 + level - 1) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((5 + Math.floor(energy * 2 + (level - 1) * 1.5) + manaMax) * manaRate),
          ag: Math.floor(strength * 0.2 + agility * 0.3 + stamina * 0.3 + energy * 0.2) + agMax,
        })
      );
      break;
    case "Illusion Knight":
      defense = Math.floor((defense + Math.floor(agility / 7)) * 0.5);
      dispatch(
        addStatsBar({
          hp: Math.floor((70 + Math.floor(stamina * 2 + (level - 1) * 2) + hpMax) * hpRate),
          sd: Math.floor(allStats * 1.2 + Math.floor(level * (level / 30)) + defense),
          mana: Math.floor((5 + Math.floor(energy * 1.5 + (level - 1) * 1.2) + manaMax) * manaRate),
          // AG POSIBLE FORMULA
          ag: Math.floor(strength * 0.3 + agility * 0.4 + stamina * 0.3 + energy * 0.25) + agMax,
        })
      );
      break;
  }
}
