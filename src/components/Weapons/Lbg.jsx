import React, { useState, useEffect } from "react";
import axios from "axios";
import { imgNotFound } from "../Main";
import { assignSlots } from "./helperFunctions";

const Lbg = (props) => {
  const lbgData = props.lbgData;
  const singleWeapon = props.singleWeapon;
  const setSingleWeapon = props.setSingleWeapon;
  const filter = (assets) => {
    if (assets) return true;
    else return false;
  };

  const handleClick = (id) => {
    axios.get(`https://mhw-db.com/weapons/${id}`).then((response) => {
      console.log(response);
      setSingleWeapon(response.data);
    });
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
                <p>Deviation: {singleWeapon.deviation}</p>
              </div>
              <div>
                Ammo Types:{" "}
                {singleWeapon.ammo ? (
                  singleWeapon.ammo.map((ammo, index) => {
                    return <div key={`ammo-${index}`}>{ammo.type}</div>;
                  })
                ) : (
                  <></>
                )}
                Special Ammo:{" "}
                {filter(singleWeapon.specialAmmo) ? (
                  singleWeapon.specialAmmo
                ) : (
                  <>N/A</>
                )}
              </div>

              <div>
                Slots:
                {singleWeapon.slots.length ? (
                  singleWeapon.slots.map((slot, index) => {
                    return assignSlots(slot.rank, index);
                  })
                ) : (
                  <></>
                )}{" "}
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
          {lbgData.length ? (
            lbgData.map((weapon, index) => {
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
            <>Loading Light-bowgun...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lbg;
