import React from "react";
import InputField from "./DonationInputField";

const Information = () => {
  return (
    <div>
      <h1 className="text-center mb-3">Your Information</h1>
      <InputField
        label="First Name"
        inputType="text"
        placeholder="John"
        formFieldName="firstName"
        required={true}
      />
      <InputField
        label="Last Name"
        inputType="text"
        placeholder="Doe"
        formFieldName="lastName"
        required={true}
      />
      <InputField
        label="E-Mail"
        inputType="text"
        placeholder="johndoe123@email.com"
        formFieldName="email"
        required={true}
      />
    </div>
  );
};

export default Information;
