import React from "react";
import {
    Container,
    Navbar,
} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";
import Filter from "./Filter";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";

//Menu z wykorzystaniem react-router oraz react-bootstrap

class Header extends React.Component {
    handleSearch(e) {
        e.preventDefault();
        if (e.charCode === 13 && e.target.value.length > 0) {
            let encodeUri = encodeURIComponent(e.target.value);
            this.props.router.push("/?q=" + encodeUri);
            e.target.value = "";
        } else {
            e.target.focus();
        }
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/">React online shop</Navbar.Brand>
                    <span className="app-bar-divider"></span>
                    <div className="input-control text">
                        <input type="text" placeholder="Search..."
                               className="input-control"></input>
                    </div>
                    <Button href="/cart" className='btn btn-light'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart3"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                        Cart
                    </Button>
                    <Filter
                        size={this.props.size}
                        sort={this.props.sort}
                        count={this.props.filteredProducts.length}
                    />
                </Container>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.items,
        filteredProducts: state.products.filteredItems,
        sort: state.products.sort,
        size: state.products.size
    };
};
export default connect(mapStateToProps)(Header);
