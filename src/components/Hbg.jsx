import React, {useState, useEffect} from 'react';


const Hbg = () => {
    const weaponData = props.weaponData
    const [hbgData,setHbgData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const hbg = weaponData.filter(
                (weapon) => weapon.type === "heavy-bowgun")
             setHbgData(hbg)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {hbgData.length ? (hbgData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Hbg...</>}
            </div>
        </div>

    )
}

export default Hbg;