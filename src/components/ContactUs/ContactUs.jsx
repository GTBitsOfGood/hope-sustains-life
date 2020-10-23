import React from "react";
import { Card } from "react-bootstrap";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    return sendMessage(name, email, message)
      .then(() => window.alert("Message sent successfully!"))
      .catch((error) => window.alert(error.message));
  };
  return (
    <>
    <div style={{alignItems:"center"}}>
      <Card border="light" style={{width: '50rem', borderRadius: "30px", alignItems: "center"}} className={classes.container}>
        <Card.Title style={{fontSize: "40px"}} className={classes.title}>Contact Us</Card.Title>
        <p style={{width: "400px"}}>
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
          <br/>
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
          <br/>
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
          <br/>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </form>
      </Card>
    </div>
      
    </>
  );
};

export default ContactUs;
