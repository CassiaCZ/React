import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <Nav className="m-auto" navbar>
                        <NavbarBrand href="/">Cartão Fidelidade</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <NavItem>
                                <NavLink href='/'>Home</NavLink>
                            </NavItem>
                        </Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

