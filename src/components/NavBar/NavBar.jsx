import React from "react";
import {
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import urls from "../../../utils/urls";
import { displayMobileView } from "../../../utils/screen";

const { Brand, Toggle, Collapse } = BootstrapNavbar;

const NavBar = () => {
  const mobileView = displayMobileView();

  const navContents = (
    <>
      <NavDropdown
        renderMenuOnMount={!mobileView}
        title="ABOUT US"
        id="basic-nav-dropdown"
        className="mr-3"
      >
        <NavDropdown.Item href={urls.pages.ourStory}>
          OUR STORY
        </NavDropdown.Item>
        <NavDropdown.Item href={urls.pages.blogNews}>
          BLOG/NEWS
        </NavDropdown.Item>
        <NavDropdown.Item href={urls.pages.hundredPromise}>
          100% PROMISE
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href={urls.pages.ourWork} className="mr-3">
        OUR WORK
      </Nav.Link>
      <NavDropdown
        renderMenuOnMount={!mobileView}
        title="GET INVOLVED"
        id="basic-nav-dropdown"
        className="mr-3"
      >
        <NavDropdown.Item href={urls.pages.joinClassroom}>
          JOIN THE CLASSROOM
        </NavDropdown.Item>
        <NavDropdown.Item href={urls.pages.joinLibrary}>
          JOIN THE LIBRARY
        </NavDropdown.Item>
        <NavDropdown.Item href={urls.pages.contactUs}>
          CONTACT US
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const donateButton = (
    <Nav.Link href={urls.pages.donate} className="btn-success">
      Donate
    </Nav.Link>
  );

  return (
    <BootstrapNavbar
      className="navbar-stuff"
      expand="md"
      fixed="top"
      variant="dark"
    >
      <Brand href="/">
        <Image
          src="/static/hsl-logo-transparent.png"
          className="large-logo"
        ></Image>
        <Image
          src="/static/hsl-logo-transparent-mobile.png"
          className="mobile-logo"
        ></Image>
      </Brand>
      <div className="d-flex flex-row">
        {mobileView && donateButton}
        <Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          {navContents}
          {!mobileView && donateButton}
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
