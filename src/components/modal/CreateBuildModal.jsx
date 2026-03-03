import { useState } from "react";
import { useCharacters } from "../../hooks/useCharacter";

const chars = [
  { key: "darkWizard", name: "Dark Wizard", img: "dark-wizard" },
  { key: "darkKnight", name: "Dark Knight", img: "dark-knight" },
  { key: "elf", name: "Fairy Elf", img: "elf" },
  { key: "magicGladiator", name: "Magic Gladiator", img: "magic-gladiator" },
  { key: "darkLord", name: "Dark Lord", img: "dark-lord" },
  { key: "summoner", name: "Summoner", img: "summoner" },
  { key: "rageFighter", name: "Rage Fighter", img: "rage-fighter" },
  { key: "growLancer", name: "Grow Lancer", img: "grow-lancer" },
  { key: "runeWizard", name: "Rune Wizard", img: "rune-wizard" },
  { key: "slayer", name: "Slayer", img: "slayer" },
  { key: "gunCrusher", name: "Gun Crusher", img: "gun-crusher" },
  { key: "whiteWizard", name: "White Wizard", img: "white-wizard" },
  { key: "mage", name: "Mage", img: "mage" },
  { key: "illusionKnight", name: "Illusion Knight", img: "illusion-knight" },
  { key: "alchemist", name: "Alchemist", img: "alchemist" },
];

export default function CreateBuildModal({ onClose, onCreateBuild }) {
  const [buildName, setBuildName] = useState("");
  const [selectedChar, setSelectedChar] = useState("");
  const [error, setError] = useState("");
  const characters = useCharacters();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buildName.trim()) {
      setError("Build name is required");
      return;
    }

    if (!selectedChar) {
      setError("Please select a character");
      return;
    }

    onCreateBuild({
      name: buildName.trim(),
      character: chars.find(c => c.key === selectedChar).img,
      characterData: characters[selectedChar]
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.3)]">

        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-white/10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Create New Build
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 flex items-center justify-center transition-all"
          >
            <span className="text-red-400 text-xl">×</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">

          {/* Build Name */}
          <div>
            <label className="block text-sm uppercase tracking-wider text-slate-400 mb-3">
              Build Name
            </label>

            <input
              type="text"
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              placeholder="Enter build name..."
              maxLength={50}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                         focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 
                         outline-none transition-all"
            />
          </div>

          {/* Character Selection */}
          <div>
            <label className="block text-sm uppercase tracking-wider text-slate-400 mb-4">
              Select Character
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-h-96 overflow-y-auto pr-2">

              {chars.map((char) => (
                <button
                  key={char.key}
                  type="button"
                  onClick={() => setSelectedChar(char.key)}
                  className={`group relative rounded-2xl p-4 transition-all duration-300 border backdrop-blur-md
                    ${selectedChar === char.key
                      ? "bg-white/10 border-purple-400/50 shadow-[0_0_30px_rgba(139,92,246,0.4)] scale-105"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105"
                    }`}
                >

                  {/* Glow */}
                  {selectedChar === char.key && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-md"></div>
                  )}

                  <div className="relative flex flex-col items-center">

                    <div className="relative w-20 h-20 mb-3">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-md opacity-30 group-hover:opacity-60 transition"></div>

                      <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/10">
                        <img
                          src={`/characters/thumbs/${char.img}.webp`}
                          alt={char.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-white font-medium text-center">
                      {char.name}
                    </p>

                  </div>
                </button>
              ))}

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 
                         text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)]
                         hover:scale-105 transition-all duration-300"
            >
              Create Build
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}