import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import styles from "./DonationPage.module.css";
import { Button } from "react-bootstrap";

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
          <label>Select an amount to give</label>
          <div className={styles.amountButtons}>
            {donationAmts.map((amt, index) => {
              return <Button className={styles.amtButton}> {amt} </Button>;
            })}
          </div>

          <label>Your information </label>

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </Elements>
    </div>
  );
};

export default DonationPage;
