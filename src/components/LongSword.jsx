import React, {useState, useEffect} from 'react';


const LongSword = (props) => {
    const weaponData = props.weaponData
    const [lsData,setLsData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const LongSword = weaponData.filter(
                (weapon) => weapon.type === "long-sword")
             setLsData(LongSword)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {lsData.length ? (lsData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading LongSword...</>}
            </div>
        </div>

    )
}

export default LongSword