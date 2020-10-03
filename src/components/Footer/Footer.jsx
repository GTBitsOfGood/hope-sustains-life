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


const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={logo}></Image>

      <Container>
        <Button href="/admin" className="btn btn-primary" type="submit">
          Log In
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
