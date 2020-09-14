import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, NavProps } from "react-bootstrap";

const { Brand, Toggle, Collapse} = Navbar;

const NavBar = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Brand href="#home">React-Bootstrap</Brand>
    <Toggle aria-controls="basic-navbar-nav" />
    <Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
            <NavDropdown.Item href="urls.pages.app.ourstory">OUR STORY</NavDropdown.Item>
            <NavDropdown.Item href="urls.pages.app.blognews">BLOG/NEWS</NavDropdown.Item>
            <NavDropdown.Item href="urls.pages.app.hundredpromise">100% PROMISE</NavDropdown.Item>
        </NavDropdown>
        <Link><Nav.Link href="#home">OUR WORK</Nav.Link></Link>
        <NavDropdown title="GET INVOLVED" id="basic-nav-dropdown">
            <NavDropdown.Item href="urls.pages.app.joinclassroom">JOIN THE CLASSROOM</NavDropdown.Item>
            <NavDropdown.Item href="urls.pages.app.joinlibrary">JOIN THE LIBRARY</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Collapse>
    </Navbar>
    );
};

  export default NavBar;
