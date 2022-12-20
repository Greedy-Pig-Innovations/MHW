import React from "react";
import { useParams } from "react-router";

const SingleWeapon = (props) => {
      const { id } = useParams();
        console.log(id, "this is id")

       const selected = () => {
                 const singleWeapon = props.weaponData.filter((weapon) => {
               return  weapon.id == id;
            })[0];
            
    }   



    return (<div className="wrapper">
        <div className="container">
            singleWeapon && singleWeapon.id ? (
                <div className="singleWeapon">
                    <h2>{singleWeapon.name}</h2>
                    <img className="weaponImg" src={singleWeapon.img ? singleWeapon.img : "https://res.cloudinary.com/daif0s5gi/image/upload/v1670258615/Capstone/product-image-coming-soon_sufqee.jpg"} /> 
                    <p>Raw: {singleWeapon.attack.raw}</p>
                    <span>Display: {singleWeapon.attack.display}</span>
                </div>
            )
        </div>
    </div>)
}

export default SingleWeapon