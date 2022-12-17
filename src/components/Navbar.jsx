import React from "react";
import { Outlet } from "react-router";
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="/">Monster Hunter World</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/Ailments">Ailments <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/Weapons">Weapons</a>
                    <a className="nav-item nav-link" href="/ArmorSets">Armor Sets</a>
                </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar;