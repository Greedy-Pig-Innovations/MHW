import React, { useEffect, useState } from "react";
import { getAllAilments } from "../api";


const AllAilments = () => {
    const [ailmentData, setAilmentData] = useState([])

    useEffect(() => {

        const getAilments = async () => {
            const ailments = await getAllAilments()
            setAilmentData(ailments)
            console.log(ailments, "line 13")

        }
        getAilments();
    }, [])

    return (
        <div className="container">
            <div className="item-stack bg-dark text-light">
                {ailmentData.length ? ailmentData.map((ailment, index) => {
                    return (
                        <div className="item-box2" id="singleAilment" key={`ailment- ${index}`} style={{ height: "100px" }}>
                            <h2>{ailment.name}</h2>
                            <p>{ailment.description}</p>
                        </div>
                    )
                }) : <p>Ailments loading....</p>}
            </div>
        </div>
    )
}


export default AllAilments;