export default function Ancient({ item, optionsWings }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <li>
          <span className="text-amber-400">Set Item Equipment Information</span>
        </li>
        <li>
          <span className="text-green-400">{item.optionType} Set</span>
        </li>
        {optionsWings?.partsAncient?.map((value) => {
          return (
            <li key={value}>
              <span className={`${value == item.type && "text-green-400"}`}>
                {item.optionType} {item.name} {value}
              </span>
            </li>
          );
        })}
      </div>
      <div className="col-span-2">
        <li>
          <span className="text-amber-400">Set Item option info</span>
        </li>
        {optionsWings?.optionsAdvanced?.map((opt, index) => {
          const { name } = opt;
          if (optionsWings?.effectAncient) {
            return (
              <div key={index}>
                {index === optionsWings?.effectAncient[index] ? (
                  <>
                    <li>
                      <span className="text-green-400">{optionsWings.partsEffect[index]} Parts Effect</span>
                    </li>
                  </>
                ) : null}
                <li key={index}>
                  <span className="text-gray-600">
                    {optionsWings.optionsInDOM[0][index]} {optionsWings.optionsAdvanced[index][name]}
                    {opt.rate}
                  </span>
                </li>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
