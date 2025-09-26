// LuckOption.jsx
export const LuckOption = ({ checked, onToggle }) => {
  return (
    <label className="flex items-center space-x-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="rounded border-gray-300"
      />
      <span className="text-yellow-400">Luck</span>
    </label>
  );
};
