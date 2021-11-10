import './App.css';
import Header from './Pages/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="app">     
      <Router>     
        <div> 
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/users">
              
            </Route>
            <Route path="/">
             
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
