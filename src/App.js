import './App.css';
import Home from './pages/Home';
import React from "react";
import Front from "./components/Front"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./components/Register";


import Login from "./components/Login";

function App() {
  return (
    <div>


      <Router>
        <div>
          {/* < Front/> */}

          <ul>
            <div className=" Front_button_class">
              <Link to="/">
                <button className="button btn btn-primary front-btn  btn-lg" type="button">
                  Home
                </button>
              </Link>
              <Link to="/register">
                <button className="button btn btn-primary front-btn btn-lg" type="button">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="button btn btn-primary  front-btn btn-lg" type="button">
                  Login
                </button>
              </Link>
            </div>
          </ul>

          <Switch>
            <Route exact path="/">
              <Front />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>


  );
}

export default App;