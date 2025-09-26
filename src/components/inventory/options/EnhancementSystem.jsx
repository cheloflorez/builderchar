// EnhancementSystem.jsx
import React from "react";
import { EXCELLENT_OPTIONS } from "../../../database/excellentOptions";
import { ANCIENT_SETS } from "../../../database/ancientSets";

export const EnhancementSystem = ({
    selectedItem,
    itemConfiguration,
    setItemConfiguration,
}) => {
    if (!selectedItem) return null;

    const handleEnhancementChange = (type, value) => {
        switch (type) {
            case "ancient":
                setItemConfiguration((prev) => ({
                    ...prev,
                    enhancementMode: "ancient",
                    activeAncientSet: value === "" ? null : value,
                    activeExcellentOptions: [], // limpiar
                    hasMastery: false,
                    master: null, // limpiar
                }));
                break;

            case "excellent": {
                const currentExc = itemConfiguration.activeExcellentOptions;
                const maxOptions = selectedItem?.maxExcellentOptions || 6;

                let newExcellentOptions;
                if (currentExc.includes(value)) {
                    newExcellentOptions = currentExc.filter((id) => id !== value);
                } else if (currentExc.length < maxOptions) {
                    newExcellentOptions = [...currentExc, value];
                } else {
                    return;
                }

                setItemConfiguration((prev) => ({
                    ...prev,
                    enhancementMode:
                        newExcellentOptions.length > 0 ? "excellent" : null,
                    activeExcellentOptions: newExcellentOptions,
                    activeAncientSet: null,
                    hasMastery: false,
                    master: null, // limpiar
                }));
                break;
            }

            case "mastery":
                setItemConfiguration((prev) => {
                    if (prev.hasMastery) {
                        // 🔹 Si ya estaba activo, limpiar
                        return {
                            ...prev,
                            enhancementMode: null,
                            hasMastery: false,
                            master: null,
                            activeAncientSet: null,
                            activeExcellentOptions: [],
                        };
                    } else {
                        // 🔹 Si lo activamos, guardar masteryName del item
                        return {
                            ...prev,
                            enhancementMode: "mastery",
                            hasMastery: true,
                            master: selectedItem.masteryName || null,
                            activeAncientSet: null,
                            activeExcellentOptions: [],
                        };
                    }
                });
                break;
        }
    };


    // Determinar qué tabs mostrar dinámicamente
    const availableTabs = [];
    if (selectedItem.ancientSets?.length > 0) availableTabs.push("ancient");
    if (selectedItem.excellentOptions?.length > 0) availableTabs.push("excellent");
    if (selectedItem.hasMastery) availableTabs.push("mastery");

    if (availableTabs.length === 0) {
        return (
            <div className="p-3 bg-gray-900/20 rounded text-center">
                <p className="text-gray-400 text-xs">
                    No enhancement options available for this item
                </p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
            <h4 className="text-sm font-medium text-purple-400 mb-3">
                Item Enhancement
            </h4>

            {/* Tabs */}
            <div className="flex bg-gray-700 rounded-lg p-1 mb-4">
                {availableTabs.includes("ancient") && (
                    <button
                        onClick={() => handleEnhancementChange("ancient", "")}
                        className={`${availableTabs.length === 1 ? "w-full" : "flex-1"
                            } py-2 text-xs rounded transition-colors ${itemConfiguration.enhancementMode === "ancient" ||
                                itemConfiguration.activeAncientSet
                                ? "bg-orange-600 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Ancient
                    </button>
                )}

                {availableTabs.includes("excellent") && (
                    <button
                        onClick={() => handleEnhancementChange("excellent", "")}
                        className={`${availableTabs.length === 1 ? "w-full" : "flex-1"
                            } py-2 text-xs rounded transition-colors ${itemConfiguration.enhancementMode === "excellent" ||
                                itemConfiguration.activeExcellentOptions.length > 0
                                ? "bg-purple-600 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Excellent
                    </button>
                )}

                {availableTabs.includes("mastery") && (
                    <button
                        onClick={() => handleEnhancementChange("mastery")}
                        className={`${availableTabs.length === 1 ? "w-full" : "flex-1"
                            } py-2 text-xs rounded transition-colors ${itemConfiguration.enhancementMode === "mastery" &&
                                itemConfiguration.hasMastery
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Mastery
                    </button>
                )}
            </div>

            {/* Contenido: Ancient */}
            {(itemConfiguration.enhancementMode === "ancient" ||
                itemConfiguration.activeAncientSet) &&
                selectedItem.ancientSets?.length > 0 &&
                !itemConfiguration.hasMastery &&
                itemConfiguration.activeExcellentOptions.length === 0 && (
                    <div>
                        <p className="text-xs text-orange-300 mb-2">Select Ancient Set:</p>
                        <select
                            value={itemConfiguration.activeAncientSet || ""}
                            onChange={(e) =>
                                handleEnhancementChange("ancient", e.target.value)
                            }
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        >
                            <option value="">No Ancient Set</option>
                            {selectedItem.ancientSets?.map((setName) => {
                                const setData = ANCIENT_SETS[setName];
                                return (
                                    <option key={setName} value={setName}>
                                        {setData?.name || setName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )}

            {/* Contenido: Excellent */}
            {(itemConfiguration.enhancementMode === "excellent" ||
                itemConfiguration.activeExcellentOptions.length > 0) &&
                selectedItem.excellentOptions?.length > 0 &&
                !itemConfiguration.hasMastery &&
                !itemConfiguration.activeAncientSet && (
                    <div className="space-y-2">
                        <p className="text-xs text-purple-300">
                            Select up to {selectedItem.maxExcellentOptions || 6} options (
                            {itemConfiguration.activeExcellentOptions.length}/
                            {selectedItem.maxExcellentOptions || 6}):
                        </p>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                            {selectedItem.excellentOptions?.map((optionId) => {
                                const option = EXCELLENT_OPTIONS[optionId];
                                if (!option) return null;

                                return (
                                    <label
                                        key={optionId}
                                        className="flex items-center space-x-2 text-xs cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={itemConfiguration.activeExcellentOptions.includes(
                                                optionId
                                            )}
                                            onChange={() =>
                                                handleEnhancementChange("excellent", optionId)
                                            }
                                            className="rounded border-gray-300 w-3 h-3"
                                        />
                                        <span className="text-gray-300">{option.name}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                )}

            {/* Contenido: Mastery */}
            {itemConfiguration.enhancementMode === "mastery" &&
                itemConfiguration.hasMastery && (
                    <div className="p-3 bg-blue-900/30 rounded border border-blue-600">
                        <p className="text-xs text-blue-300">
                            Mastery system active (placeholder content).
                        </p>
                    </div>
                )}
        </div>
    );
};
