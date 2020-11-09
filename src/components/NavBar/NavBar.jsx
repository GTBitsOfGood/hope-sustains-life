import React from "react";
import styles from "./NavBar.module.css";
import {
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
  Image,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { push as Menu } from "react-burger-menu";
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
        title="ABOUT US"
        id="basic-nav-dropdown"
        style={{ colorRendering: "white" }}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        <Link href={urls.pages.ourStory} passHref>
          <Item>Our Story</Item>
        </Link>
        <Link href={urls.pages.blogNews} passHref>
          <Item>Blog/News</Item>
        </Link>
        <Link href={urls.pages.hundredPromise} passHref>
          <Item>100% Promise</Item>
        </Link>
      </NavDropdown>
      <Nav.Link
        href={urls.pages.ourWork}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        OUR WORK
      </Nav.Link>
      <NavDropdown
        title="GET INVOLVED"
        id="basic-nav-dropdown"
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        <Link href={urls.pages.joinClassroom} passHref>
          <Item>Join the Classroom</Item>
        </Link>
        <Link href={urls.pages.joinLibrary} passHref>
          <Item>Join the Library</Item>
        </Link>
        <Link href={urls.pages.contactUs} passHref>
          <Item>Contact Us</Item>
        </Link>
      </NavDropdown>
    </>
  );

  const mobileNavContents = (
    <>
      <Menu
        right
        burgerButtonClassName={styles.bmBurgerButton}
        burgerBarClassName={styles.bmBurgerBars}
        menuClassName={styles.bmMenu}
        crossButtonClassName={styles.bmCrossButton}
        crossClassName={styles.bmCross}
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
      >
        <main id="page-wrap"></main>
        {navContents}
      </Menu>
    </>
  );

  const donateButton = (
    <Link href={urls.pages.donate}>
      <Button
        className={mobileView ? styles.mobileDonateButton : styles.donateButton}
      >
        Donate
      </Button>
    </Link>
  );

  return (
    <div id="outer-container">
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
          {/* <Toggle aria-controls="basic-navbar-nav" /> */}
        </div>
        {!mobileView && (
          <Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              {navContents}
              {!mobileView && donateButton}
            </Nav>
          </Collapse>
        )}
      </BootstrapNavbar>
      {mobileView && (
        <BootstrapNavbar
          className="navbar-stuff"
          expand="md"
          fixed="top"
          variant="dark"
        >
          {mobileNavContents}
        </BootstrapNavbar>
      )}
    </div>
  );
};

export default NavBar;
