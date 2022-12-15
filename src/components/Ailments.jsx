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
    },[])

    return (
        <div>
            {ailmentData.length ? ailmentData.map((ailment,index) => {
                return (<div id="singleAilment" key={`ailment- ${index}`}>
                    <h2>{ailment.name}</h2>
                    <p>{ailment.description}</p>
                </div>)
            }): <p>Ailments loading....</p>}
        </div>
    )
}


export default AllAilments;