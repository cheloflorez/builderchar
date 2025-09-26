// SpecialOptions.jsx
import { LuckOption } from "./LuckOption";
import { LifeOption } from "./LifeOption";

export const SpecialOptions = ({
  selectedItem,
  itemConfiguration,
  setItemConfiguration,
}) => {
  if (!selectedItem?.canHaveJewelOfLife) return null;

  const handleSpecialOptionToggle = (option) => {
    setItemConfiguration((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };
  

  return (
    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
      <h4 className="text-sm font-medium text-cyan-400 mb-3">
        Special Options
      </h4>

      <div className="space-y-3">
        <div className="flex gap-6">
          <label className="flex items-center space-x-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={itemConfiguration.hasJewelOfLife}
              onChange={() => handleSpecialOptionToggle("hasJewelOfLife")}
              className="rounded border-gray-300"
            />
            <span className="text-cyan-400">Jewel of Life</span>
          </label>

          <LuckOption
            checked={itemConfiguration.hasLuck || false}
            onToggle={() => handleSpecialOptionToggle("hasLuck")}
          />
        </div>

        {itemConfiguration.hasJewelOfLife && (
          <LifeOption
            config={itemConfiguration}
            setConfig={setItemConfiguration}
          />
        )}
      </div>
    </div>
  );
};
