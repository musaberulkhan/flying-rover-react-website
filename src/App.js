import './App.css';
import Header from './Pages/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Products/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import PurchaseSuccessful from './Pages/Products/Purchase/PurchaseSuccessful/PurchaseSuccessful';
import Register from './Pages/Register/Register';


function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/purchase/:id">
                <Purchase></Purchase>
              </PrivateRoute>
              <PrivateRoute path="/purchaseSuccessful">
                <PurchaseSuccessful></PurchaseSuccessful>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthProvider>

  );
}

export default App;
