import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import urls from "../../../utils/urls";

const editprofile = () => {
  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.adminEditProfile} />
      <p>Admin can edit their profile here</p>
    </>
  );
};

export default editprofile;
