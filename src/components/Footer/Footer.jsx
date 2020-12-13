import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import facebookLogo from "./icons/facebook.svg";
import instagramLogo from "./icons/instagram.svg";
import twitterLogo from "./icons/twitter.svg";
import youtubeLogo from "./icons/youtube.svg";
import urls from "../../../utils/urls";
import Link from "next/link";
import { displayMobileView } from "../../../utils/screen";

const Footer = () => {
  const mobileView = displayMobileView();

  const linkContents = (
    <>
      <Col>
        <div className={styles.header}>ABOUT US</div>
        <div className={styles.sublinks}>
          <Link href={urls.pages.ourStory} passHref>
            <a>Our Story</a>
          </Link>
        </div>
        <div className={styles.sublinks}>
          <Link href={urls.pages.blogNews} passHref>
            <a>Blogs/News</a>
          </Link>
        </div>
      </Col>

      <Col>
        <div className={styles.header}>
          <Link href={urls.pages.ourWork} passHref>
            <a>OUR WORK</a>
          </Link>
        </div>
      </Col>

      <Col>
        <div className={styles.header}>GET INVOLVED</div>
        <div className={styles.sublinks}>
          <Link href={urls.pages.joinClassroom} passHref>
            <a>Join the Classroom</a>
          </Link>
        </div>
        <div className={styles.sublinks}>
          <Link href={urls.pages.joinLibrary} passHref>
            <a>Join the Library</a>
          </Link>
        </div>
      </Col>
    </>
  );

  const socialIcons = (
    <Row>
      <a href="https://www.Facebook.com/hope-sustains-life-106186367738715" target="_blank" className={styles.icon}>
        <Image src={facebookLogo}></Image>
      </a>
      <a href="https://www.instagram.com/hopesustainslife1/" target="_blank" className={styles.icon}>
        <Image src={instagramLogo}></Image>
      </a>
      <a href="https://Twitter.com/hopesuslife" target="_blank" className={styles.icon}>
        <Image src={twitterLogo}></Image>
      </a>
      <a className={styles.icon}>
        <Image src={youtubeLogo}></Image>
      </a>
    </Row>
  );

  const normalContents = (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <div className={styles.image}>
              <Image src="/static/hsl-logo-transparent.png"></Image>
            </div>
          </Col>

          <div className={styles.verticalLine} />

          {linkContents}
          <Col />
          <Col>
            <div className={styles.social}>FOLLOW US</div>
            {socialIcons}
          </Col>
        </Row>
      </Container>
    </div>
  );

  const mobileContents = (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <div className={styles.social}>FOLLOW US</div>
          </Col>

          <Col>{socialIcons}</Col>
        </Row>

        <div className={styles.horizontalLine} />

        <Row>
          {linkContents}
          <Col />
          <Col>
            <div className={styles.mobileImage}>
              <Image src="/static/hsl-logo-transparent.png"></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return mobileView ? mobileContents : normalContents;
};

export default Footer;
