import React from "react";
import {Container} from "react-bootstrap";


class Footer extends React.Component {
    render() {
        return (
            <div className="bg-dark mt-5">
                <Container>
                    <div className="container footer-copyright text-center py-3 text-white">
                        © 2020 Copyright: Adam Uklański s12708
                    </div>
                </Container>
            </div>

        );
    }
}

export default Footer;
