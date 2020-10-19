import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import urls from "../../../utils/urls";

const donations = () => {
  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.admin.donations} />
      <p>This will list donations</p>
    </>
  );
};

export default donations;
