import { useState } from "react";

export default function Ancients({ item, setItem }) {
  const [checkbox, setCheckbox] = useState({
    0: false,
    1: false,
    2: true,
  });

  const handleCheckbox = (index, name) => {
    let ancient;
    setCheckbox((prevCheckbox) => ({
      ...prevCheckbox,
      [index]: true,
    }));
    if (index === 0) {
      setCheckbox({ [index]: true, 1: false, 2: false });
      ancient = true;
    }
    if (index === 1) {
      setCheckbox({ [index]: true, 0: false, 2: false });
      ancient = true;
    }
    if (index === 2) setCheckbox({ [index]: true, 0: false, 1: false });
    setItem((prevItem) => ({ ...prevItem, optionType: name, activeAncient: ancient }));
  };

  return (
    <div className="flex">
      <div className="p-2">
        <label>
          Excellent:
          <input
            type="checkbox"
            checked={checkbox[2]}
            onChange={() => handleCheckbox(2, "excellentOptions")}
            name="excellentOptions"
          />
        </label>
      </div>
      {item.ancient.map((value, index) => {
        return (
          <div className="p-2" key={value}>
            <label>
              {value}:
              <input
                type="checkbox"
                checked={checkbox[index]}
                onChange={() => handleCheckbox(index, value)}
                name={value}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
