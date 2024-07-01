import { Link } from "react-router-dom"

const Card =(props)=> {

    return (
        <div className="col card-div" id="cardDiv">
            <Link to={`${props.path}/${props.id}`} className="card-link text-decoration-none">
                <div className="card" id="card">
                    <img src= {`/images/${props.imgUrl}`} alt={props.name} className="img-fluid card-image" id="cardImage" />
                    <div className="card-body" id="cardBody">
                        <h3 className="card-title text-capitalize">{props.name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card