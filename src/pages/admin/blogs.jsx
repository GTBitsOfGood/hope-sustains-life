import React from "react";
import BlogTable from "../../screens/BlogTable";
import AdminNavBar from "../../components/AdminNavBar";
import urls from "../../../utils/urls";

const blogs = () => {
  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.adminBlogs} />
      <BlogTable />;
    </>
  );
};

export default blogs;
