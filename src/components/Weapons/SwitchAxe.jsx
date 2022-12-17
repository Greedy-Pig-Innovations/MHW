import React, {useState, useEffect} from 'react';


const SwitchAxe = (props) => {
    const weaponData = props.weaponData
    const [swaxeData,setSwaxeData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const SwitchAxe = weaponData.filter(
                (weapon) => weapon.type === "SwitchAxe")
             setSwaxeData(SwitchAxe)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {swaxeData.length ? (swaxeData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading SwitchAxe...</>}
            </div>
        </div>

    )
}

export default SwitchAxe