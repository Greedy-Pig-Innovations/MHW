import React from "react";
import {Outlet} from "react-router";
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="/">Monster Hunter World</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/Ailments">Ailments</a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#" style={{margin:"5px"}}>
                                Weapons
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a className="text-secondary" href="/GreatSword">Great Sword</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Long Sword</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Sword and Shield</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Dual Blades</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Hammer</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Hunting Horn</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Lance</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Gunlance</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Switch Axe</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Chad Blade</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Insect Glaive</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Light Bowgun</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Heavy Bowgun</a>
                                </li>
                                <li>
                                    <a className="text-secondary" href="#">Bow</a>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar;
