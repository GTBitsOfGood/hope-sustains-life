import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import classes from "./ContactUs.module.css";

const FAQAccordion = () => (
  <>

    <div className={classes.faq} style={{width: "80%"}}>
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
export default FAQAccordion;