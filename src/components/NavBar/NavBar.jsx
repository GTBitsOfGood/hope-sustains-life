import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  NavProps,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import urls from "../../../utils/urls";

const { Brand, Toggle, Collapse } = Navbar;

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-stuff" expand="xl">
        <Image src="/static/hsl-logo-transparent.png"></Image>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Container>
              <Row>
                <Col>
                  <NavDropdown
                    renderMenuOnMount={true}
                    title="ABOUT US"
                    id="basic-nav-dropdown"
                  >
                    <Link href={urls.pages.ourStory} passHref>
                      <NavDropdown.Item>OUR STORY</NavDropdown.Item>
                    </Link>
                    <Link href={urls.pages.blogNews} passHref>
                      <NavDropdown.Item>BLOG/NEWS</NavDropdown.Item>
                    </Link>
                    <Link href={urls.pages.hundredPromise} passHref>
                      <NavDropdown.Item>100% PROMISE</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Col>
                <Col md="auto">
                  <Link href={urls.pages.ourWork} passHref>
                    <Nav.Link>OUR WORK</Nav.Link>
                  </Link>
                </Col>
                <Col>
                  <NavDropdown
                    renderMenuOnMount={true}
                    title="GET INVOLVED"
                    id="basic-nav-dropdown"
                  >
                    <Link href={urls.pages.joinClassroom} passHref>
                      <NavDropdown.Item>JOIN THE CLASSROOM</NavDropdown.Item>
                    </Link>
                    <Link href={urls.pages.joinLibrary} passHref>
                      <NavDropdown.Item>JOIN THE LIBRARY</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Col>
                <Col>
                  <Link href={urls.pages.donate} passHref>
                    <Button className="btn btn-success" type="submit">
                      Donate
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
