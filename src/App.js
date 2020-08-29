import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage"
import Main from "./pages/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Route component={Header}/>
                <Switch>
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
                <Route component={Footer}/>
            </Router>
        );
    }
}

export default App;
