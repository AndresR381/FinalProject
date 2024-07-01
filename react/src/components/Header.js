import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 text-capitalize text-md-center">
                            <Link to='/' className="site-title text-decoration-none" id="siteTitle">
                                miTunes
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around">
                            <Link to='/home' className="nav-link text-capitalize">home</Link>
                            <Link to='/artist' className="nav-link text-capitalize">artists</Link>
                            <Link to='/band' className="nav-link text-capitalize">bands</Link>
                            <Link to='/song' className="nav-link text-capitalize">songs</Link>
                            <Link to='/userform' className="nav-link text-capitalize">log-in/sign-up</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header