import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import urls from "../../../utils/urls";


const subscribers = () => {
  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute= {urls.pages.adminSubscribers} />
      <p>This will list all Subscribers</p>
    </>
  );
};


export default subscribers;
