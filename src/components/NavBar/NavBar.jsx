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
import logo from "./non-white globe-green_.png";

const { Brand, Toggle, Collapse } = Navbar;

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-stuff" expand="xl">
        <Image src={logo}></Image>
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
                    <Link href="/ourstory" passHref>
                      <NavDropdown.Item>OUR STORY</NavDropdown.Item>
                    </Link>
                    <Link href="/blognews" passHref>
                      <NavDropdown.Item>BLOG/NEWS</NavDropdown.Item>
                    </Link>
                    <Link href="/hundredpromise" passHref>
                      <NavDropdown.Item>100% PROMISE</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Col>
                <Col md="auto">
                  <Link href="/ourwork" passHref>
                    <Nav.Link>OUR WORK</Nav.Link>
                  </Link>
                </Col>
                <Col>
                  <NavDropdown
                    renderMenuOnMount={true}
                    title="GET INVOLVED"
                    id="basic-nav-dropdown"
                  >
                    <Link href="/joinclassroom" passHref>
                      <NavDropdown.Item>JOIN THE CLASSROOM</NavDropdown.Item>
                    </Link>
                    <Link href="/joinlibrary" passHref>
                      <NavDropdown.Item>JOIN THE LIBRARY</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Col>
                <Col>
                  <Link href="/donate" passHref>
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
