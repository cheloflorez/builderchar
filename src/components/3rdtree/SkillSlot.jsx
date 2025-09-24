import React from 'react';

// Función local para obtener el valor del skill
const getSkillValue = (skill, level) => {
    if (level < 0 || level > skill.maxLevel) return 0;
    return skill.values[level] || 0;
};

// Función local para obtener mensajes de requisitos
const getRequirementMessage = (skill, skillLevels, allSkills) => {
    // Validar que skill existe y tiene las propiedades necesarias
    if (!skill || !skillLevels || !allSkills) return [];
    
    const messages = [];
    
    // Verificar requisitos de fila
    if (skill.rowRequirements && skill.rowRequirements.minRow > 0) {
        const { minRow, minLevel } = skill.rowRequirements;
        const targetRow = minRow - 1;
        
        const skillsInTargetRow = allSkills.filter(s => s && s.row === targetRow);
        const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
            const level = skillLevels[s.id] || 0;
            return level >= minLevel;
        });
        
        if (!hasRequiredSkillInRow) {
            messages.push(`Requiere 1 skill +${minLevel} en fila ${targetRow + 1}`);
        }
    }
    
    // Verificar requisitos específicos
    if (skill.requires && Array.isArray(skill.requires) && skill.requires.length > 0) {
        skill.requires.forEach(req => {
            if (req && req.skillId && req.requiredLevel) {
                const currentLevel = skillLevels[req.skillId] || 0;
                if (currentLevel < req.requiredLevel) {
                    const requiredSkill = allSkills.find(s => s && s.id === req.skillId);
                    messages.push(`Requiere ${requiredSkill?.name || 'Skill'} +${req.requiredLevel}`);
                }
            }
        });
    }
    
    return messages;
};

