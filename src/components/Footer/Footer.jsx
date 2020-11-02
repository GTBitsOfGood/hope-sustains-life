import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
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

          <Col>
            <div className={styles.header}>ABOUT US</div>
            <div className={styles.sublinks}>
				<Link href={urls.pages.ourStory} passHref>
				  OUR STORY
				</Link>
            </div>
            <div className={styles.sublinks}>
				<Link href={urls.pages.blogNews} passHref>
				  BLOG/NEWS
				</Link>
            </div>
            <div className={styles.sublinks}>
				<Link href={urls.pages.hundredPromise} passHref>
				  100% PROMISE
				</Link>
            </div>
          </Col>

          <Col>
            <div className={styles.header}>
			<Link href={urls.pages.ourWork} passHref>
              OUR WORK
			</Link>
            </div>
          </Col>

          <Col>
            <div className={styles.header}>GET INVOLVED</div>
            <div className={styles.sublinks}>
				<Link href={urls.pages.joinClassroom} passHref>
					JOIN THE CLASSROOM
				</Link>
            </div>
            <div className={styles.sublinks}>
				<Link href={urls.pages.joinLibrary} passHref>
					JOIN THE LIBRARY
				</Link>
            </div>
          </Col>
		  
		  <Col />

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

  const mobileContents = (
    <div className={styles.footer}>
      <Container>
        <Row>
        <Col>
          <div className={styles.social}>FOLLOW US</div>
        </Col>

        <Col>
            
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
          
		  
		  <div className={styles.horizontalLine} />

      <Row>
        <Col>
            <div className={styles.mobileHeader}>ABOUT US</div>
            <div className={styles.mobileSublinks}>
				<Link href={urls.pages.ourStory} passHref>
				  OUR STORY
				</Link>
            </div>
            <div className={styles.mobileSublinks}>
				<Link href={urls.pages.blogNews} passHref>
				  BLOG/NEWS
				</Link>
            </div>
            <div className={styles.mobileSublinks}>
				<Link href={urls.pages.hundredPromise} passHref>
				  100% PROMISE
				</Link>
            </div>
       </Col>

          <Col>
            <div className={styles.mobileHeader}>
			<Link href={urls.pages.ourWork} passHref>
              OUR WORK
			</Link>
            </div>
          </Col>

          <Col>
            <div className={styles.mobileHeader}>GET INVOLVED</div>
            <div className={styles.mobileSublinks}>
				<Link href={urls.pages.joinClassroom} passHref>
					JOIN THE CLASSROOM
				</Link>
            </div>
            <div className={styles.mobileSublinks}>
				<Link href={urls.pages.joinLibrary} passHref>
					JOIN THE LIBRARY
				</Link>
            </div>
          </Col>
		  
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

  if (mobileView){
    return mobileContents;
  } else {
    return normalContents
  }

};

export default Footer;
