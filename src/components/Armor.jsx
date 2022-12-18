import React, { useEffect, useState } from "react";
import { GetAllArmor } from "../api";

const Armor = () => {
  const [armorData, setArmorData] = useState([]);
  const filter = (assets)=>{
    if (assets)
        return true;

    else
        return false;
}
  useEffect(() => {
    const getArmor = async () => {
      const armor = await GetAllArmor();
      setArmorData(armor);
    };
    getArmor();
  }, []);
  return (
    <div className="container bg-dark">
        <div className="item-grid">
            {armorData.length ? (armorData.map((armor, index) => {
                return (
                    <div className="item-box text-white" key={`armor-${index}`}>
                        <img src={filter(armor.assets)?armor.assets.imageFemale:""} style={{height:"auto", width: "130px", margin:"auto"}}/>
                        <p style={{textAlign: "center"}}>{armor.name}</p>
                        {console.log(armor.name, armor)}
                    </div>
                );
            })):(<p>Armor loading....</p>)}
        </div>
    </div>
  );
};

export default Armor;
