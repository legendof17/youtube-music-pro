import React from 'react';
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import { Navbar1, NavbarBrand, toggleFullScreen, Copyright } from './navbarelements';

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
                    {/* <Nav.Link as={Link} to="Legendof17">Legendof17</Nav.Link> */}
                    <Nav.Link href={"https://github.com/legendof17"}>Legendof17</Nav.Link>
                    {/* <Nav.Link as={Link} to="github">GitHub</Nav.Link> */}
                    <Nav.Link href={"https://github.com/legendof17/youtube-music-pro"}>GitHub</Nav.Link>
                    {/* <Nav.Link onClick={toggleFullScreen}>© JASM 2020</Nav.Link> */}
                    </Nav>
                    <Copyright onClick={toggleFullScreen}>© JASM 2020</Copyright>
                </Navbar1.Collapse>
            </Navbar1>
        </div>
    )
}

export default Navi
