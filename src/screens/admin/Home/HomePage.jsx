import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import AdminNavBar from "../../../components/AdminNavBar";
import { getCurrentUser } from "../../../actions/User";

const HomePage = ({ currentUser, router }) => (
  <AdminNavBar loggedIn = {currentUser != null } currentRoute = {router.asPath}></AdminNavBar>
);

HomePage.propTypes = {
  currentUser: true,
  router: PropTypes.object.isRequired,
};

export default HomePage;
