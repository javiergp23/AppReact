import React from "react";


const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="." alt="nav">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="." alt="home">Home</a>
                     </li>
                    <li className="nav-item">
                    <a className="nav-link" href="." alt="features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="." alt="pricing">Pricing</a>
                     </li>
                     <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-cart-arrow-down"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                            </ul>
                        </div>
                     </li>
                </ul>
                </div>
            </div>
        </nav>
          
    )
}

export default NavBar;