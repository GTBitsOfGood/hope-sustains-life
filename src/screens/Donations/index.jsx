import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../../../utils/get-stripe";
import DonationPage from "./DonationPage";

const Donation = () => (
  <Elements stripe={getStripe()}>
    <DonationPage />
  </Elements>
);

export default Donation;
