import React, {useState, useEffect} from 'react';


const Lance = (props) => {
    const weaponData = props.weaponData
    const [lanceData,setLanceData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const Lance = weaponData.filter(
                (weapon) => weapon.type === "lance")
             setLanceData(Lance)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {lanceData.length ? (lanceData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Lance...</>}
            </div>
        </div>

    )
}

export default Lance