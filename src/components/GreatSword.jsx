import React, { useEffect, useState } from "react";

const GreatSword = (props) => {
    const weaponData = props.weaponData
    const [gsData,setGsData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const greatSword = weaponData.filter(
                (weapon) => weapon.type === "great-sword")
             setGsData(greatSword)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {gsData.length ? (gsData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Great Swords...</>}
            </div>
        </div>

    )
}

export default GreatSword
