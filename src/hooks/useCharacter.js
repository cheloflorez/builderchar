// hooks/useCharacter.js
import { useSnapshot } from 'valtio';
import { charSelectedStore } from '../store/charSelected.js';
import { charactersStore } from '../store/characters.js';

// Hook para el personaje seleccionado
export const useSelectedCharacter = () => {
  const snap = useSnapshot(charSelectedStore);
  
  return {
    character: snap.selectedCharacter,
    addChar: charSelectedStore.addChar,
    addItem: charSelectedStore.addItem,
    selectLevel: charSelectedStore.selectLevel,
    increaseStats: charSelectedStore.increaseStats,
    decreaseStats: charSelectedStore.decreaseStats,
    update3rdTreeSkill: charSelectedStore.update3rdTreeSkill,
    updateStatsBar: charSelectedStore.updateStatsBar 
  };
};

// Hook para obtener un personaje específico
export const useCharacter = (charKey) => {
  const snap = useSnapshot(charactersStore);
  return snap.characters[charKey];
};

// Hook para todos los personajes
export const useCharacters = () => {
  const snap = useSnapshot(charactersStore);
  return snap.characters;
};