import React, {useEffect, useState} from "react";

const DualBlades = (props) => {
    const weaponData = props.weaponData
    const [dbData,setdbData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const dualBlades = weaponData.filter(
                (weapon) => weapon.type === "dual-blades")
             setdbData(dualBlades)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {dbData.length ? (dbData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Dual Blades...</>}
            </div>
        </div>

    )
}


export default DualBlades;