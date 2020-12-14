import React from 'react';
import styled from 'styled-components';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export const Navbar1 = styled(Navbar)`
  background-color: #020001;
`;

const Navi = () => {
    return (
        <div>
            <Navbar1 expand="lg" variant="dark">
                <Navbar.Brand href="/">Youtube Music Pro</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="link">Link</Nav.Link>
                    <Nav.Link href="github">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar1>
        </div>
    )
}

export default Navi
