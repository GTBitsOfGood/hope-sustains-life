import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactFaq from "../..//components/ContactFaq";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <div className={styles.mainContainer}>
      <ContactUs />
      <ContactFaq />
    </div>
  );
};

export default ContactUsPage;
