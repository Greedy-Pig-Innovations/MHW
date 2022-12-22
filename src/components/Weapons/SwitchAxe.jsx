import axios from "axios";
import React, { useState, useEffect } from "react";
import { imgNotFound } from "../Main";
import { assignElement, assignSharpness, assignSlots } from "../helperFunctions";

const SwitchAxe = (props) => {
    const swaxeData = props.swaxeData;
    const setSingleWeapon = props.setSingleWeapon;
    const singleWeapon = props.singleWeapon;
    const filter = (assets) => {
        if (assets) return true;
        else return false;
    };

    

    return (
        <div className="container-fluid row text-light MHW-font">
            <div className="sideBar col-3 row-fluid px-5">
                <div className="card bg-secondary" style={{ height: "60vh" }}>
                    {singleWeapon && singleWeapon.id ? (
                        <div>
                            <div>
                                <h2>{singleWeapon.name}</h2>
                                <span>Rarity: {singleWeapon.rarity}</span>
                            </div>
                            <div>
                                <img
                                    style={{ height: "auto", width: "130px", margin: "auto" }}
                                    src={
                                        filter(singleWeapon.assets)
                                            ? singleWeapon.assets.image
                                            : imgNotFound
                                    }
                                />
                            </div>
                            <div>
                                <p>Raw: {singleWeapon.attack.raw}</p>
                                <p>Display:{singleWeapon.attack.display}</p>
                                <p>Damage Type: {singleWeapon.damageType}</p>
                                <p>Phial:{singleWeapon.phial.type}</p>
                                <p>
                                    Phial Damage:
                                    {singleWeapon.phial.damage != null ? (
                                        singleWeapon.phial.damage
                                    ) : (
                                        <>None</>
                                    )}
                                </p>
                                <div>
                                    Element:{" "}
                                    {singleWeapon.elements.length ? (
                                        singleWeapon.elements.map((element, index) => {
                                            return assignElement(element.type, element.damage, index);
                                        })
                                    ) : (
                                        <>None</>
                                    )}
                                </div>
                            </div>
                            <div>
                                Slots:
                                {singleWeapon.slots.length ? (
                                    singleWeapon.slots.map((slot, index) => {
                                        return assignSlots(slot.rank, index);
                                    })
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                <p>Attributes</p>
                                <p>
                                    Affinity:
                                    {singleWeapon.attributes.affinity ? (
                                        singleWeapon.attributes.affinity
                                    ) : (
                                        <>0</>
                                    )}
                                    %
                                </p>
                                <p>
                                    Defense:
                                    {singleWeapon.attributes.defense ? (
                                        singleWeapon.attributes.defense
                                    ) : (
                                        <>0</>
                                    )}
                                </p>
                            </div>
                            <div>
                                <div className="sharpness-bar-container">
                                    {singleWeapon.durability.length ? (
                                        singleWeapon.durability.map((durability, index) => {
                                            return assignSharpness(
                                                durability.red,
                                                durability.yellow,
                                                durability.orange,
                                                durability.green,
                                                durability.blue,
                                                durability.white,
                                                durability.purple,
                                                index
                                            );
                                        })
                                    ) : (
                                        <>None</>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="col">
                <div
                    className="row bg-dark"
                    style={{ height: "85vh", overflow: "auto" }}
                >
                    {swaxeData.length ? (
                        swaxeData.map((weapon, index) => {
                            return (
                                <div
                                    className="col item-box"
                                    key={`weapon-${index}`}
                                    onClick={() => handleClick(weapon.id)}
                                >
                                    <img
                                        style={{ height: "auto", width: "130px", margin: "auto" }}
                                        src={
                                            filter(weapon.assets) ? weapon.assets.image : imgNotFound
                                        }
                                    />
                                    <h5>{weapon.name}</h5>
                                </div>
                            );
                        })
                    ) : (
                        <>Loading Switch Axe...</>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SwitchAxe;
