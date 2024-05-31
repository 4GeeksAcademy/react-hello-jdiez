import React from "react";


//create your first component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid dl-flex justify-content-between">
                <div>

                    <a className="navbar-brand text-light" href="#">Javier Diez</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-light" href="#">Main</a>
                            <a className="nav-link text-light" href="#">Cards</a>
                            <a className="nav-link text-light">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar