import React from "react";
import styles from "./EmailSubInput.module.css";

const EmailSubInput = () => {
  const [email, setEmail] = React.useState("Your Email");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
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
