import React, {Component} from "react";
import {connect} from "react-redux";
import {filterProducts} from "../actions/products";

class Filter extends Component {
    render() {
        const {categories} = this.props;
        return (
            <div className="form-group m-0">
                <select
                    className="form-control"
                    id="categorySelect"
                    onChange={e =>
                        this.props.filterProducts(this.props.products, e.target.value)
                    }
                    value={categories}
                >
                    <option value="">All</option>
                    <option value="camera">Camera</option>
                    <option value="lens">Lens</option>
                    <option value="accessories">Accessories</option>
                </select>
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