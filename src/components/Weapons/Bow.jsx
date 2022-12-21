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
            <div className="sideBar col-3 row-fluid px-5">
                <div className="card bg-secondary" style={{ height: "60vh" }}>
                    {singleWeapon && singleWeapon.id ? 
                        <div>
                        <div>
                        <h2>{singleWeapon.name}</h2>
                        <span>Rarity: {singleWeapon.rarity}</span>
                        </div>
                        <img src={singleWeapon.assets.image} />
                        <div>
                        <p>Raw: {singleWeapon.attack.raw}</p>
                        <span>Display:{singleWeapon.attack.display}</span>
                        </div>
                        <div>Coatings: {singleWeapon.coatings.length ? singleWeapon.coatings.map((coating, index) => {
                            return (
                                <div key={`coating-${index}`}>
                                    <p>{coating}</p>
                                </div>
                            )   
                        }) : <>None</>}</div>
                        </div>
                 : <></> }
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