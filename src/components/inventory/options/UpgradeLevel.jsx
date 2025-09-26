// UpgradeLevel.jsx
import React from "react";

export const UpgradeLevel = ({ selectedItem, itemConfiguration, setItemConfiguration }) => {
  if (!selectedItem) return null;

  const handleUpgradeChange = (level) => {
    const maxUpgrade = selectedItem?.maxUpgrade || 15;
    const upgradeLevel = Math.max(0, Math.min(level, maxUpgrade));
    setItemConfiguration((prev) => ({ ...prev, upgradeLevel }));
  };

  return (
    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
      <label className="block text-sm font-medium text-amber-300 mb-2">
        Upgrade Level: +{itemConfiguration.upgradeLevel}
      </label>

      <input
        type="range"
        min="0"
        max={selectedItem.maxUpgrade || 15}
        value={itemConfiguration.upgradeLevel}
        onChange={(e) => handleUpgradeChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />

      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>+0</span>
        <span>+{selectedItem.maxUpgrade || 15}</span>
      </div>
    </div>
  );
};
