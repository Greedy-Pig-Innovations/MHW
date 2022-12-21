import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Router } from "react-router-dom";
import { Ailments, Navbar, Home } from './'
import { GetAllWeapons } from "../api";
import SingleWeapon from "./Weapons/SingleWeapon";
import axios from "axios";
import { GreatSword, Bow, ChargeBlade, DualBlades, Gunlance, Hammer, Hbg, HuntingHorn, InsectGlaive, Lance, Lbg, LongSword, SnS, SwitchAxe } from "./Weapons";
import { Head, Chest, Gloves, Legs, Waist } from './Armor';
import { getData} from "./axios";
export const imgNotFound = "https://res.cloudinary.com/dofkj8qo6/image/upload/v1671577838/Image_Coming_Soon_zl2uti.png";

const Main = () => {
    const [bowData, setBowData] = useState([])
    const [igData,setIgData] = useState([])
    const [lanceData,setLanceData] = useState([])
    const [lbgData,setLbgData]  = useState([])
    const [lsData, setLsData] = useState([]);
    const [snsData, setSnsData] = useState([]);
    const [swaxeData, setSwaxeData] = useState([]);
    const [singleWeapon,setSingleWeapon] = useState([])

    useEffect(() => {
            getData("weapons", "bow")
            .then((response) => {
                setBowData(response.data)
            })
            
            getData("weapons","insect-glaive")
            .then((response) => {
                setIgData(response.data)
            })

            getData("weapons","lance")
            .then((response) => {
                setLanceData(response.data)
            })

            getData("weapons","light-bowgun")
            .then((response) => {
                setLbgData(response.data)
            })

            getData("weapons","long-sword")
            .then((response) => {
                setLsData(response.data)
            })

            getData("weapons","sword-and-shield")
            .then((response) => {
                setSnsData(response.data)
            })

            getData("weapons","switch-axe")
            .then((response) => {
                setSwaxeData(response.data)
            })






    }, [])

    

    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="Ailments" element={<Ailments />} />
                <Route path="Bow" element={<Bow bowData={bowData} singleWeapon={singleWeapon} setSingleWeapon={setSingleWeapon}/>} />
                <Route path="Charge-Blade" element={<ChargeBlade singleWeapon={singleWeapon} />} />
                <Route path="Dual-Blades" element={<DualBlades  singleWeapon={singleWeapon}/>} />
                <Route path="Great-Sword" element={<GreatSword  singleWeapon={singleWeapon}/>} />
                <Route path="Gunlance" element={<Gunlance singleWeapon={singleWeapon} />} />
                <Route path="Hammer" element={<Hammer singleWeapon={singleWeapon} />} />
                <Route path="Heavy-Bow-Gun" element={<Hbg singleWeapon={singleWeapon} />} />
                <Route path="Hunting-Horn" element={<HuntingHorn singleWeapon={singleWeapon} />} />
                <Route path="Insect-Glaive" element={<InsectGlaive igData={igData} singleWeapon={singleWeapon}/>} />
                <Route path="Lance" element={<Lance lanceData={lanceData} singleWeapon={singleWeapon}/>} />
                <Route path="Light-Bow-Gun" element={<Lbg  lbgData={lbgData} singleWeapon={singleWeapon}/>} />
                <Route path="Long-Sword" element={<LongSword  lsData={lsData} singleWeapon={singleWeapon}/>} />
                <Route path="Sword-and-Shield" element={<SnS  snsData={snsData} singleWeapon={singleWeapon}/>} />
                <Route path="Switch-Axe" element={<SwitchAxe  swaxeData={swaxeData} singleWeapon={singleWeapon}/>} />

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