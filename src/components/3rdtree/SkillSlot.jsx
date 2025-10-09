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
    allSkills,
    readOnly = false  // <-- Agregar esta línea

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

        if (readOnly) return; // <-- Agregar este check

        const isRightClick = event.button === 2;
        const isShiftPressed = event.shiftKey;
        const amount = isShiftPressed ? 10 : 1;

        if (isRightClick) {
            onLevelChange && onLevelChange(safeSkill.id, false, amount);
        } else {
            onLevelChange && onLevelChange(safeSkill.id, true, amount);
        }
    };

    return (
        <div
            className={`
        relative rounded transition-all overflow-visible group
        ${readOnly
                    ? 'cursor-not-allowed opacity-70'
                    : 'cursor-pointer hover:scale-105 hover:shadow-lg hover:z-30'
                }
        ${isLocked ? '' : ''}
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
                    className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${isLocked ? 'text-gray-600' : 'text-white'
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

            {/* Tooltip con posicionamiento calculado dinámicamente */}
            <div
                className="fixed opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[9999] pointer-events-none"
                style={{
                    left: '50%',
                    top: safeSkill.row > 4 ? 'auto' : '100%',
                    bottom: safeSkill.row > 4 ? '100%' : 'auto',
                    transform: 'translateX(-50%)',
                    marginTop: safeSkill.row > 4 ? '0' : '8px',
                    marginBottom: safeSkill.row > 4 ? '8px' : '0'
                }}
            >
                <div className="bg-gray-900/98 backdrop-blur-md border border-amber-500/60 rounded-lg p-4 text-sm w-[360px] shadow-2xl">
                    {/* Header del skill */}
                    <div className="border-b border-amber-500/40 pb-2 mb-3">
                        <div className="font-bold text-amber-200 text-base flex items-center gap-2">
                            {safeSkill.image && (
                                <img
                                    src={safeSkill.image}
                                    alt={safeSkill.name}
                                    className="w-6 h-6 object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            )}
                            {safeSkill.name}
                        </div>
                        <div className="text-gray-300 text-xs mt-1">
                            Nivel {safeLevel}/{safeSkill.maxLevel}
                            {isLocked && <span className="ml-2 text-red-400">🔒 Bloqueado</span>}
                            {readOnly && <span className="ml-2 text-purple-400">👁️ Solo lectura</span>}
                        </div>
                    </div>


                    {/* Descripción principal */}
                    {safeSkill.description && (
                        <div className="text-gray-100 text-sm mb-3 leading-relaxed">
                            {safeSkill.description}
                        </div>
                    )}

                    {/* Valores actuales */}
                    {safeLevel > 0 && !isLocked && (
                        <div className="mb-3 p-3 bg-green-800/40 border border-green-500/50 rounded">
                            <div className="text-green-200 font-semibold text-xs mb-1">Valor Actual:</div>
                            <div className="text-green-100 text-sm font-bold">
                                {currentValue}{safeSkill.valueType.includes('Rate') ? '%' : ''}
                            </div>
                        </div>
                    )}

                    {/* Próximo nivel */}
                    {safeLevel < safeSkill.maxLevel && !isLocked && (
                        <div className="mb-3 p-3 bg-blue-800/40 border border-blue-500/50 rounded">
                            <div className="text-blue-200 font-semibold text-xs mb-1">Próximo Nivel ({safeLevel + 1}):</div>
                            <div className="text-blue-100 text-sm font-bold">
                                {nextValue}{safeSkill.valueType.includes('Rate') ? '%' : ''}
                                {currentValue > 0 && (
                                    <span className="text-blue-50 ml-2 font-normal">
                                        (+{(nextValue - currentValue).toFixed(1)}{safeSkill.valueType.includes('Rate') ? '%' : ''})
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Requisitos */}
                    <div className="border-t border-gray-600/60 pt-3">
                        <div className="text-cyan-200 font-semibold mb-2 text-sm">Requisitos:</div>

                        {/* Estado de requisitos */}
                        {requirementMessages.length > 0 ? (
                            <div className="p-2 bg-red-800/50 border border-red-500/60 rounded mb-2">
                                <div className="text-red-100 text-xs font-semibold mb-1">Bloqueado:</div>
                                {requirementMessages.map((message, index) => (
                                    <div key={index} className="text-red-50 text-xs">
                                        • {message}
                                    </div>
                                ))}
                            </div>
                        ) : safeLevel === 0 ? (
                            <div className="p-2 bg-green-800/50 border border-green-500/60 rounded mb-2">
                                <div className="text-green-100 text-xs font-semibold">✓ Disponible para desbloquear</div>
                            </div>
                        ) : null}

                        {!readOnly && (
                            <div className="border-t border-gray-600/50 pt-2 mt-2">
                                <div className="text-gray-100 text-xs">
                                    <div className="font-medium mb-1">Controles:</div>
                                    <div>🖱️ Click Izq: +1 • Click Der: -1</div>
                                    <div>⇧ Shift + Click: +10/-10</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSlot;