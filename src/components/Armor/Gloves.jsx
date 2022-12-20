import React, { useEffect, useState } from "react";
import { CCollapse, CButton } from "@coreui/react";
import axios from "axios";

const Gloves = () => {
    const [armorData, setArmorData] = useState([]);

    const filter = (assets) => {
        if (assets)
            return true;
        else
            return false;
    }
    useEffect(() => {
        axios.get("https://mhw-db.com/armor", {
            params: {
                q: JSON.stringify({
                    type: "gloves"
                })
            }
        }).then((response) => {
            setArmorData(response.data)
        })
    }, []);



    return (
        <div className="container bg-dark text-light MHW-font">
            <div className="item-grid">
                {armorData.length ? armorData.map((dt, index) => {
                    return (
                        <div className="item-box" key={index}>
                            <img src={filter(dt.assets) ? dt.assets.imageFemale : ""} style={{ width: "150px" }} />
                            <p>{dt.name}</p>
                        </div>
                    )
                }) : (<p>Loading...</p>)}
            </div>

        </div>
    );
};

export default Gloves;
