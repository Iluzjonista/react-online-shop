import React, {Fragment} from 'react';

import Single from "../components/Single";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import Products from "../components/Products";

class SingleProduct extends React.Component {
    render() {
        return (
            <Fragment>
                {/*<Header cartItems={this.props.cartItems}/>*/}

                <Container className='mt-75'>
                    <div className="row">
                        <div className="col-md-12">
                            <Single products={this.props.filteredSingle}/>
                        </div>

                    </div>
                </Container>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        cartItems: state.cart.items,
        filteredProducts: state.products.filteredItems,
        filteredSingle: state.products.filteredItems,
        categories: state.products.categories
    };
};

export default connect(mapStateToProps)(SingleProduct);