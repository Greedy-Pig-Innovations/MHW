import React, {useState, useEffect} from 'react';


const SnS = (props) => {
    const weaponData = props.weaponData
    const [snsData,setSnsData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const SnS = weaponData.filter(
                (weapon) => weapon.type === "SnS")
             setSnsData(SnS)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {snsData.length ? (snsData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading SnS...</>}
            </div>
        </div>

    )
}

export default SnS