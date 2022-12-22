export const assignElement = (type, damage, index) => {
  switch (type) {
    case "blast":
      return (
        <div key={index}>
          <img
            className="e-icon"
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670235/Mhw/Blastblight_mylbi3.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "poison":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670261/Mhw/Poison_uzyxp9.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "dragon":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670287/Mhw/download_mizgia.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "thunder":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670303/Mhw/download_n2sfop.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "ice":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670330/Mhw/download_njoqfy.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "sleep":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670355/Mhw/download_ifvf9n.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "fire":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670543/Mhw/download_q7vvae.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "water":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670557/Mhw/download_ibmjx7.png"
          />
          <>{damage}</>
        </div>
      );
      break;
    case "paralysis":
      return (
        <div key={index}>
          <img
            className="e-icon"
            key={index}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670574/Mhw/download_b61mup.png"
          />
          <>{damage}</>
        </div>
      );

      break;
  }
};

export const assignSharpness = (
  red,
  orange,
  yellow,
  green,
  blue,
  white,
  purple,
  index
) => {
  return (
    <div className="sharpness-bar" key={`durability-${index}`}>
      <div
        className="red"
        style={{
          width: `${Math.floor((red / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="orange"
        style={{
          width: `${Math.floor((orange / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="yellow"
        style={{
          width: `${Math.floor((yellow / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="green"
        style={{
          width: `${Math.floor((green / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="blue"
        style={{
          width: `${Math.floor((blue / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="white"
        style={{
          width: `${Math.floor((white / 400) * 100)}px`,
        }}
      ></div>
      <div
        className="purple"
        style={{
          width: `${Math.floor((purple / 400) * 100)}px`,
        }}
      ></div>
      <div className="clearfix"></div>
    </div>
  );
};

export const assignSlots = (rank, index) => {
  switch (rank) {
    case 1:
      return (
        <img
          key={`slot-${index}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664648/Mhw/gem_level_1_aaolcn.png"
        />
      );
      break;
    case 2:
      return (
        <img
          key={`slot-${index}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664781/Mhw/gem_level_2_waqkwk.png"
        />
      );
      break;
    case 3:
      return (
        <img
          key={`slot-${index}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664734/Mhw/gem_level_3_zgidct.png"
        />
      );
      break;
  }
};
