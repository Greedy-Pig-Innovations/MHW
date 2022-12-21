import React, { useEffect, useState } from "react";
import axios from "axios";
import { imgNotFound } from "../Main";

const BASE_URL = "https://mhw-db.com"

const GreatSword = () => {
    const [gsData, setGsData] = useState([])

    const filter = (assets) => {
        if (assets)
            return true;
        else
            return false;
    }

    useEffect(() => {
        axios.get("https://mhw-db.com/weapons", {
            params: {
                q: JSON.stringify({
                    type: "great-sword"
                })
            }
        })
            .then((response) => {
                setGsData(response.data)
            })

    }, [])

    return (
        <div className="container-fluid row text-light MHW-font">
            <div className="sideBar col-3 row-fluid px-5">
                <div className="card bg-secondary" style={{ height: "60vh" }}>
                </div>
            </div>
            <div className="col">
                <div className="row bg-dark" style={{ height: "85vh", overflow: "auto" }}>
                    {gsData.length ? (gsData.map((weapon, index) => {
                        return (
                            <div className="col item-box" key={`weapon-${index}`} onClick={() => handleClick(weapon.id)}>
                                <img style={{ height: "auto", width: "130px", margin: "auto" }} src={filter(weapon.assets) ? weapon.assets.image : imgNotFound} />
                                <h5>{weapon.name}</h5>
                            </div>
                        )
                    })) : <>Loading Great swords...</>}
                </div>
            </div>
        </div>

    )

}


export default GreatSword
