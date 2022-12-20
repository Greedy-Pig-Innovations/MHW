import React, { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "https://mhw-db.com"

const GreatSword = () => {
    const [gsData, setGsData] = useState([])

    const filter = (assets)=>{
                if (assets)
                    return true;      
                else
                    return false;
            }
    
    useEffect(() => {
        axios.get("https://mhw-db.com/weapons", {
            params: {
                q: JSON.stringify ({
                    type: "great-sword"
                })
            }
        })
        .then((response) => {
            setGsData(response.data)
        })
       
    },[])

    return (
                <div className="container text-white">
                    <div className="item-grid">
                        {gsData.length ? (gsData.map((weapon,index) => {
                            return (
                                <div className="item-box text-white"  key={`weapon-${index}`}>
                                <img style={{height:"auto", width: "130px", margin:"auto"}} src={filter(weapon.assets)?weapon.assets.image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fcontext%2Fjesuit-gallery205%2Farticle%2F1000%2Ftype%2Fnative%2Fviewcontent&imgrefurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fjesuit-gallery205%2F1%2F&tbnid=_UrqdYQ9FIqGiM&vet=12ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ..i&docid=REtbhB_SYuRj-M&w=428&h=428&q=image%20coming%20soon&ved=2ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ"}/>
                                <h2>{weapon.name}</h2>
                                </div>
                            )
                        })): <>Loading Great Swords...</>}
                    </div>
                </div>
    )

}


export default GreatSword
