import React from "react";
import styles from "./EmailSubInput.module.css";
import { addSubscriber } from "../../actions/Subscriber";

const EmailSubInput = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    return addSubscriber(email)
      .then(() => window.alert("Subscribed successfully!"))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={styles.container}>
      <form className={styles.innerContainer} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Join Our Email List</h3>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            required
            id="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className={styles.button} type="submit">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailSubInput;
