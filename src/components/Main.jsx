import React, {useState, useEffect} from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements,Router } from "react-router-dom";
import {Ailments,Navbar,Weapons, GreatSword} from './'


const Main = ()=> {
    const [weaponData,setWeaponData] = useState([])

    useEffect(() => {
        const getWeapons = async () => {
            const weapons = await GetAllWeapons()
            console.log(weapons)
            setWeaponData(weapons)   
        }
        getWeapons();
    },[])

   


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />}/>
                <Route path="Ailments" element={<Ailments />} />
                <Route path="Weapons" element={<Weapons />} />
                <Route path="GreatSword" element={<GreatSword  weaponData={weaponData}/>} />
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