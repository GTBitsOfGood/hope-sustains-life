import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import classes from "./ContactFaq.module.css";

const ContactFaq = () => {
  return (
    <div style={{ alignItems: "center" }}>
      <Card
        border="light"
        style={{ width: "40rem", borderRadius: "40px", alignItems: "center" }}
        className={classes.container}
      >
        <Card.Title style={{ fontSize: "40px" }} className={classes.title}>
          FAQs
        </Card.Title>
        <Accordion defaultActiveKey="0">
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                className={classes.question}
                as={Button}
                variant="link"
                eventKey="0"
              >
                <a className={classes.question}>Where does my donation go?</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Answer 1</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                className={classes.question}
                as={Button}
                variant="link"
                eventKey="1"
              >
                <a className={classes.question}>
                  What is the difference between the Classroom and the Library?
                </a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Answer 2</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                className={classes.question}
                as={Button}
                variant="link"
                eventKey="2"
              >
                <a className={classes.question}>
                  What is the difference between the Classroom and the Library?
                </a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Answer 3</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>
    </div>
  );
};

export default ContactFaq;
