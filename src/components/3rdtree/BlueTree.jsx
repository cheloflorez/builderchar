import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { skillConfigs, getSkillData, canIncreaseSkill, isSkillLocked } from './skillConfigs.js';
import SkillSlot from './SkillSlot';
import { useSelectedCharacter } from '../../hooks/useCharacter';

// ========================================
// 🌿 BLUE TREE COMPONENT - CON REQUISITOS DE FILA
// ========================================
const BlueTree = ({ character, remainingPoints, onPointsChange, spentPoints }) => {
    const [skillLevels, setSkillLevels] = useState({});
    const { update3rdTreeSkill } = useSelectedCharacter();

    // ✅ MEMOIZAR SKILLS para evitar recalculos constantes
    const skills = useMemo(() => {
        if (!character?.class?.[0]) return [];
        const skillPositions = skillConfigs[character.class[0]]?.blue || [];
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
                                accentColor="blue"
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
                backgroundImage: 'url(/3rd/Tree4002.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '300px',
                height: '600px',
                minWidth: '300px',
                minHeight: '600px',
            }}
        >
            {/* Overlay de "Coming Soon" */}
            <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center p-6 bg-gray-800/80 border border-blue-500/50 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl mb-3">🔒</div>
                    <h3 className="text-blue-300 font-bold text-lg mb-2">Blue Skills</h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        Advanced blue skill tree<br />
                        with defensive abilities
                    </p>
                    <div className="px-3 py-1 bg-blue-600/20 border border-blue-600/50 rounded-full">
                        <span className="text-blue-300 text-xs font-medium">Proximamente</span>
                    </div>

                    {/* Efecto de construcción */}
                    <div className="flex justify-center mt-3 space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            </div>

            {/* Contenido original del árbol (opacidad reducida) */}
            <div className="relative z-10 flex flex-col h-full opacity-30">
                {/* ... resto del contenido original */}
            </div>
        </div>
    );
};

export default BlueTree;