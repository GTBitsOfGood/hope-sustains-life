import React, { Component } from "react";
import { Form, Col, Container, Button } from "react-bootstrap";
import { render } from "react-dom";
import styles from "./ProfilePage.module.css";
const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "", //this is where our error message gets across
};

class ProfilePage extends React.Component {
  state = {
    email: {
      ...txtFieldState,
      fieldName: "Email",
      required: true,
      requiredTxt: "Email is required",
      formatErrorTxt: "Incorrect email format",
      type: "email",
    },
    password: {
      ...txtFieldState,
      fieldName: "First Name",
      required: true,
      requiredTxt: "Password is required",
      type: "text",
    },
    allFieldsValid: false,
  };

  //we need to extract specific properties in Constraint Validation API using this code snippet
  //we need to extract specific properties in Constraint Validation API using this code snippet
  reduceFormValues = (formElements) => {
    const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element

    //we need to extract specific properties in Constraint Validation API using this code snippet
    const formValues = arrElements
      .filter((elem) => elem.name.length > 0)
      .map((x) => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;

        return {
          name,
          type,
          typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
          value,
          valid: x.checkValidity(),
        };
      })
      .reduce((acc, currVal) => {
        //then we finally use reduce, ready to put it in our state
        const { value, valid, typeMismatch } = currVal;
        const { fieldName, requiredTxt, formatErrorTxt } = this.state[
          currVal.name
        ]; //get the rest of properties inside the state object

        //we'll need to map these properties back to state so we use reducer...
        acc[currVal.name] = {
          value,
          valid,
          typeMismatch,
          fieldName,
          requiredTxt,
          formatErrorTxt,
        };

        return acc;
      }, {});

    return formValues;
  };
  checkAllFieldsValid = (formValues) => {
    return !Object.keys(formValues)
      .map((x) => formValues[x])
      .some((field) => !field.valid);
  };
  onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValues = this.reduceFormValues(form.elements);
    const allFieldsValid = this.checkAllFieldsValid(formValues);

    //note: put ajax calls here to persist the form inputs in the database.
    //END
    this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API
  };

  errorValidationLabel = ({ txtLbl }) => {
    return (
      <label htmlFor="" style={{ color: "red" }}>
        {txtLbl}
      </label>
    );
  };
  //END
  render() {
    const { email, password, allFieldsValid } = this.state;
    const successFormDisplay = allFieldsValid ? "block" : "none";
    const inputFormDisplay = !allFieldsValid ? "block" : "none";
    const renderEmailValidationError = email.valid
      ? ""
      : this.errorValidationLabel(
          email.typeMismatch ? email.formatErrorTxt : email.requiredTxt
        );
    const renderPasswordValidationError = password.valid
      ? ""
      : this.errorValidationLabel(password.requiredTxt);
    return (
      <div>
        <Container className={styles.container}>
          <Button href="/blognews" variant="link">
            Back
          </Button>
        </Container>
        <h2>Edit Profile</h2>
        <div style={{ display: successFormDisplay }}>
          <h1 style={{ textAlign: "center" }}>Success!</h1>
          <p style={{ textAlign: "center" }}>
            You have successfully edited your profile.
          </p>
        </div>
        <div style={{ display: inputFormDisplay }}>
          <Form noValidate onSubmit={(e) => onSubmit(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required="true"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
            </Form.Row>
            {renderEmailValidationError}

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required="true"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>
            {renderPasswordValidationError}

            <input type="submit" value="Submit" />
            <div className={styles.savebutton}>
              <Container>
                <Button
                  onSubmit={(e) => onSubmit(e)}
                  className="btn btn-primary"
                  type="submit"
                >
                  Save
                </Button>
              </Container>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
