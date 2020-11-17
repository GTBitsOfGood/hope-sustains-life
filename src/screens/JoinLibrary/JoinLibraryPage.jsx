import React from "react";
import styles from "./JoinLibraryPage.module.css";
import HeaderPic from "../../../public/static/libraryHeaderPic.png";
import LibraryPic1 from "../../../public/static/libraryPic1.png";
import LibraryPic2 from "../../../public/static/libraryPic2.png";
import LibraryPic3 from "../../../public/static/libraryPic3.png";
import LibraryPic4 from "../../../public/static/libraryPic4.png";
import LibraryPic5 from "../../../public/static/libraryPic5.png";
import LibraryPic6 from "../../../public/static/libraryPic6.png";
import LibraryPic7 from "../../../public/static/libraryPic7.png";
import LibraryPic8 from "../../../public/static/libraryPic8.png";
import LibraryPic9 from "../../../public/static/libraryPic9.png";
import classes from "./JoinLibraryPage.module.css";
import { Image, Col, Row } from "react-bootstrap";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import displayMobileView from "../../../utils/screen"

const isitMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
const mobileView = isitMobile();

const JoinLibraryPage = () => {
	const displayView = (mobileView) => {
    if (mobileView) {
    return (<>
      {mobileView && <MobileView/>}
    <div>
      <div>
        <Image fluid src={HeaderPic} className={classes.picture} />
        <h1 className={classes.pageName}>The Library</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={classes.card}>
          <h1 className={classes.title}>
            Everyone <span className={classes.blueText}>welcome!</span>
          </h1>
          <br />
          <p>
            The library is a group of private donors who assist with advancing
            the vision of Hope Sustains Life and also make sure we are meeting
            our 100% transparency promise. We welcome visionaries, business
            owners, and entrepreneurs! Interested in joining “The Library” visit
            our contact us page.
          </p>
          <p>
            THE LIBRARY FUELS HOPE SUSTAINS LIFE VISION TO GIVE REFUGEE CHILDREN
            A BETTER EDUCATION AND FUTURE.
          </p>
          <p>
            The Library is our association of private donors that makes the 100%
            promise a possibility. With other private donors they make the
            multi-year annual donation of $50k+ which goes to funding our staff,
            offices, and travel. This ensures that public donations can directly
            impact a refugee’s life. With your help we can put an end to the
            global crisis of children displaced from their homes not having
            access to a quality education.
          </p>
          <br />
          <br />
          <Col md={2}>
            <h1 className={classes.greenUnderline}>
              &emsp;&emsp;The <span className={classes.blueText}>Impact</span>
            </h1>
          </Col>
          <br />
          <br />
          <p>
            Like any new startup, we are looking for visionaries that can
            support our business model. The private donors that make up The
            Library can measure their return on investment (ROI) by each school
            that is built for each refugee child and witness what impact this
            has on their lives. This is all made possible because we can
            guarantee that our 100% model is met on a consistent basis with your
            contributions to the operational side.
          </p>
          <br />
          <br />
          <Col md={2}>
            <h1 className={classes.greenUnderline}>
              &emsp;&emsp;How To <span className={classes.blueText}>Join</span>
            </h1>
          </Col>
          <br />
          <br />
          <p>
            Interested in joining the library? Visit our contact page and send
            us an email!
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className={classes.pictures}>
          <Row>
              <Col md={3}> <Image src={LibraryPic1}></Image></Col>
              <Col>
                <Row>
                    <Col md={5}><Image src={LibraryPic2}></Image></Col>
                    <Col md={5} style={{marginLeft: "15px"}}><Image src={LibraryPic3}></Image></Col>
                </Row>
                <Row style={{marginTop: "10px"}}>
                    <Col md={5}><Image src={LibraryPic4}></Image></Col>
                    <Col md={5} style={{marginLeft: "15px"}}><Image src={LibraryPic5}></Image></Col>
                </Row>
              </Col>
           </Row>
           <Row style={{marginTop: "10px"}}>
               <Col><Image src={LibraryPic6}></Image></Col>
               <Col style={{marginLeft: "-143px"}}><Image src={LibraryPic7}></Image></Col>
           </Row>
           <Row style={{marginTop: "10px"}}>
               <Col><Image src={LibraryPic8}></Image></Col>
               <Col style={{marginLeft: "-143px"}}><Image src={LibraryPic9}></Image></Col>
           </Row>
      </div>
    </div>
	</>
      )
    } else {
     return (<>
      {!isMobile && <BrowserView/>}
	  <div>
      <div>
        <Image fluid src={HeaderPic} className={classes.picture} />
        <h1 className={classes.pageName}>The Library</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={classes.card}>
          <h1 className={classes.title}>
            Everyone <span className={classes.blueText}>welcome!</span>
          </h1>
          <br />
          <p>
            The library is a group of private donors who assist with advancing
            the vision of Hope Sustains Life and also make sure we are meeting
            our 100% transparency promise. We welcome visionaries, business
            owners, and entrepreneurs! Interested in joining “The Library” visit
            our contact us page.
          </p>
          <p>
            THE LIBRARY FUELS HOPE SUSTAINS LIFE VISION TO GIVE REFUGEE CHILDREN
            A BETTER EDUCATION AND FUTURE.
          </p>
          <p>
            The Library is our association of private donors that makes the 100%
            promise a possibility. With other private donors they make the
            multi-year annual donation of $50k+ which goes to funding our staff,
            offices, and travel. This ensures that public donations can directly
            impact a refugee’s life. With your help we can put an end to the
            global crisis of children displaced from their homes not having
            access to a quality education.
          </p>
          <br />
          <br />
          <Col md={2}>
            <h1 className={classes.greenUnderline}>
              &emsp;&emsp;The <span className={classes.blueText}>Impact</span>
            </h1>
          </Col>
          <br />
          <br />
          <p>
            Like any new startup, we are looking for visionaries that can
            support our business model. The private donors that make up The
            Library can measure their return on investment (ROI) by each school
            that is built for each refugee child and witness what impact this
            has on their lives. This is all made possible because we can
            guarantee that our 100% model is met on a consistent basis with your
            contributions to the operational side.
          </p>
          <br />
          <br />
          <Col md={2}>
            <h1 className={classes.greenUnderline}>
              &emsp;&emsp;How To <span className={classes.blueText}>Join</span>
            </h1>
          </Col>
          <br />
          <br />
          <p>
            Interested in joining the library? Visit our contact page and send
            us an email!
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className={classes.pictures}>
          <Row>
              <Col md={3}> <Image src={LibraryPic1}></Image></Col>
              <Col>
                <Row>
                    <Col md={5}><Image src={LibraryPic2}></Image></Col>
                    <Col md={5} style={{marginLeft: "15px"}}><Image src={LibraryPic3}></Image></Col>
                </Row>
                <Row style={{marginTop: "10px"}}>
                    <Col md={5}><Image src={LibraryPic4}></Image></Col>
                    <Col md={5} style={{marginLeft: "15px"}}><Image src={LibraryPic5}></Image></Col>
                </Row>
              </Col>
           </Row>
           <Row style={{marginTop: "10px"}}>
               <Col><Image src={LibraryPic6}></Image></Col>
               <Col style={{marginLeft: "-143px"}}><Image src={LibraryPic7}></Image></Col>
           </Row>
           <Row style={{marginTop: "10px"}}>
               <Col><Image src={LibraryPic8}></Image></Col>
               <Col style={{marginLeft: "-143px"}}><Image src={LibraryPic9}></Image></Col>
           </Row>
      </div>
    </div>
	</>
      )
    } 
  }
  return (
    displayView(isMobile)
  );
}

export default JoinLibraryPage;
