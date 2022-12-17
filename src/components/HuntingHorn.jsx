import React, {useState, useEffect} from 'react';


const HuntingHorn = (props) => {
    const weaponData = props.weaponData
    const [hhData,setHhData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const HuntingHorn = weaponData.filter(
                (weapon) => weapon.type === "hunting-horn")
             setHhData(HuntingHorn)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {hhData.length ? (hhData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading HuntingHorn...</>}
            </div>
        </div>

    )
}

export default HuntingHorn