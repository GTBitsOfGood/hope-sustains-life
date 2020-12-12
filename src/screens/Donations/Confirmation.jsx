import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./DonationConfirmation.module.css";
import Link from "next/link";

const Donation = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <h1>Thank you for your Donation</h1>
      <hr />
      <p>The receipt has been sent to your email</p>
      <Link href="/">
        <Button variant="success">Go to Homepage</Button>
      </Link>
    </div>
  </div>
);

export default Donation;
