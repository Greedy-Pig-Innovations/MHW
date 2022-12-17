import React, { useEffect, useState } from "react";
import { GetAllArmor } from "../api";

const Armor = () => {
  const [armorData, setArmorData] = useState([]);

  useEffect(() => {
    const getArmor = async () => {
      const armor = await GetAllArmor();
      setArmorData(armor);
    };
    getArmor();
  }, []);
  return (
    <div className="container ">
        <div className="row gy-5">
            {armorData.length ? (armorData.map((armor, index) => {
                return (
                    <div className="col-lg-4 bg-dark text-white armorBG" key={`armor-${index}`}>
                        
                        <h1>{armor.name}</h1>
                        
                    </div>
                );
            })):(<p>Armor loading....</p>)}
        </div>
    </div>
  );
};

export default Armor;
