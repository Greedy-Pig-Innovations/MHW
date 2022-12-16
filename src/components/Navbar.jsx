import React from "react";
import { Outlet } from "react-router";
const Navbar = () => {

    return (
        <div>
        <Outlet/>
        </div>
    )
}

export default Navbar;