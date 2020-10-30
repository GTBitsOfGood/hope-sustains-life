import React from "react";
import classes from "./ContactUs.module.css";
import { sendContactEmail } from "../../actions/Email";
import { displayMobileView } from "../../../utils/screen.js";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  let isMobile = false;
  if (displayMobileView()) {
    isMobile = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    return sendContactEmail(email, name, message)
      .then(() => window.alert("Message sent successfully!"))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div
      style={{
        width: isMobile ? "100%" : "600px",
        padding: isMobile ? "50px 10px" : "50px 100px",
        marginTop: isMobile ? "0px" : "-150px",
      }}
      className={classes.card}
    >
      <h1 className={classes.title}>Contact Us</h1>
      <p>
        If you have questions or just want to get in touch, use the form below.
        We look forward to hearing from you!
      </p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          className={classes.input}
          required
          id="name"
          type="name"
          value={name}
          size="51"
          placeholder=" Name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          className={classes.input}
          required
          id="email"
          type="email"
          value={email}
          size="51"
          placeholder=" E-Mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <textarea
          className={classes.inputMessage}
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
        <br />
        <button className={classes.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
