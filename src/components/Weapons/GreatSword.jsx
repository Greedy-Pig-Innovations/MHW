import React, { useEffect, useState } from "react";

const GreatSword = (props) => {
    const weaponData = props.weaponData
    const [gsData,setGsData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const greatSword = weaponData.filter(
                (weapon) => weapon.type === "great-sword")
             setGsData(greatSword)
        };
    },[weaponData]);


    return (
        <div className="container text-white">
            <div className="item-grid">
                {gsData.length ? (gsData.map((weapon,index) => {
                    return (
                        <div className="item-box text-white"  key={`weapon-${index}`}>
                        <h2>{weapon.name}</h2>
                        <img style={{height:"auto", width: "130px", margin:"auto"}} src={filter(weapon.assets)?weapon.assets.image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fcontext%2Fjesuit-gallery205%2Farticle%2F1000%2Ftype%2Fnative%2Fviewcontent&imgrefurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fjesuit-gallery205%2F1%2F&tbnid=_UrqdYQ9FIqGiM&vet=12ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ..i&docid=REtbhB_SYuRj-M&w=428&h=428&q=image%20coming%20soon&ved=2ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ"}/>
                        </div>
                    )
                })): <>Loading Great Swords...</>}
            </div>
        </div>

    )
}

export default GreatSword
