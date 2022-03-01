/* eslint-disable no-unused-vars */
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "./ForgotPasswordScreen.module.css";
import urls from "../../../utils/urls";

const ForgotPasswordScreen = () => {
  const SUBMIT = { NONE: 0, SUCCESS: 1, ERR: 2 };
  const [email, setEmail] = React.useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(SUBMIT.NONE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(urls.baseUrl + urls.api.forgotpassword, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 200) setSubmit(SUBMIT.SUCCESS);
        else setSubmit(SUBMIT.ERR);
        setLoading(false);
      })
      .catch((error) => {
        window.alert(error.message);
        setSubmit(SUBMIT.ERR);
      });
  };

  return (
    <div className={classes.background}>
      <div className={classes.formContainer}>
        <h2 className={classes.welcomeText}>Forgot Password</h2>
        <h6>Submit Email For Password Recovery</h6>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.inputContainer}>
            <label htmlFor="email" className={classes.inputLabel}>
              Email address
            </label>
            <input
              className={classes.input}
              required
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className={classes.button} type="submit">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
