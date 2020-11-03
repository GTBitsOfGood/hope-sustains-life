import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactFaq from "../..//components/ContactFaq";
import styles from "./ContactUsPage.module.css";
import ContactUsImage from "../../../public/static/contactus.png";
import classes from "./ContactUsPage.module.css";
import { Image } from "react-bootstrap";

const ContactUsPage = () => {
  return (
    <>
      <div>
        <Image fluid src={ContactUsImage} className={classes.picture} />
      </div>
      <div className={styles.mainContainer}>
        <ContactUs />
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactUsPage;
