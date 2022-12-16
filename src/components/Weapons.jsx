import React, { useEffect, useState } from "react";
import { Weapons } from ".";
import { GetAllWeapons } from "../api";

const AllWeapons = () => {
    const [weaponData,setWeaponData] = useState([])

    useEffect(() => {
        const getWeapons = async () => {
            const weapons = await GetAllWeapons()
            console.log(weapons)
            setWeaponData(weapons)   
        }
        getWeapons();
    },[])

        return (
            <div className="container">
                <div className="row g-3">
                {weaponData.length ? weaponData.map((weapons,index) => {
                    return (<div className="col" style={{border:"2px solid black", backgroundColor: "lightgray", margin:"5px"}} key={`weapons- ${index}`}>
                        <h4>{weapons.name}</h4>
                        <p>{weapons.type}</p>                      
                        <img src={filter(weapons.assets)?weapons.assets.image:"N/A"}/>
                        <img src={filter(weapons.assets)?weapons.assets.icon:"N/A"}/>
                        <p>{index}</p>
                    </div>
                    )
                }): <p>weapons loading....</p>}
            </div>
           </div>
        )


}
function filter(assets){
    if (assets)
    {
        return true;
    }
    else
        return false;
}

export default AllWeapons;