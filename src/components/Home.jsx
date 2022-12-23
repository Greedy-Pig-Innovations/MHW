import React from "react";
import ReactPlayer from 'react-player/youtube';

const companyImg = 'https://res.cloudinary.com/dofkj8qo6/image/upload/v1671824864/GreedyPigsInnovations_thaxsd.png';
const Iceborne_url = 'https://youtu.be/m6guHcGEqX8';
const MHW_url = 'https://youtu.be/Ro6r15wzp2o';

const Home = () => {
    return (
        <div className="container-lg" style={{ textAlign: "center" }}>
            <div className="row">
                <div className="col-3">
                    <div className="p-4 bg-blur text-light MHW-font m-5 jp-shadow" style={{borderRadius: "10px"}}>
                        <div className="">ABOUT PROJECT</div>
                        <div className="mt-5 row d-flex justify-content-center">
                            <img src={companyImg} style={{ maxWidth: "10vw" }} className="jp-shadow" />
                        </div>
                        <div className="row ">
                            <p className="px-5 mt-5">DEMO website, built with React and Bootstrap.
                                All data comes from the public Monster Hunter World API found <a href='https://docs.mhw-db.com/' target="_blank" className=" link link--elara" style={{ width: "50px" }}>HERE</a></p>
                            <p>We are showcasing the Armor and Weapons data, as a personal project. Our lead developer is Nelson Luna, with assistance from Juan Perez. We will be continuing our efforts towards new projects that will be available on our GitHub. Make sure to follow us.</p>

                            <p style={{ fontSize: "10px" ,margin: "0 auto"}}>P.S. All rights reserved,  Monster Hunter world official website:<a href="https://www.monsterhunterworld.com/" target="_blank" className="link link--elara" style={{ width: "50px" }}> HERE</a></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="p-2 bg-blur text-light MHW-font m-5 jp-shadow" style={{ height: "80vh", overflow: "auto", overflowX: "hidden", position: "absolute",borderRadius: "10px" }}>
                        <div className="card-title" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}> <h2>Monster Hunter World</h2></div>
                        <div className="p-2 pb-3 d-flex justify-content-center" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                            <ReactPlayer url={MHW_url} width={"50vw"} height={"50vh"} volume={10} controls={true} />
                        </div>
                        <div className="px-5 mt-3 pb-5" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>Monster Hunter: World sees players gear up to venture on quests to battle against fearsome monsters, progressively improving their hunting abilities as they play. Loot collected from fallen foes can be used to create new equipment and armor upgrades as players seamlessly move across map areas that comprise the living ecosystems. The landscape and its diverse inhabitants play a critical role as players strategically use the surrounding environment to their advantage. Hunters must use their cunning and abilities to survive the intense and evolving fights as they battle to become the ultimate hunter!.</div>

                        <div className="card-title pt-5" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}> <h2>Iceborne Expansion </h2></div>
                        <div className="p-2 pb-3 d-flex justify-content-center" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                            <ReactPlayer url={Iceborne_url} width={"50vw"} height={"50vh"} volume={10} controls={true} />
                        </div>
                        <div className="px-5 mt-3">The latest entry in the critically acclaimed 40 million unit selling action RPG series, Monster Hunter: World introduces a living, breathing ecosystem in which players take on the role of a hunter that seeks and slays ferocious beasts in heart-pounding battles. Venture on quests alone or with up to three other hunters in a newly designed online drop-in multiplayer system which allows cross-region cooperative play between Japan and the West, uniting the global player base for the first time ever. Monster Hunter: World will also be the first game in the series with a worldwide simultaneous launch window and is planned for release on PlayStation® 4 computer entertainment system and Xbox One on January 26, 2018. A PC release will follow at a later date.</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;