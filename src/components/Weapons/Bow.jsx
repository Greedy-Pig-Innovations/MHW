
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SingleWeapon from "./SingleWeapon";
import { imgNotFound } from "../Main";

const Bow = (props) => {
    const bowData = props.bowData
    const setSingleWeapon = props.setSingleWeapon
    const singleWeapon = props.singleWeapon
    const imgNotFound = "https://res.cloudinary.com/dofkj8qo6/image/upload/v1671577838/Image_Coming_Soon_zl2uti.png";

    const handleClick = (id) => {
        axios.get(`https://mhw-db.com/weapons/${id}`)
            .then((response) => {
                console.log(response)
                setSingleWeapon(response.data)
            })
    }



    const filter = (assets) => {
        if (assets)
            return true;
        else
            return false;
    }

    return (
        <div className="container-fluid row text-light MHW-font">
            <div className="sideBar col-3 row-lg px-5 mt-5" >
                <div className="bg-evil" style={{ height: "60vh", textAlign: "center", width: "340px" }}>
                    {singleWeapon && singleWeapon.id ?
                        <div>
                            <div style={{ borderBottom: "1px solid #f8f9fa" }}>
                                <h2>{singleWeapon.name}</h2>
                            </div>
                            <div style={{ borderBottom: "1px solid #f8f9fa" }}>
                                <img src={singleWeapon.assets.image} style={{ width: "200px" }} />
                            </div>
                            <div className="row my-2 bb-light">
                                <div className="col">
                                    <span>Rarity: {singleWeapon.rarity}</span>
                                </div>
                            </div>

                            <p>Raw: {singleWeapon.attack.raw}</p>
                            <span>Display:{singleWeapon.attack.display}</span>
                            <p>Coatings: {singleWeapon.coatings.length ? singleWeapon.coatings.map((coating, index) => {
                                return (
                                    <div key={`coating-${index}`}>
                                        <div>
                                            <p>{coating}</p>
                                        </div>
                                    </div>
                                )
                            }) : <>None</>}</p>

                        </div>
                        : <></>}
                </div>
            </div>
            <div className="col">
                <div className="row bg-dark" style={{ height: "85vh", overflow: "auto" }}>
                    {bowData.length ? (bowData.map((weapon, index) => {
                        return (
                            <div className="col item-box" key={`weapon-${index}`} onClick={() => handleClick(weapon.id)}>
                                <img style={{ height: "auto", width: "130px", margin: "auto" }} src={filter(weapon.assets) ? weapon.assets.image : imgNotFound} />
                                <h5>{weapon.name}</h5>
                            </div>
                        )
                    })) : <>Loading Bows...</>}
                </div>
            </div>
        </div>

    )
}

export default Bow;