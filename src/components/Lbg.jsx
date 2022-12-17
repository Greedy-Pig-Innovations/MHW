import React, {useState, useEffect} from 'react';


const Lbg = (props) => {
    const weaponData = props.weaponData
    const [lbgData,setLbgData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const Lbg = weaponData.filter(
                (weapon) => weapon.type === "light-bowgun")
             setLbgData(Lbg)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {lbgData.length ? (lbgData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading Lbg...</>}
            </div>
        </div>

    )
}

export default Lbg