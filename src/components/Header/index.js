import React from "react"
function Header() {
    return (
        <>
        <header>
            {/* <h5> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about me">About Me</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact me" tabindex="-1" aria-current="true">Contact
                                Me</a>
                            </li>
                        </ul>
                        {/* <!-- <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> --> */}

                    </div>
                </div>
            </nav>

            {/* <!-- navigation --> */}
            {/* <nav>

            <a href="#About Me">About Me</a> |
            <a href="#My Work">My Work</a> |
            <a href="#Contact Me">Contact Me</a> |
            <a href="#Resume">Resume</a>
        </nav>  */}
            {/* </h5> */}

            
            {/* <!-- End homeFullScreen --> */}
        </header>
        {/* // <!-- End Header --> */}
        <div id="homeFullScreen">
                <div className="header-text">
                    <h1>felicia harris-foster</h1>

                    <h1>fharris-foster consulting, LLC.</h1>
                    <div className="vertical-line"></div>
                    <p>
                        EDUCATIONAL TECHNOLOGIST CONSULTANT | INSTRUCTIONAL DESIGNER
                <br />
                PROGRAM/PROJECT MANAGEMENT | ADJUNCT PROFESSOR
            </p>
                </div>
                {/* <!-- End HeaderText --> */}
            </div>
            </>
    )
}


export default Header