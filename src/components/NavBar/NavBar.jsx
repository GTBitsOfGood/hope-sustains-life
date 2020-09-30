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
import { Link, Router } from "react-router-dom";
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
                  <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/ourstory">
                      OUR STORY
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/blognews">
                      BLOG/NEWS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/hundredpromise">
                      100% PROMISE
                    </NavDropdown.Item>
                  </NavDropdown>
                </Col>
                <Col md="auto">
                  <Nav.Link href="/ourwork">OUR WORK</Nav.Link>
                </Col>
                <Col>
                  <NavDropdown title="GET INVOLVED" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/joinclassroom">
                      JOIN THE CLASSROOM
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/joinlibrary">
                      JOIN THE LIBRARY
                    </NavDropdown.Item>
                  </NavDropdown>
                </Col>
                <Col>
                  <Button
                    href="/donate"
                    className="btn btn-primary"
                    type="submit"
                  >
                    Donate
                  </Button>
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
