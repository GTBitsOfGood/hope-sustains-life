import React from "react";
import {
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
  Image,
  Button
} from "react-bootstrap";
import urls from "../../../utils/urls";
import Link from "next/link";
import { displayMobileView } from "../../../utils/screen";

const { Brand, Toggle, Collapse } = BootstrapNavbar;

const NavBar = () => {
  const mobileView = displayMobileView();
  const { Item } = NavDropdown;
  const navContents = (
    <>
      <NavDropdown
        renderMenuOnMount={!mobileView}
        title="ABOUT US"
        id="basic-nav-dropdown"
        className="mr-3"
      >
        <Link href={urls.pages.ourStory} passHref>
          <Item>
            Our Story
          </Item>
        </Link>
        <Link href={urls.pages.blogNews} passHref>
          <Item>
            Blog/News
          </Item>
        </Link>
        <Link href={urls.pages.hundredPromise} passHref>
          <Item>
            100% Promise
          </Item>
        </Link>
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
        <Link href={urls.pages.joinClassroom} passHref>
          <Item>
            Join the Classroom
          </Item>
        </Link>
        <Link href={urls.pages.joinLibrary} passHref>
          <Item>
            Join the Library
          </Item>
        </Link>
        <Link href={urls.pages.contactUs} passHref>
          <Item>
            Contact Us
          </Item>
        </Link>
      </NavDropdown>
    </>
  );

  const donateButton = (
    <Link href={urls.pages.donate}>
      <Button style={{backgroundColor: "#00ae99", marginRight: "30px", width: "100px"}}>
        Donate
      </Button>
    </Link>
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
