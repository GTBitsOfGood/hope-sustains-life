import React from "react";
import classes from "./SSRPage.module.css";

const SSRPage = ({ message, errorMessage }) => {
  return (
    <>
      <h2 className={classes.CenterText}>Welcome to Next.js!</h2>
      <h3>
        This page is server-side rendered, because all API calls are made in
        getInitialProps
      </h3>

      <p>You can tell because the text above does not flash on refresh</p>
    </>
  );
};
export default SSRPage;
