import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage"
import Main from "./pages/Main";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Products from "./components/Products";

class App extends Component {
    render() {
        return (
            <Router>
                <Route component={Header}/>
                <Switch>
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/(|camera|lens|accessories|camera/:id|lens/:id|accessories/:id)">
                        <Main/>
                    </Route>
                    <Route path="/(camera/:id|lens/:id|accessories/:id)">
                        <Products/>
                    </Route>
                </Switch>
                <Route component={Footer}/>
            </Router>
        );
    }
}

export default App;