const SkillSlot = ({
    skill,
    level,
    onLevelChange,
    canIncrease,
    isLocked,
    accentColor,
    allSkillLevels,
    allSkills
}) => {
    // Validación inicial - si no hay skill, retornar null
    if (!skill) {
        return null;
    }

    // Valores por defecto para evitar errores
    const safeSkill = {
        id: skill.id || 0,
        name: skill.name || 'Unknown Skill',
        maxLevel: skill.maxLevel || 20,
        description: skill.description || 'No description available',
        valueType: skill.valueType || 'Unknown',
        values: skill.values || Array(21).fill(0),
        requires: skill.requires || [],
        rowRequirements: skill.rowRequirements || { minRow: 0, minLevel: 0 },
        image: skill.image || null,
        row: skill.row || 0,
        col: skill.col || 0
    };

    const safeLevel = level || 0;
    const safeAllSkillLevels = allSkillLevels || {};
    const safeAllSkills = allSkills || [];
    const safeAccentColor = accentColor || 'gray';
    // Obtener información de requisitos para el tooltip
    const requirementMessages = getRequirementMessage(safeSkill, safeAllSkillLevels, safeAllSkills);
    const currentValue = getSkillValue(safeSkill, safeLevel);
    const nextValue = safeLevel < safeSkill.maxLevel ? getSkillValue(safeSkill, safeLevel + 1) : currentValue;

    // Manejar clicks con diferentes combinaciones
    const handleClick = (event) => {
        event.preventDefault();

        const isRightClick = event.button === 2;
        const isShiftPressed = event.shiftKey;
        const amount = isShiftPressed ? 10 : 1;

        if (isRightClick) {
            // Click derecho = bajar
            onLevelChange && onLevelChange(safeSkill.id, false, amount);
        } else {
            // Click izquierdo = subir
            onLevelChange && onLevelChange(safeSkill.id, true, amount);
        }
    };

    // Determinar el color del borde según el estado del skill
    const getBorderColor = () => {
        if (isLocked) return 'border-gray-600/50';
        if (safeLevel > 0) return `border-${safeAccentColor}-400/70`;
        return `border-${safeAccentColor}-600/30`;
    };

    // Determinar el color de fondo
    const getBackgroundColor = () => {
        if (isLocked) return 'bg-gray-800/50';
        if (safeLevel > 0) return `bg-${safeAccentColor}-900/30`;
        return 'bg-gray-800/50';
    };

    return (
        <div
            className={`
                relative rounded cursor-pointer transition-all overflow-visible group
                hover:scale-105 hover:shadow-lg hover:z-30
                ${isLocked ? 'opacity-50' : ''}
            `}
            onClick={handleClick}
            onContextMenu={handleClick}
            style={{
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px'
            }}
        >
            {/* Contenedor principal del skill */}
            <div className={`
                w-full h-full flex items-center justify-center relative
                ${isLocked ? 'grayscale' : ''}
                hover:brightness-110 transition-all duration-200
            `}>
                {/* Imagen del skill */}
                {safeSkill.image ? (
                    <img
                        src={safeSkill.image}
                        alt={safeSkill.name}
                        className="w-11 h-11 object-contain rounded"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                ) : null}

                {/* Fallback text si no hay imagen */}
                <div
                    className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${
                        isLocked ? 'text-gray-600' : 'text-white'
                    }`}
                    style={{ display: safeSkill.image ? 'none' : 'flex' }}
                >
                    {safeSkill.name.charAt(0)}
                </div>
            </div>

            {/* Lock indicator mejorado */}
            {isLocked && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center shadow-lg border border-gray-900">
                    <span className="text-white text-xs">🔒</span>
                </div>
            )}

            {/* Level indicator mejorado */}
            {safeLevel > 0 && (
                <div className={`absolute -bottom-1 -right-4 w-5 h-5 bg-${safeAccentColor}-600 flex items-center justify-center text-xs font-bold text-white border-gray-900`}>
                    {safeLevel}
                </div>
            )}

            {/* Tooltip mejorado con requisitos de fila */}
            <div className={`absolute opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none ${
                safeSkill.row > 6
                    ? (safeAccentColor === 'red' ? 'right-full bottom-0 mr-2' : 'left-full bottom-0 ml-2')
                    : (safeAccentColor === 'red' ? 'right-full top-0 mr-2' : 'left-full top-0 ml-2')
            }`}>
                <div className="bg-black/95 border border-amber-600/50 rounded-lg p-4 text-sm min-w-[320px] shadow-2xl">
                    {/* Header del skill */}
                    <div className="border-b border-amber-600/30 pb-2 mb-3">
                        <div className="font-bold text-amber-300 text-base">{safeSkill.name}</div>
                        <div className="text-gray-400 text-xs">
                            Nivel {safeLevel}/{safeSkill.maxLevel}
                        </div>
                    </div>

                    {/* Descripción principal */}
                    {safeSkill.description && (
                        <div className="text-white text-sm mb-3 leading-relaxed">
                            {safeSkill.description}
                        </div>
                    )}

                    {/* Valores actuales */}
                    {safeLevel > 0 && (
                        <div className="mb-3 p-2 bg-green-900/20 border border-green-600/30 rounded">
                            <div className="text-green-400 font-semibold text-xs mb-1">Valor Actual:</div>
                            <div className="text-green-300 text-sm">
                                {currentValue} %
                            </div>
                        </div>
                    )}

                    {/* Próximo nivel */}
                    {safeLevel < safeSkill.maxLevel && !isLocked && (
                        <div className="mb-3 p-2 bg-blue-900/20 border border-blue-600/30 rounded">
                            <div className="text-blue-400 font-semibold text-xs mb-1">Próximo Nivel ({safeLevel + 1}):</div>
                            <div className="text-blue-300 text-sm">
                                {nextValue} %
                                {currentValue > 0 && (
                                    <span className="text-blue-200 ml-2">
                                        (+{(nextValue - currentValue).toFixed(1)} %)
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Sección de requisitos */}
                    <div className="border-t border-gray-600/50 pt-3">
                        <div className="text-blue-400 font-semibold mb-2">Requisitos:</div>
                        <div className="text-gray-300 text-xs mb-2">Costo por nivel: 1 punto</div>

                        {/* Requisitos de fila */}
                        {safeSkill.rowRequirements && safeSkill.rowRequirements.minRow > 0 && (
                            <div className="mb-2 p-2 bg-yellow-900/20 border border-yellow-600/30 rounded">
                                <div className="text-yellow-400 text-xs font-semibold mb-1">Requisito de Fila:</div>
                                <div className="text-yellow-300 text-xs">
                                    Necesitas 1 skill +{safeSkill.rowRequirements.minLevel} en la fila {safeSkill.rowRequirements.minRow}
                                </div>
                            </div>
                        )}

                        {/* Requisitos específicos de skills */}
                        {safeSkill.requires && safeSkill.requires.length > 0 && (
                            <div className="mb-2">
                                <div className="text-purple-400 text-xs font-semibold mb-1">Requisitos de Skills:</div>
                                {safeSkill.requires.map((req, index) => {
                                    const requiredSkill = safeAllSkills.find(s => s && s.id === req.skillId);
                                    const currentReqLevel = safeAllSkillLevels[req.skillId] || 0;
                                    const isMet = currentReqLevel >= req.requiredLevel;
                                    
                                    return (
                                        <div key={index} className={`text-xs p-1 rounded ${
                                            isMet ? 'text-green-400 bg-green-900/10' : 'text-red-400 bg-red-900/10'
                                        }`}>
                                            {requiredSkill?.name || 'Skill Desconocido'} +{req.requiredLevel}
                                            <span className="ml-1">
                                                ({currentReqLevel}/{req.requiredLevel}) {isMet ? '✓' : '✗'}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Estado de requisitos */}
                        {requirementMessages.length > 0 ? (
                            <div className="p-2 bg-red-900/20 border border-red-600/30 rounded">
                                <div className="text-red-400 text-xs font-semibold mb-1">Requisitos no cumplidos:</div>
                                {requirementMessages.map((message, index) => (
                                    <div key={index} className="text-red-300 text-xs">
                                        • {message}
                                    </div>
                                ))}
                            </div>
                        ) : safeLevel === 0 ? (
                            <div className="p-2 bg-green-900/20 border border-green-600/30 rounded">
                                <div className="text-green-400 text-xs">✓ Puede ser desbloqueado</div>
                            </div>
                        ) : null}

                        {/* Información de skills dependientes */}
                        {safeLevel > 0 && (() => {
                            const dependentSkills = safeAllSkills.filter(s => 
                                s && s.requires && s.requires.some(req => req.skillId === safeSkill.id)
                            );
                            
                            if (dependentSkills.length > 0) {
                                return (
                                    <div className="mt-2 p-2 bg-indigo-900/20 border border-indigo-600/30 rounded">
                                        <div className="text-indigo-400 text-xs font-semibold mb-1">Desbloquea:</div>
                                        {dependentSkills.map((depSkill, index) => (
                                            <div key={index} className="text-indigo-300 text-xs">
                                                • {depSkill.name}
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })()}
                    </div>

                    {/* Controles de interacción */}
                    <div className="border-t border-gray-600/50 pt-2 mt-2">
                        <div className="text-gray-400 text-xs">
                            <div>🖱️ Click Izq: +1 • Click Der: -1</div>
                            <div>⇧ Shift + Click: +10/-10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSlot;