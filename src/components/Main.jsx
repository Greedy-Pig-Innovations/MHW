import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Router } from "react-router-dom";
import { Ailments, Navbar, Home } from './'
import { GetAllWeapons } from "../api";
import { GreatSword, Bow, ChargeBlade, DualBlades, Gunlance, Hammer, Hbg, HuntingHorn, InsectGlaive, Lance, Lbg, LongSword, SnS, SwitchAxe } from "./Weapons";
import { Head, Chest, Gloves, Legs, Waist } from './Armor';


const Main = () => {
    const [weaponData, setWeaponData] = useState([])

    useEffect(() => {
        const getWeapons = async () => {
            const weapons = await GetAllWeapons()
            console.log(weapons)
            setWeaponData(weapons)
        }
        getWeapons();
    }, [])




    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="Ailments" element={<Ailments />} />
                <Route path="Bow" element={<Bow weaponData={weaponData} />} />
                <Route path="Charge-Blade" element={<ChargeBlade weaponData={weaponData} />} />
                <Route path="Dual-Blades" element={<DualBlades weaponData={weaponData} />} />
                <Route path="Great-Sword" element={<GreatSword weaponData={weaponData} />} />
                <Route path="Gunlance" element={<Gunlance weaponData={weaponData} />} />
                <Route path="Hammer" element={<Hammer weaponData={weaponData} />} />
                <Route path="Heavy-Bow-Gun" element={<Hbg weaponData={weaponData} />} />
                <Route path="Hunting-Horn" element={<HuntingHorn weaponData={weaponData} />} />
                <Route path="Insect-Glaive" element={<InsectGlaive weaponData={weaponData} />} />
                <Route path="Lance" element={<Lance weaponData={weaponData} />} />
                <Route path="Light-Bow-Gun" element={<Lbg weaponData={weaponData} />} />
                <Route path="Long-Sword" element={<LongSword weaponData={weaponData} />} />
                <Route path="Sword-and-Shield" element={<SnS weaponData={weaponData} />} />
                <Route path="Switch-Axe" element={<SwitchAxe weaponData={weaponData} />} />
                <Route path="Head" element={<Head />} />
                <Route path="Chest" element={<Chest />} />
                <Route path="Gloves" element={<Legs />} />
                <Route path="Waist" element={<Gloves />} />
                <Route path="Legs" element={<Waist />} />

            </Route>
        )
    );


    return (
        <div id="main">
            <RouterProvider router={router} />
        </div>
    )
}

export default Main;