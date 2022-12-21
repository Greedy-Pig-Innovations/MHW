import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SingleWeapon from "./SingleWeapon";
import { imgNotFound } from "../Main";

const Bow = (props) => {
    const bowData = props.bowData



    const handleClick = (id) => {
        console.log("clicked item: ", id)
        const singleWeapon = bowData.filter(weapon => {
            return weapon.id === id
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