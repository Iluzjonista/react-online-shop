import React, {Fragment} from 'react';

import Products from "../components/Products";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";

class Main extends React.Component {
    render() {
        return (
            <Fragment>
                {/*<Header cartItems={this.props.cartItems}/>*/}

                <Container className='mt-75'>
                    <div className="row">
                        <div className="col-md-12">
                            <Products products={this.props.filteredProducts}/>
                        </div>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

// export default Main;
const mapStateToProps = state => {
    return {
        cartItems: state.cart.items,
        filteredProducts: state.products.filteredItems,
        categories: state.products.categories
    };
};

export default connect(mapStateToProps)(Main);