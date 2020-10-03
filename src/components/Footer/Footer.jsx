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
import facebookLogo from './facebook.svg';
import instagramLogo from './instagram.svg';
import twitterLogo from './twitter.svg';
import youtubeLogo from './youtube.svg';






const Footer = () => {
  return (
    <div className={styles.footer}>
      
      <Container>
        <Row>
          <Col>
            <div className={styles.image}>
              <Image src={logo}></Image>
            </div>
          </Col>

          
          <Col>
            <div className={styles.header}>ABOUT US</div>
            <div className={styles.sublinks} href="/ourstory">OUR STORY</div>
            <div className={styles.sublinks} href="/blognews">BLOG/NEWS</div>
            <div className={styles.sublinks} href="/ourstory">OUR STORY</div>
            
          </Col>

          <Col>
            <div className={styles.header} href="/ourwork">OUR WORK</div>
          </Col>

          <Col>
            <div className={styles.header}>GET INVOLVED</div>
            <div className={styles.sublinks} href="/joinclassroo">JOIN THE CLASSROOM</div>
            <div className={styles.sublinks} href="/joinlibrary">JOIN THE LIBRARY</div>
          </Col>

          <Col>
            <div className={styles.social}>FOLLOW US</div>
            <Row>
              <div className={styles.icon}>
                <Image src = {facebookLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src = {instagramLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src = {twitterLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src = {youtubeLogo}></Image>
              </div>
            </Row>
          </Col>


        </Row>
      </Container>
    </div>
  );
};

export default Footer;
