import React from "react";
import { Form, Col, Container, Button } from "react-bootstrap";
import styles from "./ProfilePage.module.css";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email("Please enter a valid email.").required(),
  password: Yup.string().min(5, "Minimum 5 characters required").required(),
});

const ProfilePage = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Button href="/blognews" variant="link">
          Back
        </Button>
      </Container>
      <h2>Edit Profile</h2>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="firstName"
                  placeholder="First Name"
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="lastName"
                  placeholder="Last Name"
                  isValid={touched.lastName && !errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  Must be at least 5 characters
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <div className={styles.savebutton}>
              <Container>
                <Button className="btn btn-primary" type="submit">
                  Save
                </Button>
              </Container>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfilePage;
