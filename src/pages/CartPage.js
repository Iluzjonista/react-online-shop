import React, {Component} from "react";
import formatCurrency from "../utils/helper";
import {connect} from "react-redux";
import {removeFromCart} from "../actions/cart";
import Button from "react-bootstrap/Button";

class CartPage extends Component {


    render() {
        const {cartItems} = this.props;
        return (
            <div className="container mt-75">
                <div className="cart">
                    {cartItems.length === 0
                        ? "Cart is empty"
                        : `You have ${cartItems.length} item(s) in the cart`}
                    <div>
                        <h2>Your Cart Items</h2>
                        {cartItems.length > 0 && (
                            <table className="table table-hover checkout">
                                <tbody className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Qty.</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                                {cartItems.map((item, index) => (
                                    <tr>
                                        <th>{index+1}</th>
                                        <th>{item.productName}</th>
                                        <th>{item.count}</th>
                                        <th>{formatCurrency(item.price)}</th>
                                        <th>{formatCurrency(item.price * item.count)}</th>
                                        <th><Button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.props.removeFromCart(this.props.cartItems, item);
                                            }}
                                        >x</Button> </th>
                                    </tr>

                                ))}
                                <tr>
                                    <th colSpan="2">Total</th>
                                    <th className="text-center"> </th>
                                    <th></th>
                                    <th className="text-right price">
                                        {formatCurrency(
                                            cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                        )}</th>
                                </tr>
                                </tbody>
                            </table>
                        )}
                        <button onClick={() => alert("TODO: create checkout view")}
                                className="btn">Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};
const mapStateToProps = state => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps, {removeFromCart})(CartPage);