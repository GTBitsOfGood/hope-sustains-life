import React from "react";
import styles from "./JoinLibraryPage.module.css";
import MainPic from "../../../public/static/libraryHeaderPic.png";
import {
  LibraryPhoto1,
  LibraryPhoto2,
  LibraryPhoto3,
  LibraryPhoto4,
  LibraryPhoto5,
  LibraryPhoto6,
  LibraryPhoto7,
  LibraryPhoto8,
  LibraryPhoto9,
} from "../../../public/static/LibraryCollage";

import classes from "./JoinLibraryPage.module.css";
import { Image, Col, Button } from "react-bootstrap";
import { displayMobileView } from "../../../utils/screen";
import Link from "next/link";
import urls from "../../../utils/urls";
import Footer from "../../components/Footer";
import LineImage from "../../../public/static/line-1.png";


function JoinLibraryPage() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
  const mobileView = isMobile();

  const jumbotron = (
    <div className={classes.jumbotron}>
      <Image fluid src={MainPic} className={classes.picture} />
      <h1 className={classes.pageName}>The Library</h1>
    </div>
  );

  const photoGrid = (
    <div className={classes.photoGrid}>
      <Image src={LibraryPhoto1} className={classes.Photo1}></Image>
      <Image src={LibraryPhoto2} className={classes.Photo2}></Image>
      <Image src={LibraryPhoto3} className={classes.Photo3}></Image>
      <Image src={LibraryPhoto4} className={classes.Photo4}></Image>
      <Image src={LibraryPhoto5} className={classes.Photo5}></Image>
      <Image src={LibraryPhoto6} className={classes.Photo6}></Image>
      <Image src={LibraryPhoto7} className={classes.Photo7}></Image>
      <Image src={LibraryPhoto8} className={classes.Photo8}></Image>
      <Image src={LibraryPhoto9} className={classes.Photo9}></Image>
    </div>
  );

  const contents = (
    <>
      <h1 className={classes.title}>
        We welcome visionaries, business owners, and entrepreneurs! Interested
        in joining <span className={classes.greenText}>“The Library” </span>
        visit our contact us page.
      </h1>
      <br />
      <p>
        The library is a group of private donors who assist with advancing the
        vision of Hope Sustains Life and also make sure we are meeting our 100%
        transparency promise.
      </p>
      <p>
        THE LIBRARY FUELS HOPE SUSTAINS LIFE VISION TO GIVE REFUGEE CHILDREN A
        BETTER EDUCATION AND FUTURE.
      </p>
      <p>
        The Library is our association of private donors that makes the 100%
        promise a possibility. With other private donors they make the
        multi-year annual donation of $50k+ which goes to funding our staff,
        offices, and travel. This ensures that public donations can directly
        impact a refugee’s life. With your help we can put an end to the global
        crisis of children displaced from their homes not having access to a
        quality education.
      </p>
      <div className={classes.subtitle}>
        <Image src={LineImage} />
        <h1 className={mobileView ? classes.mobileLeftWord : classes.subtitleLeftWord}>
          THE
        </h1>
        <h1 className={mobileView ? classes.mobileRightWord : classes.subtitleRightWord}>
          IMPACT
        </h1>
        <Image src={LineImage} />
      </div>
      <p>
        Like any new startup, we are looking for visionaries that can support
        our business model. The private donors that make up The Library can
        measure their return on investment (ROI) by each school that is built
        for each refugee child and witness what impact this has on their lives.
        This is all made possible because we can guarantee that our 100% model
        is met on a consistent basis with your contributions to the operational
        side.
      </p>
      <div className={classes.subtitle}>
        <Image src={LineImage} />
        <h1 className={mobileView ? classes.mobileLeftWord : classes.subtitleLeftWord}>
          HOW TO
        </h1>
        <h1 className={mobileView ? classes.mobileRightWord : classes.subtitleRightWord}>
          JOIN
        </h1>
        <Image src={LineImage} />
      </div>
      <p>
        Interested in joining the library? Visit our contact page and send us an
        email!
      </p>
    </>
  );

  if (mobileView) {
    return (
      <div>
        {jumbotron}
        <div className={styles.mainContainer}>
          <div className={classes.card}>{contents}</div>
        </div>
        <div className={classes.pictures}>{photoGrid}</div>

        <div className={classes.background}>
          <div className="d-flex flex-column justify-content-center">
            <h1 className={classes.donateTextMobile}>
              Don’t wait to change the world...the world needs the change you
              can bring now
            </h1>
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          {jumbotron}
          <div className={styles.mainContainer}>
            <div className={classes.card}>{contents}</div>
          </div>
          <div className={classes.pictures}>{photoGrid}</div>
          <div className={classes.background}>
            <h1 className={classes.donateText}>
              Don’t wait to change the<br></br>world...the world needs the{" "}
              <br></br>
              change you can bring now
            </h1>
            <div className={classes.buttonDiv}>
              <Link href={urls.pages.donate.index}>
                <Button className={classes.donateButton}>Donate</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default JoinLibraryPage;
