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
      <Card>
        <h1 className={classes.title}>Contact Us</h1>
        <p>
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
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={classes.input}>
            <input
              className={classes.inputText}
              required
              id="email"
              type="email"
              value={email}
              placeholder="E-Mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.input}>
            <input
              className={classes.inputText}
              required
              id="Message"
              type="Message"
              value={message}
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </form>
      </Card>
    </>
  );
};

export default ContactUs;
