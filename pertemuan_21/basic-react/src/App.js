import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Login, Home, Register} from "./pages";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                    </ul>
                </nav>
            <Switch>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
};

export default App;