import React from "react";
import {Outlet} from "react-router";
const Navbar = () => {
    const logo = "https://res.cloudinary.com/dofkj8qo6/image/upload/v1671388585/b6e51f83c484f783427df4799b1aea80_lnujsq.jpg";

    return (
        <div>
            <nav className="navbar navbar-expand-sm sticky-top mb-3" style={{backgroundColor: "#191919", height: "100px", fontFamily: "Marcellus Sc"}}>
                {/*--This is the Page Logo/title */}
                <a href="/">
                    <img className="ml-5"src={logo} style={{width:"75px"}}/>
                </a>


                {/* this is the icon used for the Navbar collapse in smaller screens */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* this is the Navigation bars content*/}
                <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Ailments">Ailments</a>   
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Armor">Armor</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="weaponsDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Weapons
                                </a>
                                <div className="dropdown-menu" aria-labelledby="weaponsDropdownLink">
                                        <a className="dropdown-item" href="/Great-Sword">Great Sword</a>
                                        <a className="dropdown-item" href="/Long-Sword">Long Sword</a>
                                        <a className="dropdown-item" href="/Sword-and-Shield">Sword and Shield</a>
                                        <a className="dropdown-item" href="Dual-Blades">Dual Blades</a>
                                        <a className="dropdown-item" href="/Hammer">Hammer</a>
                                        <a className="dropdown-item" href="/Hunting-Horn">Hunting Horn</a>
                                        <a className="dropdown-item" href="/Lance">Lance</a>
                                        <a className="dropdown-item" href="/Gunlance">Gunlance</a>
                                        <a className="dropdown-item" href="/Switch-Axe">Switch Axe</a>
                                        <a className="dropdown-item" href="/Charge-Blade">Charge Blade</a>
                                        <a className="dropdown-item" href="/Insect-Glaive">Insect Glaive</a>
                                        <a className="dropdown-item" href="/Light-Bow-Gun">Light Bowgun</a>
                                        <a className="dropdown-item" href="/Heavy-Bow-Gun">Heavy Bowgun</a>
                                        <a className="dropdown-item" href="/Bow">Bow</a>
                                </div>
                            </li>
                        </ul>
                </div>
            </nav>
            
                    <Outlet/>
        </div>
    )
}

export default Navbar;
