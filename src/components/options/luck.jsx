import { useEffect, useState } from "react";

export default function Luck({ item, setItem, value, resetOptions }) {
  const [activeLuck, setActiveLuck] = useState(false);

  const handleCheckbox = () => {
    setActiveLuck(!activeLuck);
    if (item.criticalDamageRate) {
      const { criticalDamageRate, ...rest } = item;
      setItem(rest);
    } else {
      setItem({ ...item, criticalDamageRate: 5 });
    }
  };

  useEffect(() => {
    setActiveLuck(false);
  }, [resetOptions]);

  return (
    <>
      {value.Luck && (
        <div>
          <label htmlFor="luck" className="mr-3">
            Add Luck:
          </label>
          <input type="checkbox" checked={activeLuck} onChange={handleCheckbox} name="luck" />
        </div>
      )}
    </>
  );
}
