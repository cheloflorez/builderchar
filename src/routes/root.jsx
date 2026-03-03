import { useState, useEffect,useMemo  } from "react";
import { Link } from "react-router-dom";
import CreateBuildModal from "../components/modal/CreateBuildModal";
import { recommendedBuilds } from "../data/recommendedBuilds";

export default function Root() {
  const [builds, setBuilds] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState("myBuilds");
  const [characterFilter, setCharacterFilter] = useState("all");

  useEffect(() => {
    const savedBuilds = localStorage.getItem("mubuilds");
    if (savedBuilds) setBuilds(JSON.parse(savedBuilds));
  }, []);

  const handleCreateBuild = (buildData) => {
    const newBuild = {
      id: Date.now().toString(),
      name: buildData.name,
      character: buildData.character,
      class: buildData.characterData.class[0],
      level: 1,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    };
    const updatedBuilds = [...builds, newBuild];
    setBuilds(updatedBuilds);
    localStorage.setItem("mubuilds", JSON.stringify(updatedBuilds));
    setShowCreateModal(false);
  };

  const handleDeleteBuild = (buildId) => {
    const updatedBuilds = builds.filter((build) => build.id !== buildId);
    setBuilds(updatedBuilds);
    localStorage.setItem("mubuilds", JSON.stringify(updatedBuilds));
  };

  const getFilteredBuilds = (buildArray) => {
    if (characterFilter === "all") return buildArray;
    return buildArray.filter((b) => b.character === characterFilter);
  };

  const characters = [
    { id: "dark-knight", name: "Dark Knight" },
    { id: "dark-wizard", name: "Dark Wizard" },
    { id: "elf", name: "Fairy Elf" },
    { id: "magic-gladiator", name: "Magic Gladiator" },
    { id: "dark-lord", name: "Dark Lord" },
    { id: "summoner", name: "Summoner" },
    { id: "rage-fighter", name: "Rage Fighter" },
    { id: "grow-lancer", name: "Grow Lancer" },
    { id: "slayer", name: "Slayer" },
    { id: "gun-crusher", name: "Gun Crusher" },
    { id: "white-wizard", name: "White Wizard" },
    { id: "rune-wizard", name: "Rune Mage" },
    { id: "mage", name: "Mage" },
    { id: "illusion-knight", name: "Illusion Knight" },
    { id: "alchemist", name: "Alchemist" },
  ];
  const currentBuildSource = useMemo(() => {
    return activeTab === "myBuilds" ? builds : recommendedBuilds;
  }, [activeTab, builds]);

  const getBuildCountByCharacter = (characterId) => {
    if (characterId === "all") return currentBuildSource.length;

    return currentBuildSource.filter(
      (b) => b.character === characterId
    ).length;
  };
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 antialiased overflow-x-hidden relative">

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f19] via-[#0e1424] to-[#06090f]" />
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* HEADER */}
      <header className="relative py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]">
          MU BUILDER
        </h1>
        <p className="mt-6 text-slate-400 uppercase tracking-[0.4em] text-xs">
          Powered By Chelo
        </p>
      </header>

      {/* TABS */}
      <nav className="flex justify-center gap-6 mb-12">
        {[
          { id: "myBuilds", label: "My Builds", count: builds.length },
          { id: "recommended", label: "Meta Builds", count: recommendedBuilds.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-10 py-4 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-md border
              ${activeTab === tab.id
                ? "bg-white/10 border-white/20 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] scale-105"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </nav>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCharacterFilter("all")}
            className={`px-4 py-2 rounded-full text-xs transition-all backdrop-blur-md border
              ${characterFilter === "all"
                ? "bg-cyan-500/20 border-cyan-400/40 text-cyan-300"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
          >
            All Classes ({getBuildCountByCharacter("all")})
          </button>
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setCharacterFilter(char.id)}
              className={`px-4 py-2 rounded-full text-xs transition-all backdrop-blur-md border
                ${characterFilter === char.id
                  ? "bg-purple-500/20 border-purple-400/40 text-purple-300"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                }`}
            >
              {char.name} ({getBuildCountByCharacter(char.id)})
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        {activeTab === "myBuilds" && (
          <>
            <div className="flex justify-center mb-16">
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-300"
              >
                + Create Build
              </button>
            </div>

            {builds.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {getFilteredBuilds(builds).map((build) => (
                  <BuildCard key={build.id} build={build} onDelete={handleDeleteBuild} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </>
        )}

        {activeTab === "recommended" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getFilteredBuilds(recommendedBuilds).map((build) => (
              <BuildCard key={build.id} build={build} isRecommended />
            ))}
          </div>
        )}
      </main>

      {showCreateModal && (
        <CreateBuildModal
          onClose={() => setShowCreateModal(false)}
          onCreateBuild={handleCreateBuild}
        />
      )}
    </div>
  );
}

/* CARD */
function BuildCard({ build, onDelete, isRecommended }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">

      {isRecommended && (
        <div className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40">
          META
        </div>
      )}

      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24 mb-4">

          {/* Glow externo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-md opacity-40 group-hover:opacity-70 transition"></div>

          {/* Marco */}
          <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-purple-500">

            {/* Contenedor real circular */}
            <div className="w-full h-full rounded-full overflow-hidden bg-black/40 backdrop-blur-md flex items-center justify-center">
              <img
                src={`/characters/thumbs/${build.character}.webp`}
                alt={build.class}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        <h3 className="text-lg font-semibold text-white">{build.name}</h3>
        <span className="text-xs text-slate-400 uppercase tracking-wider">
          {build.class}
        </span>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Level</span>
          <span>{build.level} / 1700</span>
        </div>
        <div className="h-2 bg-black/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000"
            style={{ width: `${Math.min((build.level / 1700) * 100, 100)}%` }}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/build/${build.id}`}
          className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition"
        >
          {isRecommended ? "View" : "Continue"}
        </Link>

        {!isRecommended && (
          <button
            onClick={() => onDelete(build.id)}
            className="px-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
          >
            🗑
          </button>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-32 text-slate-500">
      <div className="text-6xl mb-6 opacity-20">⚔</div>
      <h3 className="text-xl font-semibold text-slate-400">
        No Builds Yet
      </h3>
      <p className="mt-3 text-sm text-slate-500">
        Create your first next-gen character build.
      </p>
    </div>
  );
}