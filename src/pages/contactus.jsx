import React from "react";
import { Accordion, Image, Card, Button } from "react-bootstrap";
import classes from "./contactus.module.css";
import ContactUsImage from "../../public/static/contactus.png";

const ContactUs = () => (
  <>
    <div>
      <Image src={ContactUsImage} className={classes.pictures} fluid />
    </div>
    <div className={classes.general}>
      <h1 className={classes.title}>FAQS</h1>
      <Accordion defaultActiveKey="0" className={classes.faq}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className={classes.question}
              as={Button}
              variant="link"
              eventKey="0"
            >
              Where does my donation go?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Answer 1</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className={classes.question}
              as={Button}
              variant="link"
              eventKey="1"
            >
              What is the difference between the Classroom and the Library?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Answer 2</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className={classes.question}
              as={Button}
              variant="link"
              eventKey="2"
            >
              What is the difference between the Classroom and the Library?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Answer 3</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  </>
);

export default ContactUs;
