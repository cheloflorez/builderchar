import { SpecialOptions } from "../options/SpecialOptions";
import { EnhancementSystem } from "../options/EnhancementSystem";
import { UpgradeLevel } from "../options/UpgradeLevel";

export default function ArmorModal({
    selectedItem,
    itemConfiguration,
    setItemConfiguration,
    character
}) {
    console.log('⚔️ ARMOR MODAL - Item Config:', itemConfiguration);

    const renderItemStats = () => {
        if (!selectedItem) return [];
        const stats = [];

        Object.keys(selectedItem.upgradeValues || {}).forEach(statKey => {
            const upgradeArray = selectedItem.upgradeValues[statKey];
            const value = upgradeArray[itemConfiguration.upgradeLevel] || upgradeArray[0];

            if (statKey === 'defense') {
                stats.push(['Defense', value]);
            }
        });

        if (selectedItem.level) {
            stats.push(['Required Level', selectedItem.level]);
        }

        if (selectedItem.durability) {
            stats.push(['Durability', selectedItem.durability]);
        }

        return stats;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* PANEL IZQUIERDO - OPCIONES */}
            <div className="space-y-4 lg:col-span-3">

                {/* Upgrade Level */}
                <UpgradeLevel
                    selectedItem={selectedItem}
                    itemConfiguration={itemConfiguration}
                    setItemConfiguration={setItemConfiguration}
                />

                {/* Enhancement System */}
                <EnhancementSystem
                    selectedItem={selectedItem}
                    itemConfiguration={itemConfiguration}
                    setItemConfiguration={setItemConfiguration}
                />

                {/* Special Options */}
                <SpecialOptions
                    selectedItem={selectedItem}
                    itemConfiguration={itemConfiguration}
                    setItemConfiguration={setItemConfiguration}
                />

            </div>

            {/* PANEL DERECHO - PREVIEW */}
            <div className="space-y-4 lg:col-span-2">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-600 text-center">
                    <img
                        src={selectedItem.url}
                        alt={selectedItem.name}
                        className="w-16 h-16 mx-auto object-contain mb-2"
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>

                <div className="p-3 bg-black/80 rounded-lg border border-amber-600/50 font-mono text-xs">
                    <div className="text-center">
                        <div className="text-green-400 font-bold mb-2">
                            {itemConfiguration.hasMastery && "Mastery "}
                            {itemConfiguration.activeExcellentOptions.length > 0 && "Excellent "}
                            {itemConfiguration.activeAncientSet && "Ancient "}
                            {selectedItem.name}
                            {itemConfiguration.upgradeLevel > 0 && ` +${itemConfiguration.upgradeLevel}`}
                        </div>

                        <div className="text-white text-center space-y-1 mb-2">
                            {renderItemStats().map(([label, value], index) => (
                                <div key={index}>
                                    {label}: {value}
                                </div>
                            ))}
                        </div>

                        <div className="text-yellow-300 text-xs space-y-1">
                            {itemConfiguration.hasJewelOfLife && itemConfiguration.lifeType && (
                                <div>
                                    {itemConfiguration.lifeType === 'defense'
                                        ? `Additional Defense +${itemConfiguration.lifeValue}`
                                        : `Life Recovery +${itemConfiguration.lifeValue}%`
                                    }
                                </div>
                            )}

                            {itemConfiguration.hasLuck && (
                                <div>Luck (success rate of Jewel of Soul +25%)</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}