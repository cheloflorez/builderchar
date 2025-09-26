// LifeOption.jsx
export const LifeOption = ({ config, setConfig }) => {
  const handleTypeChange = (type) => {
    setConfig((prev) => ({
      ...prev,
      lifeType: type,
      lifeLevel: 1,
      lifeValue: type === "defense" ? 4 : 1,
    }));
  };

  const handleLevelChange = (level, value) => {
    setConfig((prev) => ({
      ...prev,
      lifeLevel: level,
      lifeValue: value,
    }));
  };

  const levels =
    config.lifeType === "defense"
      ? [
          { level: 1, display: "+4", value: 4 },
          { level: 2, display: "+8", value: 8 },
          { level: 3, display: "+12", value: 12 },
          { level: 4, display: "+16", value: 16 },
        ]
      : [
          { level: 1, display: "1%", value: 1 },
          { level: 2, display: "2%", value: 2 },
          { level: 3, display: "3%", value: 3 },
          { level: 4, display: "4%", value: 4 },
        ];

  return (
    <div className="p-3 bg-gray-900/30 rounded border-l-4 border-cyan-400">
      <div className="space-y-2">
        {/* Type */}
        <div>
          <p className="text-xs text-cyan-300 mb-1">Type:</p>
          <div className="flex gap-4">
            <label className="flex items-center space-x-1 text-xs cursor-pointer">
              <input
                type="radio"
                name="lifeType"
                value="defense"
                checked={config.lifeType === "defense"}
                onChange={() => handleTypeChange("defense")}
                className="w-3 h-3"
              />
              <span className="text-gray-300">Defense</span>
            </label>
            <label className="flex items-center space-x-1 text-xs cursor-pointer">
              <input
                type="radio"
                name="lifeType"
                value="recovery"
                checked={config.lifeType === "recovery"}
                onChange={() => handleTypeChange("recovery")}
                className="w-3 h-3"
              />
              <span className="text-gray-300">Recovery</span>
            </label>
          </div>
        </div>

        {/* Levels */}
        {config.lifeType && (
          <div>
            <p className="text-xs text-cyan-300 mb-1">Level:</p>
            <div className="grid grid-cols-4 gap-2">
              {levels.map((option) => (
                <label
                  key={option.level}
                  className="flex items-center space-x-1 text-xs cursor-pointer"
                >
                  <input
                    type="radio"
                    name="lifeLevel"
                    value={option.level}
                    checked={config.lifeLevel === option.level}
                    onChange={() =>
                      handleLevelChange(option.level, option.value)
                    }
                    className="w-3 h-3"
                  />
                  <span className="text-gray-300">{option.display}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
