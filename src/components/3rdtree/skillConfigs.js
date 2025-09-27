// skillConfigs.js - CONFIGURACIÓN CON SISTEMA DE FILAS MEJORADO
import { SKILLS_DATABASE } from './skills.js';

export const skillConfigs = {
  'Dark Wizard': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],

  },
  'Dark Knight': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],

  },
  'Fairy Elf': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],

  },
  'Magic Gladiator': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],

  },
  'Slayer': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],

  },
};

// Función helper para obtener skill completo con posición
export const getSkillData = (skillId, row, col) => {
  const skillData = SKILLS_DATABASE[skillId];
  if (!skillData) {
    return {
      id: skillId,
      name: `Unknown Skill (${skillId})`,
      row,
      col,
      maxLevel: 20,
      requires: [],
      rowRequirements: { minRow: 0, minLevel: 0 },
      image: '/src/assets/3rd/new_Master_Icon_01.png',
      description: 'Skill no encontrado',
      valueType: 'Unknown',
      values: Array(21).fill(0)
    };
  }

  return {
    ...skillData,
    row,
    col
  };
};

// Verificar si un skill puede ser aumentado (incluyendo requisitos de fila)
export const canIncreaseSkill = (skill, skillLevels, allSkills) => {
  // Si ya está en nivel 0, verificar si puede ser desbloqueado
  const currentLevel = skillLevels[skill.id] || 0;

  if (currentLevel === 0) {
    // Verificar requisitos de fila
    if (skill.rowRequirements && skill.rowRequirements.minRow > 0) {
      const { minRow, minLevel } = skill.rowRequirements;
      const targetRow = minRow - 1;

      // Buscar skills en la fila anterior
      const skillsInTargetRow = allSkills.filter(s => s.row === targetRow);
      const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
        const level = skillLevels[s.id] || 0;
        return level >= minLevel;
      });

      if (!hasRequiredSkillInRow) {
        return false;
      }
    }
  }

  // Verificar requisitos específicos de skills
  if (skill.requires && skill.requires.length > 0) {
    return skill.requires.every(req => {
      const requiredSkillLevel = skillLevels[req.skillId] || 0;
      return requiredSkillLevel >= req.requiredLevel;
    });
  }

  return true;
};

// Verificar si un skill está bloqueado
export const isSkillLocked = (skill, skillLevels, allSkills) => {
  const currentLevel = skillLevels[skill.id] || 0;

  // Si ya tiene nivel > 0, no está bloqueado
  if (currentLevel > 0) return false;

  // Si no puede ser aumentado desde nivel 0, está bloqueado
  return !canIncreaseSkill(skill, skillLevels, allSkills);
};

// Obtener mensaje de requisitos para el tooltip
export const getRequirementMessage = (skill, skillLevels, allSkills) => {
  const messages = [];

  // Verificar requisitos de fila
  if (skill.rowRequirements && skill.rowRequirements.minRow > 0) {
    const { minRow, minLevel } = skill.rowRequirements;
    const targetRow = minRow - 1;

    const skillsInTargetRow = allSkills.filter(s => s.row === targetRow);
    const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
      const level = skillLevels[s.id] || 0;
      return level >= minLevel;
    });

    if (!hasRequiredSkillInRow) {
      messages.push(`Requiere 1 skill +${minLevel} en fila ${targetRow + 1}`);
    }
  }

  // Verificar requisitos específicos
  if (skill.requires && skill.requires.length > 0) {
    skill.requires.forEach(req => {
      const currentLevel = skillLevels[req.skillId] || 0;
      if (currentLevel < req.requiredLevel) {
        const requiredSkill = Object.values(SKILLS_DATABASE).find(s => s.id === req.skillId);
        messages.push(`Requiere ${requiredSkill?.name || 'Skill'} +${req.requiredLevel}`);
      }
    });
  }

  return messages;
};