import React, {Component} from "react";
import formatCurrency from "../utils/helper";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/products";
import {addToCart} from "../actions/cart";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import FilterCamera from "./FilterCamera";
import FilterLens from "./FilterLens";
import FilterAcc from "./FilterAcc";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Single extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                {this.props.products.map((p, index) => (<div className="container">
                    <div className="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Products</Breadcrumb.Item>
                            <Breadcrumb.Item active>{p.productName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div className="main-div">
                        <div className="product" key={index}>
                            <div className="image-container">
                                another
                                <a href={`/${p.id}`}
                                   style={{textDecoration: 'none'}}
                                ><img
                                    src={`/images/${p.imageUrl}.jpg`}
                                    className="img-fluid"
                                    alt={p.productName}
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
    filteredProducts: state.products.filteredItems,
    sort: state.products.sort,
    size: state.products.size
});

export default connect(mapStateToProps, {fetchProducts, addToCart})(Single);