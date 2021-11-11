import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/">
                        <img className="img-fluid navbar-logo" src={logo} alt="" />
                        Flying Rover</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/s">Pricing</NavLink>
                            <NavLink className="nav-link" to="/s">Disabled</NavLink>
                        </div>                        
                    </div>
                    <div>
                            {
                                user?.email ? (
                                    <div className="d-flex align-items-center">
                                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                                        <p className="mb-0">{user?.email}</p>
                                        <button className="btn nav-link" onClick={logOut} >Log Out</button>
                                    </div>

                                )
                                    :
                                    (
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    )
                            }

                        </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;