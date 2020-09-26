import React from "react";
import {Form, Col, Container, Button} from "react-bootstrap";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
    
    return (
        <div>
            <Container className = {styles.container}>
                <Button href="/blognews" variant="link">Back</Button>
            </Container>
            <h2>Edit Profile</h2>
            <Form>
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
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
        </Form>
        <div className = {styles.savebutton}>
            <Container>
                <Button className="btn btn-primary" type="submit">Save</Button>
            </Container>
        </div>
    </div>
    )
}   

export default ProfilePage; 