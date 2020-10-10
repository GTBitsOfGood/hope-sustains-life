import React from "react";
import { useRouter } from "next/router";
import { login } from "../../../actions/User";
import urls from "../../../../utils/urls";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    return login(email, password)
      .then(() => router.replace(urls.pages.admin.home))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={classes.background}>
      <div className={classes.formContainer}>
        <h2 className={classes.welcomeText}>Welcome back</h2>
        <h6>This is for admin login only</h6>
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
          <div className={classes.inputContainer}>
            <label htmlFor="password" className={classes.inputLabel}>
              Password
            </label>
            <input
              className={classes.input}
              required
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className={classes.button} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
