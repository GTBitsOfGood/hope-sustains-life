import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "react-bootstrap/Form";
import styles from "./DonationPage.module.css";
import { Button } from "react-bootstrap";
import PaymentDetails from "./PaymentDetails";
import Information from "./Information";
import { displayMobileView } from "../../../utils/screen.js";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const DonationPage = () => {
  const donationAmts = ["$25", "$50", "$100", "$150"];
  //const [mobile, setMobile] = React.useState(false);

  const isMobile = async () => {
    //setMobile(await displayMobileView);
    const mobile = await displayMobileView();
    console.log("Is mobile: " + mobile);
    return mobile;
  };
  return (
    <div>
      <div className={styles.container}>
        <Elements stripe={stripePromise}>
          <div className={styles.elements}>
            <h3 style={{ textAlign: "center", marginBottom: 40 }}>
              Donate to Hope Sustains Life
            </h3>
            <div>
              <Button className={styles.donationFreqButtons}>One Time</Button>
              <Button className={styles.donationFreqButtons}>Monthly</Button>
            </div>
            <h5 className={styles.headers}>Select an amount to give</h5>
            <div className={styles.amountButtons}>
              {donationAmts.map((amt, index) => {
                return (
                  <Button key={index} className={styles.amtButton}>
                    {amt}
                  </Button>
                );
              })}
              <Button className={styles.amtButton} style={{ width: 200 }}>
                Other amount
              </Button>
            </div>
            <br></br>
            <h5 className={styles.headers}>Your Information</h5>
            <Information />
            <h5 className={styles.headers}>Payment Details</h5>

            <PaymentDetails />
            <div className="agreements">
              <Form.Group controlId="matchesDonation">
                <Form.Check
                  type="checkbox"
                  label="My employer matches 501(c)(3) donations"
                />
              </Form.Group>
              <Form.Group controlId="subscribe">
                <Form.Check
                  type="checkbox"
                  label="Subscribe to recieve newsletters"
                />
              </Form.Group>
            </div>

            <Button className={styles.donationFreqButtons}>
              Complete Donation
            </Button>
          </div>
        </Elements>
      </div>
    </div>
  );
};

export default DonationPage;
