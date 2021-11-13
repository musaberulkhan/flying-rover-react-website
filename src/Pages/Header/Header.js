import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <div className="navbar-nav fw">
                            <NavLink className="nav-link" to="/"><i className="fas fa-home me-1"></i>Home</NavLink>
                            <NavLink className="nav-link" to="/products"><i className="fas fa-th-list me-1"></i>Products</NavLink>
                            <NavLink className="nav-link" to="/training"><i className="fas fa-graduation-cap me-1"></i>Training</NavLink>
                            <NavLink className="nav-link" to="/about"><i className="fas fa-info-circle me-1"></i>About</NavLink>
                        </div>                        
                    </div>
                    <div>
                            {
                                user?.email ? (
                                    <div className="d-flex align-items-center">
                                        <NavLink className="nav-link text-success fw-bold" to="/dashboard"><i className="fas fa-user-cog me-1"></i>Dashboard</NavLink>
                                        <p className="mb-0">{user?.displayName}</p>
                                        <button className="btn nav-link text-dark" onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i>Log Out</button>
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