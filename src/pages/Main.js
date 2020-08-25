import React, {Fragment} from 'react';
import Products from "../components/Products";
import Single from "../components/Single";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";

class Main extends React.Component {
    render() {

        return (
            <Fragment>
                <Container className='mt-75'>
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.filteredProducts.length === 0 && "There is no products in our shop. Sorry."}
                            {/*{this.props.filteredProducts.length === 1 ?*/}
                            {/*    <Single products={this.props.filteredSingle}/> :*/}
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
        filteredSingle: state.products.filteredItems,
        categories: state.products.categories,
        size: state.products.size
    };
};
export default connect(mapStateToProps)(Main);