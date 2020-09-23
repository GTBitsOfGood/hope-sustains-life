import React from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import Router from "next/router";
import { getCurrentUser } from "../../../actions/User";

const HomePage = ({router}) => (
    <AdminNavBar loggedIn={true} currentRoute={router.asPath}></AdminNavBar>
);

export default HomePage;
