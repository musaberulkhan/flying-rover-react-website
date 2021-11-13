import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
    let { url } = useRouteMatch();
    const { admin, logOut } = useAuth();  
    return (
        <div>
            <nav className="nav">
                <div> <Link to="/dashboard" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Flying Rover<br />Admin Panel</span> </Link>
                    {
                        admin ? (
                            <div className="nav_list">
                                <Link to={`${url}/manage-all-orders`} className="nav_link"> <i class="far fa-list-alt me-1"></i> <span className="nav_link_text">Manage All Orders</span></Link>
                                <Link to={`${url}/add-product`} className="nav_link"> <i class="fas fa-plus-square me-1"></i> <span className="nav_link_text">Add A Product</span></Link>
                                <Link to={`${url}/make-admin`} className="nav_link"> <i class="fas fa-users-cog me-1"></i> <span className="nav_link_text">Make Admin</span></Link>
                                <Link to={`${url}/manage-products`} className="nav_link"> <i class="fas fa-bars me-1"></i> <span className="nav_link_text">Manage Products</span></Link>
                                <button onClick={logOut} className="nav_link btn btn-logout"> <i class="fas fa-sign-out-alt me-1"></i> <span className="nav_link_text">Logout</span></button>
                            </div>
                        ) :
                            (<div className="nav_list">
                                <Link to={url} className="nav_link"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_link_text">Home</span> </Link>
                                <Link to={`${url}/pay`} className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_link_text">Pay</span> </Link>
                                <Link to={`${url}/my-orders`} className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_link_text">My Orders</span> </Link>
                                <Link to={`${url}/give-review`} className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_link_text">Give Review</span> </Link>
                                <button onClick={logOut} className="nav_link btn btn-logout"> <i className='bx bx-folder nav_icon'></i> <span className="nav_link_text">Logout</span> </button>
                            </div>
                            )
                    }



                </div>
            </nav>
        </div>
    );
};

export default Sidebar;