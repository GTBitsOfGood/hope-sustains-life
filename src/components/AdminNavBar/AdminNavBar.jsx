import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./AdminNavBar.module.css";

const AdminNavBar = ({ loggedIn, currentRoute }) => (
  <div>
    <div className={styles.root}>
      <img src="/static/hsl-logo-white.png"></img>
      {routes
        // .filter((route) => (loggedIn && route.auth) || (!loggedIn && !route.auth))
        .map(({ name, link }) => (
          <NavLink className={styles.navlink} href={link} key={name}>
            <div
              className={clsx(
                currentRoute === link
                  ? styles.endRoute && styles.selected
                  : styles.route
              )}
            >
              {name === "Admin" && <img src="/static/admin-logo.png"></img>}
              {name}
            </div>
          </NavLink>
        ))}
    </div>
  </div>
);

AdminNavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default AdminNavBar;
