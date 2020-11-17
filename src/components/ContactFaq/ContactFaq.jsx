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
              What is the 100% Promise?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Like many non-profits, we too run mostly on donations. We strongly
              believe that all donors, regardless of how much they give, should
              be able to see exactly where each and every dollar goes. You
              trusted us to help change the world through education, we want to
              assure you that your trust was not misplaced.
            </Card.Body>
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
              What is the purpose of the Classroom and the Library?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              We know that you want to make sure that 100% of your donation goes
              towards a school building project of your choosing. We do this by
              completely separating donations when they come in. One set of our
              donations goes towards building schools for the refugees that we
              are currently helping. Our donors who donate towards building
              schools are part of what we call “The Classroom”. The other set
              comes from our private donors that are part of “The Library”. They
              help with supporting our operational cost and also help support
              the research and development at Hope Sustains Life. Since our
              operational costs are covered by the Library we are able to ensure
              that 100% of your money goes towards building a school for a
              refugee in need.
            </Card.Body>
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
              How is this sustainable for HSL now?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              The current model we use is very sustainale since we are currently
              only focusing on 3 projects. As time progresses we will be able to
              scale with growing our base not only in the Classroom but also in
              the Library.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className={classes.question}
              as={Button}
              variant="link"
              eventKey="3"
            >
              Can I be part of both the Classroom and Library?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Yes, absolutely! Private donors will be able to not only help fund
              out operations but also if they would like support building a
              school for a refugee in need in one of the 3 countries we are
              currently working in.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ContactFaq;
