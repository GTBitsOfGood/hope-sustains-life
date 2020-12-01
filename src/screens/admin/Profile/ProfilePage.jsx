import React from "react";
import { Form, Col, Container, Button } from "react-bootstrap";
import styles from "./ProfilePage.module.css";
import urls from "../../../../utils/urls";
import Link from "next/link";
import AdminNavBar from "../../../components/AdminNavBar";


const ProfilePage = ({image}) => {
  return (
    <div>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.admin.blogs} />
      {/* <Container className={styles.container}>
        <Button href={urls.pages.admin.blogs} variant="link">
          Back
        </Button>
      </Container> */}
      <Link href={urls.pages.admin.blogs}>
        <button className={styles.backButton}>
          <i className={styles.arrow}></i>
          BACK
        </button>
      </Link>
      <br></br>
      <br></br>

      <h2 className = {styles.editProfile}>Edit Profile</h2>


      <Form>
        <Form.Row className>

          <Form.Group className = {styles.namesGrid} controlId="formGridFirstName">
            <div className = {styles.firstNameTitle}>
              <Form.Label>First Name</Form.Label>
            </div>
            <div className = {styles.lastNameTitle}>
              <Form.Label className = {styles.lastName}>Last Name</Form.Label>
            </div>
          </Form.Group>


          <br></br>

          <Form.Group className = {styles.namesGrid} controlId="formGridLastName">
            <div className = {styles.firstNameText}>
              <Form.Control class="col-xs-4" type="firstName" placeholder="First Name" />
            </div>
            <div className = {styles.lastNameText}>
              <Form.Control class="col-xs-4" type="lastName" placeholder="Last Name" />
            </div>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <div className = {styles.firstNameText}>
              <Form.Label>Email</Form.Label>
              <br></br>
              <Form.Control class="col-xs-4" type="email" placeholder="Enter email" />
            </div>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <div className = {styles.firstNameText}>
              <Form.Label>Password</Form.Label>
              <br></br>
              <Form.Control class="col-xs-4" type="password" placeholder="Password" />
            </div>
          </Form.Group>
        </Form.Row>
      </Form>

      <div className={styles.buttonDiv}>     
        <Button className={styles.donateButton}>Save</Button>  
      </div>
    
    </div>
  );
};

export default ProfilePage;
