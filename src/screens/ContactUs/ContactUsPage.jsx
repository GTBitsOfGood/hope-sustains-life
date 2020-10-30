import React from "react";
import { Image } from "react-bootstrap";
import ContactUs from "../../components/ContactUs";
import ContactFaq from "../..//components/ContactFaq";
import styles from "./ContactUsPage.module.css";
import ContactUsImage from "../../../public/static/contactus.png";
import classes from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <>
      <div>
        <Image src={ContactUsImage} className={classes.pictures} fluid />
      </div>
      <div className={styles.mainContainer}>
        <ContactUs />
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactUsPage;
