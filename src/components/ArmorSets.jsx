import React, { useEffect, useState } from "react";
import { GetAllArmorSets } from "../api";

const ArmorSets = () => {
  const [armorSetsData, setArmorSetsData] = useState([]);

  useEffect(() => {
    const getArmorSets = async () => {
      const armorSets = await GetAllArmorSets();
      setArmorSetsData(armorSets);
    };
    getArmorSets();
  }, []);
  return (
    <div className="container ">
        <div className="row gy-5">
            {armorSetsData.length ? (armorSetsData.map((armorSets, index) => {
                return (
                    <div className="col-lg-4 bg-dark text-white" key={`armorSets-${index}`}>
                        <h1>{armorSets.name}</h1>
                        
                    </div>
                );
            })):(<p>ArmorSets loading....</p>)}
        </div>
    </div>
  );
};

export default ArmorSets;
