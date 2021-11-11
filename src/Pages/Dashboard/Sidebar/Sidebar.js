import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    let { url } = useRouteMatch();

    return (
        <div>
            <nav className="nav">
                <div> <a href="#" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Flying Rover<br/>Admin Panel</span> </a>
                    <div className="nav_list">
                        <Link to="/" className="nav_link"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Home</span> </Link>
                        <Link to={`${url}/pay`} className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Pay</span> </Link>
                        <Link to="/my-orders" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">My Orders</span> </Link>
                        <Link to="/review" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Review</span> </Link>

                        <Link to="/" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Make All Orders</span> </Link>
                        <Link to="/" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Add A Product</span> </Link>
                        <Link to="/" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Make Admin</span> </Link>
                        <Link to="/" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Manage Products</span> </Link>
                        <Link to="/" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Logout</span> </Link>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;