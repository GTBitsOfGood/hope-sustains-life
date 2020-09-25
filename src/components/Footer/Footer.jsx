import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Button href="/admin" className="btn btn-primary" type="submit">
          Log In
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
