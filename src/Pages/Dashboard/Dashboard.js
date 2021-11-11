import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css';
import DashboardHome from './DashboardHome/DashboardHome';
import Pay from './Pay/Pay';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <header className="header text-white" id="header">
                Welcome back, {user?.displayName}
            </header>
            <div className="l-navbar" id="nav-bar">
                <Sidebar></Sidebar>
            </div>
            <div className="height-100 bg-light p-2">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    {/* <AdminRoute path={`${path}/addDoctor`}>
                        
                    </AdminRoute> */}
                </Switch>
            </div>


        </div>
    );
};

export default Dashboard;