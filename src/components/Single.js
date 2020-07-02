import React, {Component} from "react";
import formatCurrency from "../utils/helper";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/products";
import {addToCart} from "../actions/cart";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {FETCH_PRODUCTS} from "../actions/types";

class SingleProduct extends Component {
    constructor(props) {
    super(props);
}
    componentDidMount() {
        this.props.fetchProducts();
        console.log('asd');
        console.log(this.props.length);
    }

    render() {
        return (
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>Product name</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="main-div">
                    {this.props.products.id}
                    test

                    {this.props.products.map((p, index) => (
                        <div className="product" key={index}>
                            <div className="image-container">

                                <a href={`/product/${p.id}`}
                                   style={{ textDecoration: 'none' }}
                                ><img
                                    src={`/images/${p.imageUrl}.jpg`}
                                    className="img-fluid"
                                    alt={p.productName}
                                />
                                </a>
                            </div>
                        </div>
                        ))}
                        another
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        products: state.products.filteredItems,
        cartItems: state.cart.items
});

export default connect(mapStateToProps, {fetchProducts, addToCart})(SingleProduct);