import React from "react";
import PropTypes from "prop-types";
import BlogTable from "../../../components/Blogs/BlogTable";
import AdminNavBar from "../../../components/AdminNavBar";
import urls from "../../../../utils/urls";
import { getBlogs } from "../../../actions/Blog";

const Blogs = ({ blogs }) => (
  <>
    <AdminNavBar loggedIn={true} currentRoute={urls.pages.adminBlogs} />
    <BlogTable blogs={blogs || []} />
  </>
);

Blogs.getInitialProps = async () => {
  return getBlogs()
    .then((blogs) => {
      return { blogs };
    })
    .catch((err) => {
      return { error: err.message };
    });
};

Blogs.propTypes = {
  blogs: PropTypes.array,
};

export default Blogs;
