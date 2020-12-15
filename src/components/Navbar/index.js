import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Navbar1, NavbarBrand, toggleFullScreen } from './navbarelements';

const Navi = () => {
    return (
        <div>
            <Navbar1 expand="md" variant="dark">
                <NavbarBrand href="/">Youtube Music Pro</NavbarBrand>
                <Navbar1.Toggle aria-controls="basic-navbar-nav" />
                <Navbar1.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="link">Link</Nav.Link>
                    <Nav.Link href="github">GitHub</Nav.Link>
                    <Nav.Link onClick={toggleFullScreen}>F</Nav.Link>
                    </Nav>
                </Navbar1.Collapse>
            </Navbar1>
        </div>
    )
}

export default Navi
