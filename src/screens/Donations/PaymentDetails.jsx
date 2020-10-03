import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { CardElement } from "@stripe/react-stripe-js";
import InputField from "./DonationInputField";

const stripElementStyleOptions = {
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
};

const PaymentDetails = () => {
  return (
    <div>
      <h1 className="text-center mb-3">Payment Details</h1>
      <InputField
        label="Cardholder Name"
        inputType="text"
        placeholder="John Doe"
        formFieldName="cardholderName"
        required={true}
      />
      <Form.Group as={Row}>
        <Form.Label column sm={4} className="text-right">
          Card Details *
        </Form.Label>
        <Col sm={8}>
          <div className="form-control">
            <CardElement
              options={stripElementStyleOptions}
              // className="form-control"
            />
          </div>
        </Col>
      </Form.Group>
      <InputField
        label="Billing Address"
        inputType="text"
        placeholder="12345 XYZ Street"
        formFieldName="billingAddress"
        required={true}
      />
      <InputField
        label="Apt/Suite/Unit"
        inputType="text"
        placeholder="#987"
        formFieldName="aptNumber"
        required={false}
      />
      <InputField
        label="City"
        inputType="text"
        placeholder="Atlanta"
        formFieldName="city"
        required={true}
      />
      <InputField
        label="State"
        inputType="text"
        placeholder="Georgia"
        formFieldName="state"
        required={true}
      />
      <InputField
        label="Zipcode"
        inputType="number"
        placeholder="13579"
        formFieldName="zipcode"
        required={true}
      />
    </div>
  );
};

export default PaymentDetails;
