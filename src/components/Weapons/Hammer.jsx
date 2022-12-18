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
        <div className="container">
            <div className="row">
                {hammerData.length ? (hammerData.map((weapon,index) => {
                    return (
                        <div className="item-box text-white"  key={`weapon-${index}`}>
                        <h2>{weapon.name}</h2>
                        <img style={{height:"auto", width: "130px", margin:"auto"}} src={filter(weapon.assets)?weapon.assets.image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fcontext%2Fjesuit-gallery205%2Farticle%2F1000%2Ftype%2Fnative%2Fviewcontent&imgrefurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fjesuit-gallery205%2F1%2F&tbnid=_UrqdYQ9FIqGiM&vet=12ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ..i&docid=REtbhB_SYuRj-M&w=428&h=428&q=image%20coming%20soon&ved=2ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ"}/>
                        </div>
                    )
                })): <>Loading hammers...</>}
            </div>
        </div>

    )
}

export default Hammer;