import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./DonationPage.module.css";
import { Button } from "react-bootstrap";
import PaymentDetails from "./PaymentDetails";
import Information from "./Information";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const DonationPage = () => {
  function amountButtons() {
    donationAmts.map((amt, index) => {
      <Button> {amt} </Button>;
    });
  }
  const donationAmts = ["$25", "$50", "$100", "$150"];
  return (
    <div className={styles.container}>
      <Elements stripe={stripePromise}>
        <div className={styles.elements}>
          <div>
            <Button className={styles.frequencyButtons}>One Time </Button>
            <Button className={styles.frequencyButtons}>Monthly </Button>
          </div>
          <h5 className={styles.headers}>Select an amount to give</h5>
          <div className={styles.amountButtons}>
            {donationAmts.map((amt) => {
              return <Button className={styles.amtButton}> {amt} </Button>;
            })}
            <Button className={styles.amtButton} style={{ width: 200 }}>
              Other amount
            </Button>
          </div>
          <br></br>
          <Information />
          <PaymentDetails />
        </div>
      </Elements>
    </div>
  );
};

export default DonationPage;
