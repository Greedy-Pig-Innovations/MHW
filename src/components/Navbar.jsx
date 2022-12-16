import React from "react";
import { Outlet } from "react-router";
const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a class="navbar-brand" href="/">Monster Hunter World</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/Ailments">Ailments <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/Weapons">Weapons</a>
                </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar;