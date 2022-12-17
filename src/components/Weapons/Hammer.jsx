import React, {useState, useEffect} from 'react';


const Hammer = (props) => {
    const weaponData = props.weaponData
    const [hammerData,setHammerData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const hammer = weaponData.filter(
                (weapon) => weapon.type === "hammer")
             setHammerData(hammer)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {hammerData.length ? (hammerData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading hammers...</>}
            </div>
        </div>

    )
}

export default Hammer;