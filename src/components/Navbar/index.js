import React from 'react';
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import { Navbar1, NavbarBrand, toggleFullScreen } from './navbarelements';

const Navi = () => {
    return (
        <div>
            <Navbar1 expand="md" variant="dark">
                <NavbarBrand as={Link} to="/">Youtube Music Pro</NavbarBrand>
                {/* <NavbarBrand href="/">Youtube Music Pro</NavbarBrand> */}
                <Navbar1.Toggle aria-controls="basic-navbar-nav" />
                <Navbar1.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="link">Link</Nav.Link>
                    <Nav.Link as={Link} to="github">GitHub</Nav.Link>
                    <Nav.Link onClick={toggleFullScreen}>F</Nav.Link>
                    </Nav>
                </Navbar1.Collapse>
            </Navbar1>
        </div>
    )
}

export default Navi
