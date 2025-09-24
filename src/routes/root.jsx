import { useState } from "react";
import { Link } from "react-router-dom";
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

const chars = [
  { 
    src: dw, 
    alt: "dark-wizard", 
    name: "Dark Wizard",
    description: "Master of destructive magic",
    type: "Magical",
    difficulty: "Medium"
  },
  { 
    src: dk, 
    alt: "dark-knight", 
    name: "Dark Knight",
    description: "Mighty warrior with sword and shield",
    type: "Physical",
    difficulty: "Easy"
  },
  { 
    src: elf, 
    alt: "elf", 
    name: "Fairy Elf",
    description: "Agile archer with nature magic",
    type: "Physical",
    difficulty: "Medium"
  },
  { 
    src: mg, 
    alt: "magic-gladiator", 
    name: "Magic Gladiator",
    description: "Balanced fighter with magic abilities",
    type: "Hybrid",
    difficulty: "Hard"
  },
  { 
    src: dl, 
    alt: "dark-lord", 
    name: "Dark Lord",
    description: "Commander with dark powers",
    type: "Physical",
    difficulty: "Hard"
  },
  { 
    src: sum, 
    alt: "summoner", 
    name: "Summoner",
    description: "Calls forth creatures and curses",
    type: "Magical",
    difficulty: "Medium"
  },
  { 
    src: rf, 
    alt: "rage-fighter", 
    name: "Rage Fighter",
    description: "Martial artist with devastating combos",
    type: "Physical",
    difficulty: "Medium"
  },
  { 
    src: gl, 
    alt: "grow-lancer", 
    name: "Grow Lancer",
    description: "Spear master with tactical skills",
    type: "Physical",
    difficulty: "Hard"
  },
  { 
    src: rw, 
    alt: "rune-wizard", 
    name: "Rune Wizard",
    description: "Ancient magic and rune power",
    type: "Magical",
    difficulty: "Hard"
  },
  { 
    src: sl, 
    alt: "slayer", 
    name: "Slayer",
    description: "Swift assassin with deadly precision",
    type: "Physical",
    difficulty: "Medium"
  },
  { 
    src: gc, 
    alt: "gun-crusher", 
    name: "Gun Crusher",
    description: "Ranged fighter with magical guns",
    type: "Magical",
    difficulty: "Hard"
  },
  { 
    src: ww, 
    alt: "white-wizard", 
    name: "White Wizard",
    description: "Healer and light magic specialist",
    type: "Magical",
    difficulty: "Medium"
  },
  { 
    src: lm, 
    alt: "mage", 
    name: "Mage",
    description: "Elemental magic and spellcasting",
    type: "Magical",
    difficulty: "Easy"
  },
  { 
    src: ik, 
    alt: "illusion-knight", 
    name: "Illusion Knight",
    description: "Mysterious warrior with illusion magic",
    type: "Hybrid",
    difficulty: "Hard"
  },
];

const typeColors = {
  Physical: "from-red-600 to-red-800",
  Magical: "from-blue-600 to-blue-800", 
  Hybrid: "from-purple-600 to-purple-800"
};

const difficultyColors = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400"
};

export default function Root() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredChar, setHoveredChar] = useState(null);

  const filteredChars = chars.filter(char => 
    selectedFilter === "All" || char.type === selectedFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <h1 className="text-5xl font-bold text-amber-300 mb-4 drop-shadow-lg">
          Character Selection
        </h1>
        <p className="text-xl text-amber-200/80 mb-8">
          Choose your destiny, forge your legend
        </p>
        
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Physical", "Magical", "Hybrid"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                selectedFilter === filter
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Character Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredChars.map((char, index) => (
            <Link 
              key={char.alt} 
              to={`/${char.alt}`}
              className="group"
              onMouseEnter={() => setHoveredChar(char.alt)}
              onMouseLeave={() => setHoveredChar(null)}
            >
              <div className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-700/80 hover:to-gray-800/80 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20">
                
                {/* Character Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={char.src} 
                    alt={char.alt} 
                    className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  
                  {/* Type badge */}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${typeColors[char.type]} shadow-lg`}>
                    {char.type}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Character Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-amber-300 mb-2 group-hover:text-amber-200 transition-colors">
                    {char.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {char.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Difficulty:</span>
                    <span className={`font-semibold ${difficultyColors[char.difficulty]}`}>
                      {char.difficulty}
                    </span>
                  </div>
                </div>

                {/* Selection indicator */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-400/50 transition-all duration-300 pointer-events-none" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-gray-500 text-sm">
          Click on any character to start building your adventure
        </p>
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400/15 rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
}