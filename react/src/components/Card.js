import { Link } from "react-router-dom"

const Card =(props)=> {

    return (
        <div className="col">
            <Link to={`${props.path}/${props.id}`} className="card-link text-decoration-none">
                <div className="card">
                    <img src= {`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image" />
                    <div className="card-body">
                        <h3 className="card-title">{props.name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card