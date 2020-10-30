import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactFaq from "../..//components/ContactFaq";
import styles from "./ContactUsPage.module.css";
import ContactUsImage from "../../../public/static/contactus.png";
import classes from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <>
      <div>
        <img src={ContactUsImage} className={classes.picture} />
      </div>
      <div className={styles.mainContainer}>
        <ContactUs />
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactUsPage;
