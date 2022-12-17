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

        return (
            <div className="container">
                <div className="row row-cols g-3 ">
                {weaponData.length ? weaponData.map((weapons,index) => {
                    return (<div className="col" key={`weapons- ${index}`}>
                        {/* //<p>{index}</p> */}
                        <div className="border border-1 border-dark rounded pill" style={{backgroundColor: '#cccccc'}}>
                            <img src={filter(weapons.assets)?weapons.assets.image:"N/A"}/>
                            <img src={filter(weapons.assets)?weapons.assets.icon:"N/A"}/>
                            <h4>{weapons.name}</h4>
                            <p>{weapons.type}</p>                      
                        </div>
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