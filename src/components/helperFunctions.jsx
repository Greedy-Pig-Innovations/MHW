 export const assignElement = (type, damage, idx, hide) => {

  const hidden = (dmg) => {
    return `(${dmg})`;
}

  switch (type) {
    case "blast":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670235/Mhw/Blastblight_mylbi3.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "poison":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670261/Mhw/Poison_uzyxp9.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "dragon":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670287/Mhw/download_mizgia.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "thunder":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670303/Mhw/download_n2sfop.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "ice":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670330/Mhw/download_njoqfy.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "sleep":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670355/Mhw/download_ifvf9n.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "fire":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670543/Mhw/download_q7vvae.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "water":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670557/Mhw/download_ibmjx7.png"
          />
          <>{hide ? hidden(damage) : damage}</>
        </div>
      );
      break;
    case "paralysis":
      return (
        <div key={idx}>
          <img
            className="e-icon"
            key={idx}
            src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670574/Mhw/download_b61mup.png"
          />
          <>{hide ? hidden(damage) : damage}</>
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
  idx
) => {
  return (
    <div className="sharpness-bar" key={`durability-${idx}`}>
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

 export const assignSlots = (slot, idx) => {
  switch (slot) {
    case 1:
      return (
        <img
          key={`slot-${idx}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664648/Mhw/gem_level_1_aaolcn.png"
        />
      );
      break;
    case 2:
      return (
        <img
          key={`slot-${idx}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664781/Mhw/gem_level_2_waqkwk.png"
        />
      );
      break;
    case 3:
      return (
        <img
          key={`slot-${idx}`}
          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664734/Mhw/gem_level_3_zgidct.png"
        />
      );
      break;
  }
};

export const displayData = (name,rare,image,slots,raw,elements,cat,dmgType,affinity,defense,durability,phial,shelling,coatings,boost,ammo,deviation,specialAmmo,index) => {
   return  <div key={`weapon-${index}`}>
      <div>
        <h2>{name}</h2>
        <p>R:{rare}</p>
      </div>
      <div>
        <img src={image}/>
      </div>
      <div className="slots">
      Slots:
      {slots.length ? slots.map((slot,idx) => {
         return  assignSlots(slot.rank,idx)
      })  : <></>}
      </div>
      <div className="attk-val">
        <p>Raw: {raw}</p>
        <div>Elements: {elements.length ? elements.map((ele, idx) => {
           return  ele.hidden ? assignElement(ele.type, ele.damage,idx,true) : assignElement(ele.type,ele.damage,idx)
        }) : <>None</>}
        </div>
      </div>
      <div className="per-weapon">
        Weapon-Type Specifics: 
        {cat == "charge-blade" || cat == "switch-axe" ?  
        <div>
          <div>Phial:{phial.type}</div>
          <div>Phial Damage:{phial.damage == null ? <>0</> : phial.damage}</div>
          </div>
         : <></>}
        {cat == "light-bowgun" || cat == "heavy-bowgun" ? 
          <div>
            Ammo:
            {ammo.map((ammo,idx) => {
              return <div  className="ammo-list" key={`ammo-${idx}`}>
                <div>{ammo.type}
                </div>
                </div>
            })}
            <div>
             Special Ammo: {specialAmmo == null ? <>None</> : <>{specialAmmo}</>}
            </div>
            <div>
              Deviation: {deviation}
            </div>
            </div>
         
        : <></>}

        {cat == "bow" ? 
        <div>
            Coatings: {coatings.map((coating,idx) => {
             return  <div key={`coating-${idx}`}>
                <div>{coating}</div>
              </div>
            })}
        </div> : <></>}

        {cat == "gunlance" ? 
        <div>
          Shelling: {shelling ? 
          <div>
            {shelling.type}
            <>-lvl{shelling.level}</>
          </div>: <></>}
        </div>: <></>} 

        {cat == "insect-glaive" ? <div>
          <div>
            Boost Type: <>{boost}</>
          </div>
        </div>: <></>}
        

      </div>
      <div className="attributes">
      Attributes:
        <p> Affinity:
           {affinity ? (
              affinity
                ) : (
            <>0</>
          )} %
        </p>
        <p>
          Defense:
            {defense ? (
              defense
                ) : (
                  <>0</>
            )}
        </p>
      </div>
      {dmgType !== "projectile" ? 
      <div className="sharpness">
        Base sharpness, incremented by levels of the Handicraft SKill:
        {durability.length ? durability.map((guage,idx) => {
          return assignSharpness(guage.red,guage.orange,guage.yellow,guage.green,guage.blue,guage.white,guage.purple,idx)
        }): <></> }
      </div>
      : <></>}


    </div>

}
