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
    <div className="container">
        <div className="row ">
            {armorData.length ? (armorData.map((armor, index) => {
                return (
                    <div className="col-lg-3 mx-4 my-2 bg-dark text-white" key={`armor-${index}`} style={{height: "300px", width: "250px"}}>
                        
                        <h4>{armor.name}</h4>
                        <img class="ml-5"src={filter(armor.assets)?armor.assets.imageFemale:""} style={{height:"auto", width: "130px"}}/>
                        {/* <img src={filter(armor.assets)?armor.assets.imageMale:""} style={{height:"auto", width: "130px"}}/>
                        {console.log(armor.name,armor.assets)} */}
                        <br/><br/><br/>
                        <p>Rarity: {armor.rarity}</p>
                    </div>
                );
            })):(<p>Armor loading....</p>)}
        </div>
    </div>
  );
};

export default Armor;
