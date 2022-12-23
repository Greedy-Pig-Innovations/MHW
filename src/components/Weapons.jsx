import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { displayData } from './helperFunctions';


const Weapons = (props) => {
    const [shown, setShown] = useState("great-sword");
    const [data, setData] = useState([]);
    const weapon = props.weapon
    const setWeapon = props.setWeapon

    useEffect(() => {
        axios.get('https://mhw-db.com/weapons', {
            params: {
                q: JSON.stringify({
                    type: shown
                })
            }
        }).then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [shown])

    const handleClick = (id) => {
        axios.get(`https://mhw-db.com/weapons/${id}`).then((response) => {
            console.log(response);
            setWeapon(response.data);
        });
    };


    return (
        <div className="row">
            <span className="col-3 mt-5 ml-5">
                <div className="bg-blur text-white MHW-font p-2 jp-shadow" style={{ borderRadius: "10px" }}>
                    {weapon && weapon.id ?
                        displayData(weapon.name, weapon.rarity, weapon.assets.image, weapon.slots, weapon.attack.raw, weapon.elements, weapon.damageType, weapon.attributes.affinity, weapon.attributes.defense, weapon.durability)
                        : <></>}
                </div>
            </span>
            <div className="col-7">
                <div className="mt-5 p-4 jp-shadow bg-blur text-light MHW-font" style={{ borderRadius: "10px" }}>
                    <ul className="row text-center">
                        <a className="col nav-link link link--elara" onClick={() => setShown("great-sword")}>Great Sword</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("sword-and-shield")}>Sword and Shield</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("dual-blades")}>Dual Blades</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("long-sword")}>Long Sword</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("hammer")}>Hammer</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("hunting-horn")}>Hunting Horn</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("lance")}>Lance</a>
                    </ul>
                    <ul className="row text-center">
                        <a className="col nav-link link link--elara" onClick={() => setShown("gunlance")}>Gunlance</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("switch-axe")}>Switch Axe</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("charge-blade")}>Charge Blade</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("insect-glaive")}>Insect Glaive</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("bow")}>Bow</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("light-bowgun")}>Light Bowgun</a>
                        <a className="col nav-link link link--elara" onClick={() => setShown("heavy-bowgun")}>Heavy Bowgun</a>
                    </ul>

                    <div className="row" id={shown} style={{ borderTop: "2px solid rgba(150,150,150,.5)", height: "70vh", overflow: "auto", overflowX: "hidden", borderBottom: "2px solid rgba(150,150,150,.5)" }}>
                        {data.length ? data.map((dt, index) => {

                            if (dt.assets) {
                                return (
                                    <div className="col p-2 m-2 item" key={index} onClick={() => handleClick(dt.id)}>
                                        <img className="card-img-top" src={dt.assets.image} style={{ width: "200px", minHeight: "175px" }} />
                                        <div className="card-title" style={{ textAlign: "center", borderRadius: "10px", borderBottom: "2px solid rgba(150,150,150,.5)" }}>{dt.name}</div>
                                    </div>
                                )
                            }
                        }) : (<div className="lds-dual-ring"></div>)}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weapons;