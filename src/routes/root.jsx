import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateBuildModal from "../components/modal/CreateBuildModal";

export default function Root() {
  const [builds, setBuilds] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Cargar builds del localStorage al montar
  useEffect(() => {
    const savedBuilds = localStorage.getItem('mubuilds');
    if (savedBuilds) {
      setBuilds(JSON.parse(savedBuilds));
    }
  }, []);

  const handleCreateBuild = (buildData) => {
    const newBuild = {
      id: Date.now().toString(),
      name: buildData.name,
      character: buildData.character,
      class: buildData.characterData.class[0],
      level: 1,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    const updatedBuilds = [...builds, newBuild];
    setBuilds(updatedBuilds);
    localStorage.setItem('mubuilds', JSON.stringify(updatedBuilds));
    setShowCreateModal(false);
  };

  const handleDeleteBuild = (buildId) => {
    const updatedBuilds = builds.filter(build => build.id !== buildId);
    setBuilds(updatedBuilds);
    localStorage.setItem('mubuilds', JSON.stringify(updatedBuilds));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>

      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <h1 className="text-5xl font-bold text-amber-300 mb-4 drop-shadow-lg">
          MU Character Builds
        </h1>
        <p className="text-xl text-amber-200/80 mb-8">
          Manage your character builds
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12">

        {/* Create Build Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowCreateModal(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">⚔️</span>
              <span>Create New Build</span>
            </span>
            <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
        </div>

        {/* Builds Grid mejorado */}
        {builds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {builds.map((build) => (
              <div
                key={build.id}
                className="relative group bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 overflow-hidden"
              >

                {/* Background pattern sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.05),transparent_50%)]"></div>

                {/* Contenido principal */}
                <div className="relative z-10 p-4">

                  {/* Header con imagen y nombre */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative">
                      <img
                        src={`/characters/${build.character}.png`}
                        alt={build.class}
                        className="w-25 h-25 object-cover rounded-lg border-2 border-amber-500/50 bg-gray-800/50 p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-amber-300 font-bold text-lg truncate group-hover:text-amber-200 transition-colors">
                        {build.name}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-300 font-bold text-lg truncate group-hover:text-amber-200 transition-colors text-center">
                      {build.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium text-center">{build.class}</p>
                  </div>
                  {/* Stats info */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Created:</span>
                      <span className="text-gray-300">{new Date(build.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Modified:</span>
                      <span className="text-gray-300">{new Date(build.lastModified).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Barra de progreso del level (opcional) */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Level Progress</span>
                      <span className="text-amber-400">{build.level}/1500</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((build.level / 1500) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/build/${build.id}`}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-center text-sm shadow-lg hover:shadow-green-500/20"
                    >
                      Continue Build
                    </Link>
                    <button
                      onClick={() => handleDeleteBuild(build.id)}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm shadow-lg hover:shadow-red-500/20"
                      title="Delete build"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State mejorado */
          <div className="text-center py-20">
            <div className="relative mb-6">
              <div className="text-8xl opacity-30 filter drop-shadow-lg">⚔️</div>
              <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-xl"></div>
            </div>
            <h3 className="text-3xl text-gray-400 mb-3 font-bold">No builds yet</h3>
            <p className="text-gray-500 text-lg mb-6">Create your first character build to start your MU journey</p>
            <div className="text-sm text-amber-400/60">
              Click "Create New Build" above to get started
            </div>
          </div>
        )}
      </div>

      {/* Create Build Modal */}
      {showCreateModal && (
        <CreateBuildModal
          onClose={() => setShowCreateModal(false)}
          onCreateBuild={handleCreateBuild}
        />
      )}
    </div>
  );
}