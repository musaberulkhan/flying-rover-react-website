import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="#">
                        <img className="img-fluid navbar-logo" src={logo} alt="" />
                        Flying Rover</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" to="#">Home</NavLink>
                            <NavLink className="nav-link" to="#">Features</NavLink>
                            <NavLink className="nav-link" to="#">Pricing</NavLink>
                            <NavLink className="nav-link" to="">Disabled</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;