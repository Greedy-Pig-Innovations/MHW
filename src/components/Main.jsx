import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements,Router } from "react-router-dom";
import {Ailments,Navbar} from './'

const Main = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar />} >
                <Route path="ailments" element={<Ailments />} />


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