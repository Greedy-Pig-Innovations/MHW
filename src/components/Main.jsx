import React, { useState, useEffect } from "react";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements,Router,} from "react-router-dom";
import { Armor, Ailments, Navbar, Home ,Weapons} from "./";
export const imgNotFound =
    "https://res.cloudinary.com/dofkj8qo6/image/upload/v1671577838/Image_Coming_Soon_zl2uti.png";

const Main = () => {
    const [weapon,setWeapon] = useState([])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="Ailments" element={<Ailments />} />
                <Route path="/Weapons" element={<Weapons setWeapon={setWeapon} weapon={weapon}/>} />
                <Route path="Armor" element={<Armor />} />
            </Route>
        )
    );


    return (
        <div id="main">
            <RouterProvider router={router} />
        </div>
    );
};

export default Main;
