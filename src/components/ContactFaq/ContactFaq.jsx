import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import classes from "./ContactFaq.module.css";

const ContactFaq = () => {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>FAQs</h2>
      <Accordion defaultActiveKey="0">
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
  );
};

export default ContactFaq;
