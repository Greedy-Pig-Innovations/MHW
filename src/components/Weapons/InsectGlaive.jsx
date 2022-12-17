import React, {useState, useEffect} from 'react';


const InsectGlaive = (props) => {
    const weaponData = props.weaponData
    const [igData,setIgData] = useState([])
    const filter = (assets)=>{
        if (assets)
            return true;

        else
            return false;
    }

    useEffect(() => {
        if (weaponData){
            const InsectGlaive = weaponData.filter(
                (weapon) => weapon.type === "insect-glaive")
             setIgData(InsectGlaive)
        };
    },[weaponData]);


    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                {igData.length ? (igData.map((weapon,index) => {
                    return (
                        <div className="col" key={`weapon-${index}`}>
                        <img src={filter(weapon.assets)?weapon.assets.image:"N/A"}/>
                        <img src={filter(weapon.assets)?weapon.assets.icon:"N/A"}/>
                        <h2>{weapon.name}</h2>

                        </div>
                    )
                })): <>Loading InsectGlaive...</>}
            </div>
        </div>

    )
}

export default InsectGlaive