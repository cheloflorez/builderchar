// components/ui/HelpModal.jsx
import React from 'react';

export default function HelpModal({ onClose }) {
  const shortcuts = [
    { key: 'A', description: 'Abrir árbol de habilidades (3rd Tree)' },
    { key: 'I', description: 'Abrir inventario' },
    { key: 'ESC', description: 'Cerrar modales' },
  ];

  const sections = [
    {
      title: '🎯 Stats',
      content: 'Distribuye tus puntos de estadísticas según tu build. Cada nivel otorga puntos para gastar en Strength, Agility, Stamina, Energy y Command.'
    },
    {
      title: '🌳 Skill Tree',
      content: 'Presiona "A" para abrir el árbol de habilidades. Cada clase tiene skills únicas. Requiere nivel específico para desbloquear.'
    },
    {
      title: '⚔️ Equipment',
      content: 'Click en cualquier slot del inventario para equipar items. Los items mejoran tus stats y habilidades.'
    },
    {
      title: '💾 Guardar Build',
      content: 'Usa el botón "Save" en el header para guardar tu progreso. El build se guarda localmente en tu navegador.'
    },
    {
      title: '🔄 Reset',
      content: 'El botón "Reset" restaura el personaje a su estado inicial. Útil para probar diferentes builds.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-blue-600/50 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-blue-600/30 bg-gradient-to-r from-blue-900/30 to-blue-800/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center">
              <span className="text-2xl">❓</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-300">Ayuda</h2>
              <p className="text-sm text-gray-400">Guía de uso del Build Creator</p>
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
          
          {/* Shortcuts */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              ⌨️ Atajos de Teclado
            </h3>
            <div className="space-y-2">
              {shortcuts.map((shortcut, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <kbd className="px-3 py-1.5 bg-gray-900 border border-gray-600 rounded text-amber-300 font-bold text-sm min-w-[60px] text-center">
                    {shortcut.key}
                  </kbd>
                  <span className="text-gray-300 text-sm">{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <h3 className="text-base font-bold text-amber-300 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Tips adicionales */}
          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg p-4 border border-amber-600/30">
            <h3 className="text-base font-bold text-amber-300 mb-2 flex items-center gap-2">
              💡 Tips
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span className="text-amber-400">•</span>
                <span>Los builds se guardan automáticamente en tu navegador</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">•</span>
                <span>Puedes crear múltiples builds para el mismo personaje</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">•</span>
                <span>Los puntos de stats se pueden redistribuir con Reset</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-blue-600/30 bg-gray-800/50 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}