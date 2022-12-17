import React, {useState, useEffect} from "react";

const Bow = (props) => {
    const weaponData = props.weaponData
    const [bowData,setBowData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const bow = weaponData.filter(
                (weapon) => weapon.type === "bow")
             setBowData(bow)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {bowData.length ? (bowData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Bows...</>}
            </div>
        </div>

    )
}

export default Bow;