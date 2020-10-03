import React from "react";
import {
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "./non-white globe-green_.png";
import { Link, Router } from "react-router-dom";



const Footer = () => {
  return (
    <div className={styles.footer}>
      
      <Container>
        <Row>
          <Col>
            <Image src={logo}></Image>
          </Col>

          
          <Col>
            
          </Col>

          <Col md="auto">
            <a href="/ourwork">OUR WORK</a>
          </Col>

          <Col>
            <Button href="/admin" className="btn btn-primary" type="submit">
              Log In
            </Button>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
