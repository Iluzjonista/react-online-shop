import React, {Fragment} from 'react';
import Products from "../components/Products";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {filterProducts} from "../actions/products";

class Main extends React.Component {
    render() {

        return (
            <Fragment>
                <Container className='mt-75'>
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.filteredProducts.length === 0 && "There is no products in our shop. Sorry."}
                            <Products products={this.props.filteredProducts}/>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        allItems: state.products.items,
        cartItems: state.cart.items,
        filteredProducts: state.products.filteredItems,
        categories: state.products.categories,
        size: state.products.size
    };
};
export default withRouter(connect(mapStateToProps, {filterProducts})(Main));