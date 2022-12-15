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
                    return (<div id="singleWeapon" key={`weapon- ${index}`}>
                        <h4>{weapons.name}</h4>
                        <p>{weapons.type}</p>

                     
                    </div>)
                }): <p>weapons loading....</p>}
            </div>
        )

}

export default AllWeapons;