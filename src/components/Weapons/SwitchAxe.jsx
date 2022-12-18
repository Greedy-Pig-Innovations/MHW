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
        <div className="container-fluid p-3 my-3  text-white">
            <div className="row">
                {swaxeData.length ? (swaxeData.map((weapon,index) => {
                    return (
                        <div className="col-md-3 mt-3" id="weaponCard" key={`weapon-${index}`}>
                        <div className="weapon-container-outer" style={{width:"600px", backgroundColor:'black'}}>
                         <div className="weapon-info" style={{border: "2px solid green"}}>    
                        <h2>{weapon.name}</h2>
                        <img  style={{maxWidth: "20px", maxHeight: "20px"}} src={filter(weapon.assets)?weapon.assets.icon:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fcontext%2Fjesuit-gallery205%2Farticle%2F1000%2Ftype%2Fnative%2Fviewcontent&imgrefurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fjesuit-gallery205%2F1%2F&tbnid=_UrqdYQ9FIqGiM&vet=12ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ..i&docid=REtbhB_SYuRj-M&w=428&h=428&q=image%20coming%20soon&ved=2ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ"}/>         
                        </div>

                        <div style={{border: "2px solid red"}}>
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={filter(weapon.assets)?weapon.assets.image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fcontext%2Fjesuit-gallery205%2Farticle%2F1000%2Ftype%2Fnative%2Fviewcontent&imgrefurl=https%3A%2F%2Fdigitalcommons.georgiasouthern.edu%2Fjesuit-gallery205%2F1%2F&tbnid=_UrqdYQ9FIqGiM&vet=12ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ..i&docid=REtbhB_SYuRj-M&w=428&h=428&q=image%20coming%20soon&ved=2ahUKEwignuyI8oH8AhXtKt4AHYIfD1kQMygFegUIARDzAQ"}/>
                        </div>
                        </div>
                        </div>
                    )
                })): <>Loading SwitchAxe...</>}
            </div>
        </div>

    )
}

export default SwitchAxe