import React, { useEffect, useState } from "react";
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

    return (<div>
        <h2>Weapons</h2>
    </div>)

}

export default AllWeapons;