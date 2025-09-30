import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { skillConfigs, getSkillData, canIncreaseSkill, isSkillLocked } from './skillConfigs.js';
import SkillSlot from './SkillSlot';
import { useSelectedCharacter } from '../../hooks/useCharacter';

// ========================================
// 🌿 RED TREE COMPONENT - CON REQUISITOS DE FILA
// ========================================
const RedTree = ({ character, remainingPoints, onPointsChange, spentPoints }) => {
    const [skillLevels, setSkillLevels] = useState({});
    const { update3rdTreeSkill } = useSelectedCharacter();

    // ✅ MEMOIZAR SKILLS para evitar recalculos constantes
    const skills = useMemo(() => {
        if (!character?.class?.[0]) return [];
        const skillPositions = skillConfigs[character.class[0]]?.red || [];
        return skillPositions.map(pos => getSkillData(pos.skillId, pos.row, pos.col)).filter(skill => skill.name);
    }, [character?.class?.[0]]);

    // ✅ INICIALIZAR skillLevels SOLO cuando sea necesario
    useEffect(() => {
        if (character && character['3rdTree'] && skills.length > 0) {
            const initialSkillLevels = {};

            // Reconstruir el estado local desde los datos guardados
            skills.forEach(skill => {
                const savedSkill = character['3rdTree'].find(saved => saved.id === skill.id);
                if (savedSkill) {
                    // Encontrar qué nivel corresponde al valor guardado
                    const levelIndex = skill.values.findIndex(value => value === savedSkill.value);
                    initialSkillLevels[skill.id] = levelIndex > 0 ? levelIndex : 0;
                } else {
                    initialSkillLevels[skill.id] = 0;
                }
            });

            // ✅ SOLO actualizar si es diferente para evitar loops
            setSkillLevels(prevLevels => {
                const hasChanged = Object.keys(initialSkillLevels).some(skillId =>
                    prevLevels[skillId] !== initialSkillLevels[skillId]
                );

                if (hasChanged) {
                    return initialSkillLevels;
                }
                return prevLevels;
            });
        }
    }, [character?.id, skills.length]);

    // ✅ CALCULAR puntos gastados SOLO cuando skillLevels cambie
    useEffect(() => {
        if (Object.keys(skillLevels).length > 0) {
            const totalPoints = Object.values(skillLevels).reduce((sum, level) => sum + level, 0);
            onPointsChange(totalPoints);
        }
    }, [skillLevels, onPointsChange]);

    // ✅ MEMOIZAR funciones de validación
    const canIncreaseSkillMemo = useCallback((skill) => {
        return canIncreaseSkill(skill, skillLevels, skills) && remainingPoints > 0;
    }, [skillLevels, skills, remainingPoints]);

    const isSkillLockedMemo = useCallback((skill) => {
        return isSkillLocked(skill, skillLevels, skills);
    }, [skillLevels, skills]);

    const handleSkillClick = useCallback((skillId, isIncrease, amount = 1) => {
        const currentLevel = skillLevels[skillId] || 0;
        const skill = skills.find(s => s.id === skillId);

        if (!skill) return;

        let newLevel = currentLevel;

        if (isIncrease && remainingPoints > 0) {
            // Usar la función de validación mejorada
            if (canIncreaseSkill(skill, skillLevels, skills)) {
                const maxPossibleIncrease = Math.min(
                    amount,
                    skill.maxLevel - currentLevel,
                    remainingPoints
                );
                newLevel = currentLevel + maxPossibleIncrease;
            }
        } else if (!isIncrease && currentLevel > 0) {
            // Verificar skills dependientes antes de reducir
            const dependentSkills = skills.filter(s =>
                s.requires && s.requires.some(req => req.skillId === skillId)
            );

            // También verificar si hay skills en filas posteriores que dependen de este nivel
            const skillsInLaterRows = skills.filter(s => s.row > skill.row);
            const hasRowDependencies = skillsInLaterRows.some(s => {
                const depLevel = skillLevels[s.id] || 0;
                if (depLevel === 0) return false; // No hay dependencia si no tiene niveles

                // Si el skill dependiente requiere un nivel mínimo en esta fila
                if (s.rowRequirements && s.rowRequirements.minRow === skill.row + 1) {
                    // Verificar si este skill es el único que cumple el requisito de fila
                    const skillsInThisRow = skills.filter(sk => sk.row === skill.row);
                    const otherSkillsMeetRequirement = skillsInThisRow.some(sk => {
                        if (sk.id === skillId) return false; // Excluir el skill actual
                        const otherLevel = skillLevels[sk.id] || 0;
                        return otherLevel >= s.rowRequirements.minLevel;
                    });

                    if (!otherSkillsMeetRequirement && currentLevel <= s.rowRequirements.minLevel) {
                        return true; // No se puede reducir porque rompería requisitos de fila
                    }
                }
                return false;
            });

            // Calcular el nivel mínimo requerido por dependencias específicas
            let minRequiredLevel = 0;
            dependentSkills.forEach(depSkill => {
                const depCurrentLevel = skillLevels[depSkill.id] || 0;
                if (depCurrentLevel > 0) {
                    const requirement = depSkill.requires.find(req => req.skillId === skillId);
                    if (requirement) {
                        minRequiredLevel = Math.max(minRequiredLevel, requirement.requiredLevel);
                    }
                }
            });

            // También considerar requisitos de fila para calcular el nivel mínimo
            if (hasRowDependencies) {
                skillsInLaterRows.forEach(laterSkill => {
                    const laterLevel = skillLevels[laterSkill.id] || 0;
                    if (laterLevel > 0 && laterSkill.rowRequirements && laterSkill.rowRequirements.minRow === skill.row + 1) {
                        const skillsInThisRow = skills.filter(sk => sk.row === skill.row);
                        const otherSkillsMaxLevel = Math.max(...skillsInThisRow
                            .filter(sk => sk.id !== skillId)
                            .map(sk => skillLevels[sk.id] || 0));

                        if (otherSkillsMaxLevel < laterSkill.rowRequirements.minLevel) {
                            minRequiredLevel = Math.max(minRequiredLevel, laterSkill.rowRequirements.minLevel);
                        }
                    }
                });
            }

            const maxPossibleDecrease = Math.min(amount, currentLevel - minRequiredLevel);

            if (maxPossibleDecrease > 0) {
                newLevel = currentLevel - maxPossibleDecrease;
            }
        }

        if (newLevel !== currentLevel) {
            // ✅ ACTUALIZAR estado local primero
            setSkillLevels(prev => ({
                ...prev,
                [skillId]: newLevel
            }));

            // ✅ ACTUALIZAR Valtio store
            update3rdTreeSkill({
                skillId,
                level: newLevel,
                valueType: skill.valueType,
                values: skill.values
            });
        }
    }, [skillLevels, skills, remainingPoints, update3rdTreeSkill]);

    // ✅ MEMOIZAR el grid para evitar renders innecesarios
    const skillGrid = useMemo(() => {
        const grid = [];

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 4; col++) {
                const skill = skills.find(s => s.row === row && s.col === col);

                grid.push(
                    <div key={`${row}-${col}`} className="flex items-center justify-center p-1">
                        {skill && (
                            <SkillSlot
                                skill={skill}
                                level={skillLevels[skill.id] || 0}
                                onLevelChange={handleSkillClick}
                                canIncrease={canIncreaseSkillMemo(skill)}
                                isLocked={isSkillLockedMemo(skill)}
                                accentColor="red"
                                allSkillLevels={skillLevels}
                                allSkills={skills}
                            />
                        )}
                    </div>
                );
            }
        }

        return grid;
    }, [skills, skillLevels, canIncreaseSkillMemo, isSkillLockedMemo, handleSkillClick]);

    return (
        <div
            className="p-2 flex flex-col relative overflow-visible"
            style={{
                backgroundImage: 'url(/3rd/Tree4003.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '300px',
                height: '600px',
                minWidth: '300px',
                minHeight: '600px',
            }}
        >
            {/* Overlay sutil de "Próximamente" */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-600/50">
                    <span className="text-white text-sm font-medium tracking-wide">
                        Próximamente
                    </span>
                </div>
            </div>

            {/* Contenido del árbol - con z-index para estar encima del background */}
            <div className="relative z-10 flex flex-col h-full opacity-60">
                {/* Header del árbol */}
                <div className="text-center mb-2 flex-shrink-0">
                    <div className="text-xs text-gray-200 drop-shadow">Puntos: {spentPoints}</div>
                </div>

                {/* Grid de skills - ocupa el espacio restante */}
                <div className="grid grid-cols-4 grid-rows-9 gap-2 flex-1 min-h-0">
                    {skillGrid}
                </div>
            </div>
        </div>
    );
};

export default RedTree;