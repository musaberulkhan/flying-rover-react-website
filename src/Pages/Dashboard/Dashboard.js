import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import './Dashboard.css';
import DashboardHome from './DashboardHome/DashboardHome';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="dashboard">
            <header className="header" id="header">
                aaaaaaaaaaaaaaaaaaaa
            </header>
            <div className="l-navbar" id="nav-bar">
                <Sidebar></Sidebar>
            </div>
            <div className="height-100 bg-light">
                <h4>Main Components</h4>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>

                    </Route>
                    {/* <AdminRoute path={`${path}/addDoctor`}>
                        
                    </AdminRoute> */}
                </Switch>
            </div>


        </div>
    );
};

export default Dashboard;