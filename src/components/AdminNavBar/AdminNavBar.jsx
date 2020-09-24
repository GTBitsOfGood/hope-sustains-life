import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./AdminNavBar.module.css";

const AdminNavBar = ({ loggedIn, currentRoute }) => (
  <div className={styles.root}>
    {routes
      .filter((route) => (loggedIn && route.auth) || (!loggedIn && !route.auth))
      .map(({ name, link }) => (
        <NavLink href={link} key={name}>
          {name}
        </NavLink>
      ))}
  </div>
);

AdminNavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default AdminNavBar;