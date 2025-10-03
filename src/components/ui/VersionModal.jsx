// components/ui/VersionModal.jsx
import React from 'react';

export default function VersionModal({ onClose }) {
    const currentVersion = '1.0.0';

    const currentRelease = {
        version: '1.0.0',
        date: '2025-10-02',
        changes: [
            'Sistema de builds funcional',
            'Stats distribution con reseteo',
            '3rd Skill Tree rama verde',
            'Guardado local de builds',
        ]
    };

    const upcomingFeatures = {
        version: '1.0.1',
        preview: [
            '3rd Skill Tree rama Azul',
            'Fixed',
            'Configuración avanzada de items (Excellent, Ancient)',
            'Compartir builds con URL'
        ]
    };

    const previousVersions = [
        {
            version: '0.9.0',
            date: '2025-09-15',
            type: 'beta',
            changes: [
                'UI/UX rediseñado',
                'Implementación de árbol de skills',
                'Sistema de stats mejorado'
            ]
        }
    ];
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-purple-600/50 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b border-purple-600/30 bg-gradient-to-r from-purple-900/30 to-purple-800/30">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📋</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-purple-300">Versiones</h2>
                            <p className="text-sm text-gray-400">Historial de cambios</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-colors"
                    >
                        <span className="text-red-400 text-xl font-bold">×</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)] space-y-6">

                    {/* Current Release */}
                    <div>
                        <h3 className="text-base font-bold text-green-400 mb-3 flex items-center gap-2">
                            ✅ Versión Actual
                        </h3>
                        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg p-4 border border-green-600/40">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xl font-bold text-green-300">
                                    v{currentRelease.version}
                                </h4>
                                <span className="text-gray-400 text-xs">
                                    {new Date(currentRelease.date).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {currentRelease.changes.map((change, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-gray-300 text-sm"
                                    >
                                        <span className="text-green-400 mt-0.5">✓</span>
                                        <span>{change}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Previous Versions */}
                    {previousVersions.length > 0 && (
                        <div>
                            <h3 className="text-base font-bold text-purple-400 mb-3 flex items-center gap-2">
                                📜 Versiones Anteriores
                            </h3>
                            <div className="space-y-3">
                                {previousVersions.map((version, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-base font-semibold text-purple-300">
                                                v{version.version}
                                            </h4>
                                            <span className="text-gray-400 text-xs">
                                                {new Date(version.date).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'short'
                                                })}
                                            </span>
                                        </div>

                                        <ul className="space-y-1.5">
                                            {version.changes.map((change, changeIdx) => (
                                                <li
                                                    key={changeIdx}
                                                    className="flex items-start gap-2 text-gray-400 text-sm"
                                                >
                                                    <span className="text-purple-400 mt-0.5">•</span>
                                                    <span>{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer info */}
                    <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-700/30 text-center">
                        <p className="text-gray-400 text-xs">
                            Desarrollado por Chelo para la comunidad de MU Online
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-purple-600/30 bg-gray-800/50 flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}