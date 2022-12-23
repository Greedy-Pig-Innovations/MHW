import { assignSlots } from "./helperFunctions";

const SingleArmor = (props) => {

    let data = props.props;

    console.log(data);

    return (
        <div className="col">
            <div className="jp-shadow MHW-font bg-blur text-light p-4 mt-5 ml-5" style={{ minWidth: "18rem", borderRadius: "10px", minheight: "55vh" }}>
                <img src={data.assets.imageFemale} alt="Card image cap" style={{ borderRadius: "10px", width: "150px" }} />
                <div className="mt-3" style={{ fontSize: "24px" }}>{data.name}</div>
                <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col"><h6>rarity</h6></div>
                    <div className="col"><h6    >{data.rarity}</h6></div>
                </div>
                <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col"><h6>Rank</h6></div>
                    <div className="col"><h6>{data.rank}</h6></div>
                </div>
                <div className="row mt-2">
                    <div className="col"><h6>Defense:</h6></div>
                </div>
                <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col"><h6>base {data.defense.base}</h6></div>
                    <div className="col"><h6>Augmented {data.defense.augmented}</h6></div>
                    <div className="col"><h6>max {data.defense.max}</h6></div>
                </div>
                <div className="row mt-2">
                    <div className="col"><h6>Resistances:</h6></div>
                </div>
                <div className="row mt-2 ">
                    <div className="col p-0 ml-3"><h6>Fire {data.resistances.fire}</h6></div>
                    <div className="col p-0 m-0"><h6>Water {data.resistances.water}</h6></div>
                    <div className="col p-0 m-0"><h6>Ice {data.resistances.ice}</h6></div>
                    <div className="col p-0 ml-3"><h6>Thunder {data.resistances.thunder}</h6></div>
                    <div className="col p-0 m-0"><h6>Dragon {data.resistances.dragon}</h6></div>
                </div>

                <div className="row mt-2 " style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                </div>
                <div className="row mt-2 " style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col p-0 ml-3"><h6>slots {
                        data.slots.length ? data.slots.map((slot, idx) => {
                            return assignSlots(slot.rank, idx);
                        }) : <></>}</h6></div>
                </div>

                <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col"><h6>SKILLS:</h6></div>
                </div>

                {data.skills ? data.skills.map((dt, index) => {
                    return (
                        <div key={index}>
                            <div className="row mt-2">
                                {console.log(dt)}
                                <div className="col p-0 ml-3"><h6>{dt.skillName}:</h6></div>
                            </div>

                            <div className="row mt-2 " style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                                {console.log(dt)}
                                <div className="col p-0 ml-5"><h6>{dt.description}</h6></div>
                            </div>

                        </div>
                    )
                }) : (<></>)}



            </div>

        </div>
    )

}
export default SingleArmor;