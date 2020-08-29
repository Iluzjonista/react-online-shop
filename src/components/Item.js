import React, {Component} from "react";
import formatCurrency from "../utils/helper";
import {connect} from "react-redux";
import {fetchProducts, filterProduct} from "../actions/products";
import {addToCart} from "../actions/cart";
import FilterCamera from "./FilterCamera";
import FilterLens from "./FilterLens";
import FilterAcc from "./FilterAcc";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {withRouter} from 'react-router-dom'

class Item extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        let myurl = this.props.location.pathname
        let myurl2 = myurl.replace('/', '')
        return (
            <div className="container">
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>{myurl2}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <h2 className='text-center pb-2'>Available products</h2>
                <h2 className='text-center pb-2'>{myurl2}</h2>
                <div className="main-div">
                    {this.props.products.map((p, index) => (
                        <div key={index}>
                            {p.categories == myurl2 | myurl2 == '' ? (
                                <div className="product">
                                    <div className="image-container">
                                        <a href={`/` + p.id} style={{textDecoration: 'none'}}
                                        ><img
                                            src={`/images/${p.imageUrl}.jpg`}
                                            className="img-fluid"
                                            alt={p.productName}
                                        />
                                        </a>
                                    </div>
                                    <div className="cell colspan2">
                                        <h3 className="card-title">{p.productName}</h3>
                                        <div>
                                            <p className="price font-weight-bold">{formatCurrency(p.price)}</p>
                                            <p className="stock text-right"><b>Stock:</b> {p.stock} pcs</p></div>

                                        {p.categories == "camera" && <FilterCamera
                                            size={this.props.size}
                                            sort={this.props.sort}
                                            count={this.props.filteredProducts.length}
                                        />}{p.categories == "lens" && <FilterLens
                                        size={this.props.size}
                                        sort={this.props.sort}
                                        count={this.props.filteredProducts.length}
                                    />}{p.categories == "accessories" && <FilterAcc
                                        size={this.props.size}
                                        sort={this.props.sort}
                                        count={this.props.filteredProducts.length}
                                    />}

                                    </div>

                                    <div className="row">
                                        <div className="colors">
                                            <button className="btn btn-light">
                                                Like 0
                                            </button>
                                            <div className="dropdown">
                                                <button className="btn btn-light dropdown-toggle" type="button"
                                                        data-toggle="dropdown">Share <span
                                                    className="caret"> </span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="/">Facebook</a></li>
                                                    <li>
                                                        <div className='dropdown-divider'></div>
                                                    </li>
                                                    <li><a href="/">Twitter</a></li>
                                                </ul>
                                            </div>
                                            <button
                                                className="btn btn-light"
                                                onClick={() => this.props.addToCart(this.props.cartItems, p)}
                                            >
                                                <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                     className="bi bi-cart3"
                                                     fill="currentColor"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                </svg>
                                                Add to cart
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
    filteredProducts: state.products.filteredItems,
    sort: state.products.sort,
    size: state.products.size
});

export default withRouter(connect(mapStateToProps, {fetchProducts, addToCart})(Item));
