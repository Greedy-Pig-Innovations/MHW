import React, { useState, useEffect } from "react";
import axios from "axios";
import { imgNotFound } from "../Main";

const InsectGlaive = (props) => {
  const igData = props.igData;
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
                <p>Boost Type: {singleWeapon.boostType}</p>
                <div>
                  Element:{" "}
                  {singleWeapon.elements.length ? (
                    singleWeapon.elements.map((element, index) => {
                      switch (element.type) {
                        case "blast":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670235/Mhw/Blastblight_mylbi3.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "poison":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670261/Mhw/Poison_uzyxp9.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "dragon":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670287/Mhw/download_mizgia.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "thunder":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670303/Mhw/download_n2sfop.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "ice":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670330/Mhw/download_njoqfy.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "sleep":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670355/Mhw/download_ifvf9n.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "fire":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670543/Mhw/download_q7vvae.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "water":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670557/Mhw/download_ibmjx7.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                        case "paralysis":
                          return (
                            <div key={index}>
                              <img
                                className="e-icon"
                                key={index}
                                src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671670574/Mhw/download_b61mup.png"
                              />
                              <>{element.damage}</>
                            </div>
                          );
                          break;
                      }
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
                    if (slot.rank == 1) {
                      return (
                        <img
                          key={index}
                          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664648/Mhw/gem_level_1_aaolcn.png"
                        />
                      );
                    }
                    if (slot.rank == 2) {
                      return (
                        <img
                          key={index}
                          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664781/Mhw/gem_level_2_waqkwk.png"
                        />
                      );
                    }
                    if (slot.rank == 3) {
                      return (
                        <img
                          key={index}
                          src="https://res.cloudinary.com/daif0s5gi/image/upload/v1671664734/Mhw/gem_level_3_zgidct.png"
                        />
                      );
                    }
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

              <div>
                <div className="sharpness-bar-container">
                  {singleWeapon.durability.length ? (
                    singleWeapon.durability.map((durability, index) => {
                      return (
                        <div
                          className="sharpness-bar"
                          key={`durability-${index}`}
                        >
                          <div
                            className="red"
                            style={{
                              width: `${Math.floor(
                                (durability.red / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="orange"
                            style={{
                              width: `${Math.floor(
                                (durability.orange / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="yellow"
                            style={{
                              width: `${Math.floor(
                                (durability.yellow / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="green"
                            style={{
                              width: `${Math.floor(
                                (durability.green / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="blue"
                            style={{
                              width: `${Math.floor(
                                (durability.blue / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="white"
                            style={{
                              width: `${Math.floor(
                                (durability.white / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div
                            className="purple"
                            style={{
                              width: `${Math.floor(
                                (durability.purple / 400) * 100
                              )}px`,
                            }}
                          ></div>
                          <div className="clearfix"></div>
                        </div>
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
          {igData.length ? (
            igData.map((weapon, index) => {
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
            <>Loading Insect Glaves...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsectGlaive;
