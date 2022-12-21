import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { imgNotFound } from '../Main';

const Hbg = () => {
    const [hbgData, setHbgData] = useState([])
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
                    type: "heavy-bowgun"
                })
            }
        })
            .then((response) => {
                setHbgData(response.data)
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
                    {hbgData.length ? (hbgData.map((weapon, index) => {
                        return (
                            <div className="col item-box" key={`weapon-${index}`} onClick={() => handleClick(weapon.id)}>
                                <img style={{ height: "auto", width: "130px", margin: "auto" }} src={filter(weapon.assets) ? weapon.assets.image : imgNotFound} />
                                <h5>{weapon.name}</h5>
                            </div>
                        )
                    })) : <>Loading Heavy-bowgun...</>}
                </div>
            </div>
        </div>
    )
}

export default Hbg;