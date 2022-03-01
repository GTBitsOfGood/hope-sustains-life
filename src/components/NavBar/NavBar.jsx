import React, { useState } from "react";
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

export default function NavBar() {
  const mobileView = displayMobileView();
  const { Item } = NavDropdown;
  const [isAboutHovered, setAboutHovered] = useState(false);
  const [isInvolvedHovered, setInvolvedHovered] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [isInvolvedClicked, setInvolvedClicked] = useState(false);

  const navContents = (
    <>
      <NavDropdown
        title={<span className={styles.textColor}>ABOUT US</span>}
        id="basic-nav-dropdown"
        style={{ colorRendering: "white" }}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
        onMouseEnter={() => setAboutHovered(true)}
        onMouseLeave={() => setAboutHovered(false)}
        onToggle={() => setAboutClicked(!isAboutClicked)}
        show={isAboutHovered || isAboutClicked}
      >
        <Link href={urls.pages.ourStory} passHref>
          <Item className={styles.textColor}>Our Story</Item>
        </Link>
        <Link href={urls.pages.blogNews} passHref>
          <Item className={styles.textColor}>Blog/News</Item>
        </Link>
      </NavDropdown>

      <Nav.Link
        href={urls.pages.ourWork}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
      >
        OUR WORK
      </Nav.Link>

      <NavDropdown
        title={<span className={styles.textColor}>GET INVOLVED</span>}
        id="basic-nav-dropdown"
        style={{ colorRendering: "white" }}
        className={mobileView ? styles.mobileNavBar : "mr-3"}
        onMouseEnter={() => setInvolvedHovered(true)}
        onMouseLeave={() => setInvolvedHovered(false)}
        onToggle={() => setInvolvedClicked(!isInvolvedClicked)}
        show={isInvolvedHovered || isInvolvedClicked}
      >
        <Link href={urls.pages.joinClassroom} passHref>
          <Item className={styles.textColor}>Join the Classroom</Item>
        </Link>
        <Link href={urls.pages.joinLibrary} passHref>
          <Item className={styles.textColor}>Join the Library</Item>
        </Link>
        <Link href={urls.pages.contactUs} passHref>
          <Item className={styles.textColor}>Contact Us</Item>
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
    <Link href={urls.pages.donate.index}>
      <Button
        className={mobileView ? styles.mobileDonateButton : styles.donateButton}
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
      <Link href="/">
        <Brand>
          <Image
            src="/static/hsl-logo-transparent.png"
            className="large-logo"
          ></Image>
          <Image
            src="/static/hsl-logo-transparent-mobile.png"
            className="mobile-logo"
          ></Image>
        </Brand>
      </Link>
      <div className="d-flex flex-row">{mobileView && donateButton}</div>
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
}
