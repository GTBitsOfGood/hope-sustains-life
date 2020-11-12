import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactFaq from "../..//components/ContactFaq";
import styles from "./JoinLibraryPage.module.css";
import HeaderPic from "../../../public/static/libraryHeaderPic.png";
import classes from "./JoinLibraryPage.module.css";
import { Image, Col } from "react-bootstrap";

const JoinLibraryPage = () => {
  return (
    <div>
        <div>
            <Image fluid src={HeaderPic} className={classes.picture} />
            <h1 className={classes.pageName} >The Library</h1>
        </div>
        <div className={styles.mainContainer}>
            <div className={classes.card}>
                <h1 className={classes.title}>Everyone <span className={classes.blueText}>welcome!</span></h1>
                <br />
                <p>
                    The library is a group of private donors who assist with advancing the vision of Hope Sustains Life and also make sure we are meeting our 100% transparency promise. We welcome visionaries, business owners, and entrepreneurs! Interested in joining “The Library” visit our contact us page.
                </p>
                <p>
                    THE LIBRARY FUELS HOPE SUSTAINS LIFE VISION TO GIVE REFUGEE CHILDREN A BETTER EDUCATION AND FUTURE.
                </p>
                <p>
                    The Library is our association of private donors that makes the 100% promise a possibility. With other private donors they make the multi-year annual donation of $50k+ which goes to funding our staff, offices, and travel. This ensures that public donations can directly impact a refugee’s life. With your help we can put an end to the global crisis of children displaced from their homes not having access to a quality education.
                </p> 
                <br />
                <br />
                <Col md={2}>
                    <h1 className={classes.greenUnderline}>&emsp;&emsp;The <span className={classes.blueText}>Impact</span></h1>
                </Col>
                <br />
                <br />
                <p>
                    Like any new startup, we are looking for visionaries that can support our business model. The private donors that make up The Library can measure their return on investment (ROI) by each school that is built for each refugee child and witness what impact this has on their lives. This is all made possible because we can guarantee that our 100% model is met on a consistent basis with your contributions to the operational side.
                </p>
                <br />
                <br />
                <Col md={2}>
                    <h1 className={classes.greenUnderline}>&emsp;&emsp;How To <span className={classes.blueText}>Join</span></h1>
                </Col>
                <br />
                <br />
                <p> 
                    Interested in joining the library? Visit our contact page and send us an email!
                </p>
                <br />
                <br />

        </div>
    </div>
    </div>
  );
};

export default JoinLibraryPage;