// components/3rdtree/Main3rd.jsx - LOOP INFINITO SOLUCIONADO
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import GreenTree from './GreenTree';
import BlueTree from './BlueTree';
import RedTree from './RedTree';
import { classChar } from '../../utils/characterUtils';

// ========================================
// 🎮 MAIN 3RD SKILL TREE COMPONENT - SIN LOOP INFINITO
// ========================================
const Main3rd = ({ isOpen, onClose, character , readOnly = false}) => {
  const [availablePoints, setAvailablePoints] = useState(0);
  const [spentPoints, setSpentPoints] = useState({ green: 0, blue: 0, red: 0 });

  // ✅ MEMOIZAR el character.id para evitar cambios constantes
  const characterId = character?.id;
  const characterLevel = character?.level;

  const currentClass = classChar(character);

  // ✅ Manejar tecla ESC para cerrar el modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // ✅ CALCULAR puntos disponibles SOLO cuando cambie el nivel o character.id
  useEffect(() => {
    if (characterLevel && characterLevel >= 400) {
      const points = Math.min(characterLevel - 399, 400);
      setAvailablePoints(points);
    } else {
      setAvailablePoints(0);
    }
  }, [characterLevel, characterId]); // ✅ Dependencias específicas

  // ✅ INICIALIZAR puntos gastados SOLO una vez por personaje
  useEffect(() => {
    if (character?.['3rdTree'] && characterId) {
      const initialSpentPoints = { green: 0, blue: 0, red: 0 };

      // Calcular puntos gastados desde los datos guardados
      character['3rdTree'].forEach(skill => {
        // Aquí necesitarías determinar a qué árbol pertenece cada skill
        // Por ahora, sumamos todo al green como ejemplo
        const levelFromValue = skill.level || 0;

        // TODO: Determinar el árbol correcto basado en el skillId
        // Por simplicidad, distribuimos equitativamente por ahora
        if (skill.id <= 100) {
          initialSpentPoints.green += levelFromValue;
        } else if (skill.id <= 200) {
          initialSpentPoints.blue += levelFromValue;
        } else {
          initialSpentPoints.red += levelFromValue;
        }
      });

      // ✅ SOLO actualizar si los puntos son diferentes
      setSpentPoints(prevPoints => {
        const hasChanged =
          prevPoints.green !== initialSpentPoints.green ||
          prevPoints.blue !== initialSpentPoints.blue ||
          prevPoints.red !== initialSpentPoints.red;

        if (hasChanged) {
          return initialSpentPoints;
        }
        return prevPoints;
      });
    }
  }, [characterId]); // ✅ Solo cuando cambia el personaje

  // ✅ CALCULAR puntos restantes de forma memoizada
  const totalSpentPoints = useMemo(() => {
    return spentPoints.green + spentPoints.blue + spentPoints.red;
  }, [spentPoints.green, spentPoints.blue, spentPoints.red]);

  const remainingPoints = useMemo(() => {
    return availablePoints - totalSpentPoints;
  }, [availablePoints, totalSpentPoints]);

  // ✅ MEMOIZAR handlers para evitar recreaciones
  const handlePointsChange = useCallback((tree, newPoints) => {
    setSpentPoints(prev => {
      // ✅ SOLO actualizar si es diferente
      if (prev[tree] !== newPoints) {
        return {
          ...prev,
          [tree]: newPoints
        };
      }
      return prev;
    });
  }, []);

  // ✅ MEMOIZAR las props para evitar re-renders innecesarios de los árboles
  const treeProps = useMemo(() => ({
    character,
    remainingPoints
  }), [character, remainingPoints]);

  if (!isOpen || !character) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative z-0 flex flex-col h-full"> // Cambiar z-10 por z-0
        {/* Header del modal con background de imagen */}
        <div
          className="relative p-3 text-center"
          style={{
            backgroundImage: 'url(/3rd/TreeHeader.png)', // Tu imagen del header
            backgroundSize: '100% 100%', // Ajusta exactamente al contenedor sin distorsión
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '900px', // Ancho fijo que coincida con los 3 árboles (300px cada uno)
            height: '60px', // Altura específica - ajustar según tu imagen real
            minHeight: 'auto'
          }}
        >
          {/* Contenido del header */}
          <div className="pl-6  relative z-10 h-full flex items-center justify-between">
            <div className="text-left">
              <p className="text-amber-200 text-xs drop-shadow">Master Level Skills - {currentClass}</p>
            </div>

            {/* Información central de puntos */}
            <div className="text-amber-300 text-sm font-bold drop-shadow-lg">
              Points Remaining: {remainingPoints} - Level required: 400
            </div>

            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-colors mr-4"
            >
              <span className="text-red-400 text-sm">×</span>
            </button>
          </div>
        </div>

        {/* Container de los 3 árboles sin padding extra */}
        <div className="bg-gradient-to-b from-gray-900 to-black" style={{ width: 'fit-content' }}>
          <div className="flex items-start">
            {/* Árbol Verde */}
            <GreenTree
              {...treeProps}
              onPointsChange={(points) => handlePointsChange('green', points)}
              spentPoints={spentPoints.green}
              readOnly={readOnly}
            />

            {/* Árbol Azul */}
            <BlueTree
              {...treeProps}
              onPointsChange={(points) => handlePointsChange('blue', points)}
              spentPoints={spentPoints.blue}
              readOnly={readOnly}
            />

            {/* Árbol Rojo */}
            <RedTree
              {...treeProps}
              onPointsChange={(points) => handlePointsChange('red', points)}
              spentPoints={spentPoints.red}
              readOnly={readOnly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3rd;