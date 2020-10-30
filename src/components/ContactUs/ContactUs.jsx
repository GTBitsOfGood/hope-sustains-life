import React from "react";
import { Accordion, Image, Card, Button, Row } from "react-bootstrap";
import classes from "./ContactUs.module.css";
import { sendContactEmail } from "../../actions/Email";
import ContactUsImage from "../../../public/static/contactus.png";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    return sendContactEmail(email, name, message)
      .then(() => window.alert("Message sent successfully!"))
      .catch((error) => window.alert(error.message));
  };
  return (
    <>
      <div>
        <Row>
          <Image src={ContactUsImage} className={classes.pictures} fluid />
        </Row>
		  </div>
      <div style={{ alignItems: "center" }}>
        <Card
          border="light"
          style={{ width: "40rem", borderRadius: "40px", alignItems: "center" }}
          className={classes.container}
        >
          <Card.Title style={{ fontSize: "40px" }} className={classes.title}>
            Contact Us
          </Card.Title>
          <p style={{ width: "420px"}}>
            If you have questions or just want to get in touch, use the form
            below. We look forward to hearing from you!
          </p>
          <form onSubmit={handleSubmit}>
            <div className={classes.input}>
              <input
                className={classes.inputText}
                required
                id="name"
                type="name"
                value={name}
                size="51"
                placeholder=" Name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <br />
            <div className={classes.input}>
              <input
                className={classes.inputText}
                required
                id="email"
                type="email"
                value={email}
                size="51"
                placeholder=" E-Mail"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <br />
            <div className={classes.inputMessage}>
              <textarea
                className={classes.inputText}
                required
                id="Message"
                type="Message"
                value={message}
                size="50"
                cols="50"
                rows="10"
                placeholder=" Message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <br />
            <button className={classes.submit} type="submit">
              Submit
            </button>
          </form>
        </Card>
      </div>
      <div style={{ alignItems: "center" }}>
        <Card
          border="light"
          style={{ width: "40rem", borderRadius: "40px", alignItems: "center" }}
          className={classes.container}
        >
          <Card.Title style={{ fontSize: "40px" }} className={classes.title}>
            FAQ
          </Card.Title>
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
      </Card>
		</div>
    </>
  );
};

export default ContactUs;
