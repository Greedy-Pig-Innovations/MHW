import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements,Router } from "react-router-dom";
import {Ailments,Navbar,Weapons, Home, ArmorSets} from './'

const Main = ()=> {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar />}>
                <Route path="/" element={<Home />}/>
                <Route path="Ailments" element={<Ailments />}/>
                <Route path="Weapons" element={<Weapons />} />
                <Route path="ArmorSets" element={<ArmorSets />}/>
            </Route>
            )
        );


    return(
        <div id="main">
            <RouterProvider router={router} />
        </div>
        )
    }

export default Main;