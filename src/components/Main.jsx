import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Router } from "react-router-dom";
import { Ailments, Navbar, Home } from './'
import { GetAllWeapons } from "../api";
import SingleWeapon from "./Weapons/SingleWeapon";
import axios from "axios";
import { GreatSword, Bow, ChargeBlade, DualBlades, Gunlance, Hammer, Hbg, HuntingHorn, InsectGlaive, Lance, Lbg, LongSword, SnS, SwitchAxe } from "./Weapons";
import { Head, Chest, Gloves, Legs, Waist } from './Armor';
export const imgNotFound = "https://res.cloudinary.com/dofkj8qo6/image/upload/v1671577838/Image_Coming_Soon_zl2uti.png";

const Main = () => {
    const [bowData, setBowData] = useState([])
    const [weaponData, setWeaponData] = useState([])

    useEffect(() => {
        const getWeapons = async () => {
            const weapons = await GetAllWeapons()
            console.log(weapons)
            setWeaponData(weapons)
        }
        getWeapons();
    }, [])

    useEffect(() => {
        axios.get("https://mhw-db.com/weapons", {
            params: {
                q: JSON.stringify({
                    type: "bow"
                })
            }
        })
            .then((response) => {
                console.log(response.data)
                setBowData(response.data)
            })

    }, [])

    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="Ailments" element={<Ailments />} />
                <Route path="Bow" element={<Bow bowData={bowData} />} />
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
                <Route path="SingleWeapon" element={<SingleWeapon weaponData={weaponData} />} />

                <Route path="Bow/:id" element={<SingleWeapon weaponData={weaponData} />} />
                <Route path="Charge-Blade/:id" element={<SingleWeapon weaponData={weaponData} />} />
                <Route path="Dual-Blades/:id" element={<DualBlades weaponData={weaponData} />} />
                <Route path="Great-Sword/:id" element={<GreatSword weaponData={weaponData} />} />
                <Route path="Gunlance/:id" element={<Gunlance weaponData={weaponData} />} />
                <Route path="Hammer/:id" element={<Hammer weaponData={weaponData} />} />
                <Route path="Heavy-Bow-Gun/:id" element={<Hbg weaponData={weaponData} />} />
                <Route path="Hunting-Horn/:id" element={<HuntingHorn weaponData={weaponData} />} />
                <Route path="Insect-Glaive/:id" element={<InsectGlaive weaponData={weaponData} />} />
                <Route path="Lance/:id" element={<Lance weaponData={weaponData} />} />
                <Route path="Light-Bow-Gun/:id" element={<Lbg weaponData={weaponData} />} />
                <Route path="Long-Sword/:id" element={<LongSword weaponData={weaponData} />} />
                <Route path="Sword-and-Shield/:id" element={<SnS weaponData={weaponData} />} />
                <Route path="Switch-Axe/:id" element={<SwitchAxe weaponData={weaponData} />} />

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