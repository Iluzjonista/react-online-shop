import React, {Component} from "react";
import {connect} from "react-redux";
import {filterProducts} from "../actions/products";
import {Link} from "react-router-dom";

class Filter extends Component {
    render() {
        const {categories} = this.props;
        return (
            <div className="form-group m-0">
                <Link to={'/lens'}>
                    <button
                        className="btn btn-outline-dark"
                        onClick={e =>
                            this.props.filterProducts(this.props.products, e.target.value)
                        }
                        value='lens'
                    >
                        Lens
                    </button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
});

export default connect(mapStateToProps, {filterProducts})(
    Filter
);