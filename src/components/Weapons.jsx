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
            <div>
                {weaponData.length ? weaponData.map((weapons,index) => {
                    return (<div id="singleWeapon" key={`weapons- ${index}`}>
                        <h4>{weapons.name}</h4>
                        <p>{weapons.type}</p>

                        
                        
                        <img src={filter(weapons.assets)?weapons.assets.image:"N/A"}/>
                        <img src={filter(weapons.assets)?weapons.assets.icon:"N/A"}/>
                        <p>{index}</p>
                    </div>)
                }): <p>weapons loading....</p>}
            </div>
        )


}
function filter(assets){
    if (assets)
    {
        console.log("cool")
        return true;
    }
    else
        return false;
}

export default AllWeapons;