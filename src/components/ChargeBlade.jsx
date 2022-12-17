import React, {useState, useEffect} from "react";

const ChargeBlade = (props) => {
    const weaponData = props.weaponData
    const [cbData,setCbData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const chargeblade = weaponData.filter(
                (weapon) => weapon.type === "charge-blade")
             setCbData(chargeblade)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {cbData.length ? (cbData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Charge Blades...</>}
            </div>
        </div>

    )
}

export default ChargeBlade;