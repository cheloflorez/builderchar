
export const SKILLS_DATABASE = {
    // ========================================
    // 🌿 GREEN TREE SKILLS
    // ========================================
    DefenseRatePVP: {
        id: 1,
        name: 'PvP Defense Rate Increase',
        maxLevel: 20,
        requires: [], // Sin requisitos específicos
        rowRequirements: { minRow: 0, minLevel: 0 }, // Fila 0, sin requisitos
        image: '/src/assets/3rd/green/DefenseRatePVP.png',
        description: 'Incrementa el PVP defense rate del personaje.',
        valueType: 'DefenseRatePVP',
        values: [0, 614, 1029, 1415, 1774, 2106, 2413, 2695, 2954, 3190, 3405, 3600, 3775, 3931, 4070, 4193, 4301, 4394, 4474, 4541, 4598]
    },
    DurabilityReduction: {
        id: 2,
        name: 'Durability Reduction (1)',
        maxLevel: 20,
        requires: [],
        rowRequirements: { minRow: 0, minLevel: 0 }, // Fila 0, sin requisitos
        image: '/src/assets/3rd/green/DurabilityReduction.png',
        description: 'La velocidad de reducción de durabilidad de las armas y armaduras equipadas disminuye en un %',
        valueType: 'DurabilityReduction',
        values: [0, 18.06, 30.27, 41.64, 52.19, 61.97, 70.99, 79.29, 86.90, 93.85, 100.17, 105.89, 111.03, 115.64, 119.73, 123.34, 126.50, 129.24, 131.59, 133.58, 135.24]
    },
    MaximumSDIncrease: {
        id: 6,
        name: 'Maximum SD Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 1, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/MaximumSDIncrease.png',
        description: 'Incrementa el SD máximo del personaje.',
        valueType: 'MaximumSDIncrease',
        values: [0, 511, 857, 1179, 1478, 1755, 2011, 2246, 2462, 2659, 2838, 3000, 3145, 3276, 3392, 3494, 3584, 3661, 3728, 3784, 3831]
    },
};

// ========================================
// 🛠️ FUNCIONES DE VALIDACIÓN DE REQUISITOS
// ========================================

// Función para verificar requisitos de fila
export const checkRowRequirements = (skill, skillLevels, skills) => {
    // Si no tiene requisitos de fila, está desbloqueado
    if (!skill.rowRequirements || skill.rowRequirements.minRow === 0) {
        return { canUnlock: true, message: '' };
    }

    const { minRow, minLevel } = skill.rowRequirements;
    const targetRow = minRow - 1; // La fila anterior a la requerida

    // Buscar todos los skills en la fila objetivo
    const skillsInTargetRow = skills.filter(s => s.row === targetRow);
    
    // Verificar si hay al menos un skill con el nivel requerido en esa fila
    const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
        const currentLevel = skillLevels[s.id] || 0;
        return currentLevel >= minLevel;
    });

    if (!hasRequiredSkillInRow) {
        return {
            canUnlock: false,
            message: `Necesitas al menos 1 skill +${minLevel} en la fila ${targetRow + 1}`
        };
    }

    return { canUnlock: true, message: '' };
};

// Función para verificar requisitos específicos de skills
export const checkSpecificRequirements = (skill, skillLevels) => {
    if (!skill.requires || skill.requires.length === 0) {
        return { canUnlock: true, message: '' };
    }

    for (const requirement of skill.requires) {
        const currentLevel = skillLevels[requirement.skillId] || 0;
        if (currentLevel < requirement.requiredLevel) {
            const requiredSkill = Object.values(SKILLS_DATABASE).find(s => s.id === requirement.skillId);
            return {
                canUnlock: false,
                message: `Necesitas ${requiredSkill?.name || 'Skill desconocido'} +${requirement.requiredLevel}`
            };
        }
    }

    return { canUnlock: true, message: '' };
};

// Función principal para verificar si un skill puede ser desbloqueado
export const canUnlockSkill = (skill, skillLevels, skills) => {
    // 1. Verificar requisitos de fila
    const rowCheck = checkRowRequirements(skill, skillLevels, skills);
    if (!rowCheck.canUnlock) {
        return rowCheck;
    }

    // 2. Verificar requisitos específicos
    const specificCheck = checkSpecificRequirements(skill, skillLevels);
    if (!specificCheck.canUnlock) {
        return specificCheck;
    }

    return { canUnlock: true, message: 'Puede ser desbloqueado' };
};

// Función simple para obtener el valor según el nivel
export const getSkillValue = (skill, level) => {
    if (level < 0 || level > skill.maxLevel) return 0;
    return skill.values[level] || 0;
};

// ========================================
// 🗂️ CONFIGURACIÓN DE SKILLS POR PERSONAJE
// ========================================
export const getSkillRowInfo = (skill) => {
    return {
        hasRowRequirement: skill.rowRequirements && skill.rowRequirements.minRow > 0,
        requiredRow: skill.rowRequirements?.minRow || 0,
        requiredLevel: skill.rowRequirements?.minLevel || 0
    };
};