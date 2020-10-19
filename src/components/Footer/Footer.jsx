import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import { Link, Router } from "react-router-dom";
import facebookLogo from "./icons/facebook.svg";
import instagramLogo from "./icons/instagram.svg";
import twitterLogo from "./icons/twitter.svg";
import youtubeLogo from "./icons/youtube.svg";
import urls from "../../../utils/urls";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <div className={styles.image}>
              <Image src="/static/hsl-logo-transparent.png"></Image>
            </div>
          </Col>

          <Col>
            <div className={styles.header}>ABOUT US</div>
            <div className={styles.sublinks} href={urls.pages.ourStory}>
              OUR STORY
            </div>
            <div className={styles.sublinks} href={urls.pages.blogNews}>
              BLOG/NEWS
            </div>
            <div className={styles.sublinks} href={urls.pages.ourStory}>
              OUR STORY
            </div>
          </Col>

          <Col>
            <div className={styles.header} href={urls.pages.ourWork}>
              OUR WORK
            </div>
          </Col>

          <Col>
            <div className={styles.header}>GET INVOLVED</div>
            <div className={styles.sublinks} href={urls.pages.joinClassroom}>
              JOIN THE CLASSROOM
            </div>
            <div className={styles.sublinks} href={urls.pages.joinLibrary}>
              JOIN THE LIBRARY
            </div>
          </Col>

          <Col>
            <div className={styles.social}>FOLLOW US</div>
            <Row>
              <div className={styles.icon}>
                <Image src={facebookLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src={instagramLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src={twitterLogo}></Image>
              </div>
              <div className={styles.icon}>
                <Image src={youtubeLogo}></Image>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
