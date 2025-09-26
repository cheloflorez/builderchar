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
  { key: "illusionKnight", name: "Illusion Knight", img: "illusion-knight" }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-600/50 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-amber-600/30">
          <h2 className="text-3xl font-bold text-amber-300">Create New Build</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-colors"
          >
            <span className="text-red-400 text-2xl">×</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Build Name */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Build Name
            </label>
            <input
              type="text"
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              placeholder="Enter build name..."
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none text-lg"
              maxLength={50}
            />
          </div>

          {/* Character Selection */}
          <div>
            <label className="block text-amber-300 font-semibold mb-3">
              Select Character
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-96 overflow-y-auto p-2 bg-gray-800/50 rounded-lg border border-gray-600">
              {chars.map((char) => (
                <button
                  key={char.key}
                  type="button"
                  onClick={() => setSelectedChar(char.key)}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                    selectedChar === char.key
                      ? 'border-amber-500 bg-amber-500/20 shadow-lg'
                      : 'border-gray-600 bg-gray-700/60 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={`/src/assets/characters/${char.img}.png`}
                    alt={char.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain mb-2"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <p className="text-sm md:text-base text-white font-medium text-center">
                    {char.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-900/20 border border-red-600/50 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 border border-gray-600 rounded-lg transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-amber-600/80 hover:bg-amber-600 text-white border border-amber-600 rounded-lg transition-colors font-semibold"
            >
              Create Build
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
