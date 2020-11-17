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

      {/* <DropdownButton
        title ="test"
        className={mobileView ? styles.mobileNavBar : "mr-3"}
        >
          <Dropdown.Item>Hey</Dropdown.Item>
        </DropdownButton> */}
      <NavDropdown
        title={<span className= {styles.textColor}>ABOUT US</span>}
        id="basic-nav-dropdown"
        style={{ colorRendering: "white" }}
        className={mobileView ? styles.mobileNavBar : "mr-3"}>

        <Link href={urls.pages.ourStory} passHref>
          <Item className = {styles.textColor}>Our Story</Item>
        </Link>
        <Link href={urls.pages.blogNews} passHref>
          <Item className = {styles.textColor}>Blog/News</Item>
        </Link>
        <Link href={urls.pages.hundredPromise} passHref>
          <Item className = {styles.textColor}>100% Promise</Item>
        </Link>
      </NavDropdown>


      <Nav.Link
        href={urls.pages.ourWork}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        OUR WORK
      </Nav.Link>


      <NavDropdown
        title={<span className= {styles.textColor}>GET INVOLVED</span>}
        id="basic-nav-dropdown"
        style={{ colorRendering: "white" }}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        <Link href={urls.pages.joinClassroom} passHref>
          <Item className = {styles.textColor}>Join the Classroom</Item>
        </Link>
        <Link href={urls.pages.joinLibrary} passHref>
          <Item className = {styles.textColor}>Join the Library</Item>
        </Link>
        <Link href={urls.pages.contactUs} passHref>
          <Item className = {styles.textColor}>Contact Us</Item>
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
        id={"sidebar"}
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
        style={{
          backgroundColor: "#00ae99",
          borderColor: "#00ae99",
          marginRight: "30px",
          width: "100px",
        }}
      >
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
        id="outer-container"
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
      </div>
        {!mobileView && (
          <Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              {navContents}
              {donateButton}
            </Nav>
          </Collapse>
        )}
        {mobileView && mobileNavContents}
      </BootstrapNavbar>
  );
};

export default NavBar;