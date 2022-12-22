import React, { useEffect, useState } from "react";
import axios from "axios";

const Armor = () => {
    const [shown, setShown] = useState("head");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mhw-db.com/armor', {
            params: {
                q: JSON.stringify({
                    type: shown
                })
            }
        }
        ).then((res) => {
            setData(res.data);
            console.log(res.data)
        })
    }, [shown]);


    return (
        <div className="row">
            <span className="col-4"></span>
            <div className="col-7">
                <div className="mt-5 p-4 jp-shadow bg-blur text-light MHW-font" style={{ borderRadius: "10px" }}>
                    <ul className="row text-center">
                        <a className="col-1 nav-link link link--elara" onClick={() => setShown("head")}>Head</a>
                        <a className="col-1 nav-link link link--elara" onClick={() => setShown("chest")}>chest</a>
                        <a className="col-1 nav-link link link--elara" onClick={() => setShown("gloves")}>gloves</a>
                        <a className="col-1 nav-link link link--elara" onClick={() => setShown("waist")}>Waist</a>
                        <a className="col-1 nav-link link link--elara" onClick={() => setShown("legs")}>Legs</a>
                    </ul>

                    <div className="row" id={shown} style={{ borderTop: "2px solid rgba(150,150,150,.5)", height: "70vh", overflow: "auto", overflowX: "hidden", borderBottom: "2px solid rgba(150,150,150,.5)" }}>
                        {data.length ? data.map((dt, index) => {

                            if (dt.assets) {
                                return (
                                    <div className="col p-2 m-2 item" key={index}>
                                        <img className="card-img-top" src={dt.assets.imageFemale} style={{ width: "125px" }} />
                                        <div className="card-title" style={{ textAlign: "center", borderRadius: "10px", borderBottom: "2px solid rgba(150,150,150,.5)" }}>{dt.name}</div>
                                    </div>
                                )
                            }
                        }) : (<div className="lds-dual-ring"></div>)}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Armor;
