export default function PositionImage({ itemsSelected }) {
  const { items } = itemsSelected[0];
  return (
    <div className="relative">
      {items?.map((value, index) => {
        switch (value.type) {
          case "wings":
            return (
              <div key={index} className="absolute -right-10 top-5 scale-90">
                <img src={value.url} alt={value.name} />
              </div>
            );
          case "Helm":
            return (
              <div key={index} className="absolute left-[50px] top-[26px] scale-90">
                <img src={value.url} alt={value.name} />
              </div>
            );
          case "Armor":
            return (
              <div key={index} className="absolute left-[54px] top-[100px] scale-75">
                <img src={value.url} alt={value.name} />
              </div>
            );
          case "Gloves":
            return (
              <div key={index} className="absolute -left-[58px] top-[174px] scale-75">
                <img src={value.url} alt={value.name} />
              </div>
            );
          case "Pants":
            return (
              <div key={index} className="absolute left-[54px] top-[174px] scale-75">
                <img src={value.url} alt={value.name} />
              </div>
            );
          case "Boots":
            return (
              <div key={index} className="absolute -right-[58px] top-[174px] scale-75">
                <img src={value.url} alt={value.name} />
              </div>
            );
        }
      })}
    </div>
  );
}
