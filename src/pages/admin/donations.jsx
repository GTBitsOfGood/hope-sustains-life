import React from "react";
import AdminNavBar from "../../components/AdminNavBar";

const donations = () => {
  return (
    <>
      <AdminNavBar loggedIn = {true} currentRoute = '/donations'/>
      <p>This will list donations</p>
    </>
  )};

export default donations;