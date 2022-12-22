
const SingleArmor = (props) => {

    let data = props.props;

    console.log(data);

    return (
        <div className="col-4">
            <div className="jp-shadow MHW-font bg-blur text-light p-4 mt-5 ml-5" style={{ minWidth: "18rem", borderRadius: "10px", minheight: "55vh" }}>
                <img className="card-img-top" src={data.assets.imageFemale} alt="Card image cap" style={{ borderRadius: "10px" }} />
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
                    <div className="col"><h6>base {data.defense.base}</h6></div>
                </div>
                <div className="row mt-2" style={{ borderBottom: "2px solid rgba(150,150,150,.5)", borderRadius: "5px" }}>
                    <div className="col"><h6>Augmented {data.defense.augmented}</h6></div>
                    <div className="col"><h6>max {data.defense.max}</h6></div>
                </div>
                <div className="row mt-2">
                    <div className="col"><h6>Resistance:</h6></div>
                </div>



            </div>
        </div>
    )

}
export default SingleArmor;