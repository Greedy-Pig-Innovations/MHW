import React, { useEffect, useState } from "react";
import { GetAllArmorSets } from "../api";

const ArmorSets= ()=>{
    const [armorSetsData, setArmorSetsData] = useState([])

    useEffect(() => {
    
        const getArmorSets = async () => {
            const armorSets = await GetAllArmorSets();
            setArmorSetsData(armorSets);
        }
        getArmorSets();
    },[])
    return (
       <div>
            {armorSetsData.length ? armorSetsData.map((armorSets, index) => {
                    return (
                    <div key={`ArmorSet- ${index}`}>

                        <p>{armorSets.name}</p>
                        {console.log(armorSets.pieces, armorSets.name)}
                        
                    </div>)
                }): <p>ArmorSets loading....</p>}
       </div>
    )
}

export default ArmorSets;