import React, {Component} from "react";
import {connect} from "react-redux";
import {filterProducts} from "../actions/products";
import ReactDOM from "react-dom";
import { Route , withRouter} from 'react-router-dom';

class Filter extends Component {
    render() {
        const {categories} = this.props;
        return (
            <div className="form-group m-0">
                <select
                    className="form-control"
                    id="categorySelect"
                    value={categories}
                    onChange={e =>
                        this.props.filterProducts(this.props.products, e.target.value) &&
                        this.props.history.push(`/${e.target.value}`)
                    }

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

export default withRouter(connect(mapStateToProps, {filterProducts}) (
    Filter)
);
