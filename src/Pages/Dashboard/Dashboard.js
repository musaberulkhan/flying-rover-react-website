import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css';
import DashboardHome from './DashboardHome/DashboardHome';
import GiveReview from './GiveReview/GiveReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <header className="header text-white" id="header">
               <p className="mb-0"> Welcome back, {user?.displayName}</p>
               <Link className="text-white btn" to="/"><i class="fas fa-arrow-left me-2"></i>Back to Shopping</Link>
            </header>
            <div className="l-navbar" id="nav-bar">
                <Sidebar></Sidebar>
            </div>
            <div className="dashboard-body height-100 p-2">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/give-review`}>
                        <GiveReview></GiveReview>
                    </Route>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-all-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    {/* <AdminRoute path={`${path}/addDoctor`}>
                        
                    </AdminRoute> */}
                </Switch>
            </div>


        </div>
    );
};

export default Dashboard;