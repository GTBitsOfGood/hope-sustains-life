import React from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import urls from "../../../../utils/urls";


const blogs = () => {
  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute= {urls.pages.adminBlogs} />
      <p>This will list all blogs</p>
    </>
  );
};

export default blogs;
