import React from "react";
import {Outlet} from "react-router";
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                {/*--This is the Page Logo/title */}
                <a className="navbar-brand" href="/">Monster Hunter World</a>
                
                {/* this is the icon used for the Navbar collapse in smaller screens */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* this is the Navigation bars content*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Ailments">Ailments</a>   
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ArmorSets">Armor Sets</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="weaponsDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Weapons
                                </a>
                                <div className="dropdown-menu" aria-labelledby="weaponsDropdownLink">
                                        <a className="dropdown-item" href="/GreatSword">Great Sword</a>
                                        <a className="dropdown-item" href="#">Long Sword</a>
                                        <a className="dropdown-item" href="#">Sword and Shield</a>
                                        <a className="dropdown-item" href="#">Dual Blades</a>
                                        <a className="dropdown-item" href="#">Hammer</a>
                                        <a className="dropdown-item" href="#">Hunting Horn</a>
                                        <a className="dropdown-item" href="#">Lance</a>
                                        <a className="dropdown-item" href="#">Gunlance</a>
                                        <a className="dropdown-item" href="#">Switch Axe</a>
                                        <a className="dropdown-item" href="#">Chad Blade</a>
                                        <a className="dropdown-item" href="#">Insect Glaive</a>
                                        <a className="dropdown-item" href="#">Light Bowgun</a>
                                        <a className="dropdown-item" href="#">Heavy Bowgun</a>
                                        <a className="dropdown-item" href="#">Bow</a>
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
