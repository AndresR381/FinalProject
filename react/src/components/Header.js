import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 text-capitalize text-md-center">
                            <Link to='/' className="text-decoration-none">
                                myTunes
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around">
                            <Link to='/home'>home</Link>
                            <Link to='/artist'>artists</Link>
                            <Link to='/band'>bands</Link>
                            <Link to='/song'>songs</Link>
                            <Link to='/userform'>log-in/sign-up</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header