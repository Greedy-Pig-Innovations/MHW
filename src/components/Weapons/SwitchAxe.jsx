import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { imgNotFound } from '../Main';

const SwitchAxe = (props) => {
    const swaxeData = props.swaxeData
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
                    {swaxeData.length ? (swaxeData.map((weapon, index) => {
                        return (
                            <div className="col item-box" key={`weapon-${index}`} onClick={() => handleClick(weapon.id)}>
                                <img style={{ height: "auto", width: "130px", margin: "auto" }} src={filter(weapon.assets) ? weapon.assets.image : imgNotFound} />
                                <h5>{weapon.name}</h5>
                            </div>
                        )
                    })) : <>Loading Switch Axe...</>}
                </div>
            </div>
        </div>
    )
}

export default SwitchAxe