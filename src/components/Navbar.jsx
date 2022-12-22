import React from "react";
import { Outlet } from "react-router";
const Navbar = () => {
    const gitHubImg = 'https://res.cloudinary.com/dofkj8qo6/image/upload/v1671673580/github_qox2tn.png';
    const linkedInImg = 'https://res.cloudinary.com/dofkj8qo6/image/upload/v1671673761/linkedin_vlnzwj.png';
    const emailImg = 'https://res.cloudinary.com/dofkj8qo6/image/upload/v1671673904/envelope_bbfs8x.png';


    return (
        <div>
            <nav className="jp-shadow navbar navbar-expand-lg navbar-dark MHW-font py-0" style={{ backdropFilter: "blur(10px)" }}>
                <a className="navbar-brand" href="/">
                    <span style={{ fontSize: "48px" }}>MHW</span>
                </a>

                <button className="navbar-toggler hamburger" type="button"
                    data-toggle="collapse" data-target="#Coll-id" aria-controls="Coll-id"
                    aria-expanded="false" aria-label="Toggle navigation" onClick={(e) => e.currentTarget.classList.toggle('is-active')}>

                    <div className="hamburger__container">
                        <div className="hamburger__inner"></div>
                        <div className="hamburger__hidden"></div>
                    </div>
                </button>

                <div className="collapse navbar-collapse" id="Coll-id" >
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link link link--elara" href="#"
                                id="weaponsDropdownLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                weapons
                            </a>
                        </li>
                        <li className="nav-item m-3 dropdown">
                            <a className="nav-link link link--elara" href="/Armor">
                                armor
                            </a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link link link--elara" href="#">
                                items</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto ml-5">
                        <li className="nav-item m-3">
                            <img src={gitHubImg} style={{ width: "25px" }} />
                        </li>
                        <li className="nav-item m-3">
                            <img src={linkedInImg} style={{ width: "25px" }} />
                        </li>
                        <li className="nav-item m-3">
                            <img src={emailImg} style={{ width: "25px" }} />
                        </li>
                    </ul>
                </div>


            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;
