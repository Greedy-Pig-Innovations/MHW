import React, {useState, useEffect} from 'react';


const Gunlance = (props) => {
    const weaponData = props.weaponData
    const [glData,setGlData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const gunlance = weaponData.filter(
                (weapon) => weapon.type === "gunlance")
             setGlData(gunlance)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {glData.length ? (glData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Gunlance...</>}
            </div>
        </div>

    )
}

export default Gunlance