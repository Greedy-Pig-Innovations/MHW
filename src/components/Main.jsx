import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements,Router } from "react-router-dom";
import {Ailments,Navbar,Weapons} from './'

const Main = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Weapons />} >
                <Route path="Ailments" element={<Ailments />} />
                <Route path="Weapons" element={<Weapons />} />

            </Route>
        )
    )


    return(
        <div id="main">
            <RouterProvider router={router} />
        </div>
        )
    }

export default Main;