
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


    switch (type) {
        case "blast":
            return (
                <div key={index}>
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
                <div key={index}>
                    <img
                        className="e-icon"
                        key={index}
                        src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670261/Mhw/Poison_uzyxp9.png"
                    />
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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
                    <>{hide ? hidden(damage) : damage}</>
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

export const displayData = (name, rare, image, slots, raw, elements, cat, dmgType, affinity, defense, durability, phial, shelling, coatings, boost, ammo, deviation, specialAmmo, index) => {
    return <div key={`weapon-${index}`}>
        <div className="col">
            <div className="row">
                <img src={image} />
            </div>

            <h3>{name}</h3>

            <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                <p className="col">Rarity</p>
                <h6 className="col">{rare}</h6>
            </div>



            <div className="row mt-2 py-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                <div className="col slots">
                    Slots: {slots.length ? slots.map((slot, idx) => {
                        return assignSlots(slot.rank, idx)
                    }) : <></>}
                </div>
            </div>


            <div className="row attk-val" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                <div className="col">
                    <p>Raw: {raw}</p>
                </div>
                <div className="col">
                    <h6>Elements:{elements.length ? elements.map((ele, idx) => {
                        return ele.hidden ? assignElement(ele.type, ele.damage, idx, true) : assignElement(ele.type, ele.damage, idx)
                    }) : <>None</>}</h6>
                </div>
            </div>

            <div className="row" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                <div className="col" >
                    <div><h6>Weapon-Type Specifics:</h6></div>
                </div>
                <div className="col">
                    <div className="row">
                        {cat == "charge-blade" || cat == "switch-axe" ?
                            <div >
                                <div>Phial: {phial.type}</div>
                                <div>Phial Damage: {phial.damage == null ? <>0</> : phial.damage}</div>
                            </div>
                            : <></>}
                        {cat == "light-bowgun" || cat == "heavy-bowgun" ?
                            <div>
                                Ammo:
                                {ammo.map((ammo, idx) => {
                                    return <div className="ammo-list" key={`ammo-${idx}`}>
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
                                <h6 className="mb-4"> Coatings: </h6>
                                {coatings.map((coating, idx) => {
                                    return <div key={`coating-${idx}`}>
                                        <div>{coating}</div>
                                    </div>
                                })}
                            </div> : <></>}

                        {cat == "gunlance" ?
                            <div>
                                <h6 className="mb-4">Shelling: </h6> {shelling ?
                                    <div>
                                        {shelling.type}
                                        <>-lvl{shelling.level}</>
                                    </div> : <></>}
                            </div> : <></>}

                        {cat == "insect-glaive" ? <div>
                            <div>
                                <h6 className="mr-1 mb-4"> Boost Type:</h6> <>{boost}</>
                            </div>
                        </div> : <></>}
                    </div>
                </div>
            </div>

            <div className="attributes">
                <h6 className="row">Attributes:</h6>
                <p> Affinity: {affinity ? (
                    affinity
                ) : (
                    <>0</>
                )} %
                </p>
                <p>
                    Defense: {defense ? (
                        defense
                    ) : (
                        <>0</>
                    )}
                </p>
            </div>
            {dmgType !== "projectile" ?
                <div className="sharpness">
                    Base sharpness, incremented by levels of the Handicraft Skill:

                    {durability.length ? durability.map((guage, idx) => {
                        return assignSharpness(guage.red, guage.orange, guage.yellow, guage.green, guage.blue, guage.white, guage.purple, idx)
                    }) : <></>}
                </div>
                : <></>}

        </div>
    </div>

}
