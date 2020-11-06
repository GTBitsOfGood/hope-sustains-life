import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "react-bootstrap/Form";
import styles from "./DonationPage.module.css";
import { Button } from "react-bootstrap";
import PaymentDetails from "./PaymentDetails";
import { displayMobileView } from "../../../utils/screen.js";
import { verifyPayment, finishPayment } from "../../actions/Donate";
import InputField from "./DonationInputField";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const DonationPage = () => {
  const donationAmts = ["$25", "$50", "$100", "$150"];
  const [donationAmt, setDonationAmt] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
  const mobileView = isMobile();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = firstName + " " + lastName;
    const finishIntent = verifyPayment(name, email, donationAmt).intentID;

    return finishPayment(finishIntent, "", name)
      .then(() => {
        this.context.router.push({
          pathname: "/confirmation",
          state: {},
        });
      })
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1
          className={mobileView ? styles.mainHeaderMobile : styles.mainHeader}
        >
          For the ones in need
        </h1>
        {mobileView && (
          <p className={mobileView ? styles.mainTextMobile : styles.mainText}>
            <span style={{ color: "#03AB99", backgroundColor: "white" }}>
              100%
            </span>
            &nbsp; of your money goes to funding our educational projects for
            the refugee population.
          </p>
        )}
      </div>
      <div className={mobileView ? styles.mobileContainer : styles.container}>
        <Elements stripe={stripePromise}>
          <div className={mobileView ? styles.mobileElements : styles.elements}>
            <h3
              style={{ textAlign: "center", marginBottom: 40 }}
              className={mobileView ? styles.donateMobile : null}
            >
              Donate to Hope Sustains Life
            </h3>
            <div>
              <Button className={styles.donationFreqButtons}>One Time</Button>
              <Button className={styles.donationFreqButtons}>Monthly</Button>
            </div>
            <h5
              style={mobileView ? { fontSize: "17px" } : null}
              className={styles.headers}
            >
              Select an amount to give
            </h5>
            <div className={styles.amountButtons}>
              {donationAmts.map((amt, index) => {
                return (
                  <Button
                    key={index}
                    className={styles.amtButton}
                    onClick={() => setDonationAmt(amt)}
                  >
                    {amt}
                  </Button>
                );
              })}
              <Button className={styles.amtButton} style={{ width: 200 }}>
                Other amount
              </Button>
            </div>
            <br></br>

            <h5
              style={mobileView ? { fontSize: "17px" } : null}
              className={styles.headers}
            >
              Your Information
            </h5>
            <div>
              <InputField
                label="First Name"
                inputType="text"
                placeholder="John"
                formFieldName="firstName"
                required={true}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <InputField
                label="Last Name"
                inputType="text"
                placeholder="Doe"
                formFieldName="lastName"
                required={true}
                onChange={(event) => setlastName(event.target.value)}
              />
              <InputField
                label="E-Mail"
                inputType="text"
                placeholder="johndoe123@email.com"
                formFieldName="email"
                required={true}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <h5
              style={mobileView ? { fontSize: "17px" } : null}
              className={styles.headers}
            >
              Payment Details
            </h5>
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
            <Button className={styles.completeDonation} onClick={handleSubmit}>
              Complete Donation
            </Button>
          </div>
        </Elements>
        {!mobileView && (
          <div style={{ width: "40%" }}>
            <p className={styles.mainText}>
              <span style={{ color: "#03AB99", backgroundColor: "white" }}>
                100%
              </span>
              &nbsp; of your money goes to funding our educational projects for
              the refugee population.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// {mobileView && (
//   <div>
//     <h4 className={mobileView ? styles.mobileContainer: styles.main-header}>
//       For the ones in need
//     </h4>
//     <p>
//       <label style={{ color: "#03AB99Z", backgroundColor: "white" }}> 100% </label>
//       &nbsp; of your money goes to funding our educational projects
//       for the refugee population.
//     </p>
//   </div>
// )}

export default DonationPage;
