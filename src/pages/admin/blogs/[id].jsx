import React from "react";
import PropTypes from "prop-types";
import { getBlogById } from "../../../actions/Blog";
import urls from "../../../../utils/urls";
import AdminNavBar from "../../../components/AdminNavBar";
import ViewBlog from "../../../screens/ViewBlog/ViewBlogPage";

const ViewPost = ({ blogPost }) => {
  return (
    <div>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.admin.blogs} />
      <ViewBlog
        image={blogPost?.image}
        title={blogPost?.title}
        subtitle={blogPost?.subtitle}
        body={blogPost?.body}
        references={blogPost?.references}
      />
    </div>
  );
};

ViewPost.getInitialProps = async ({ query }) => {
  try {
    const blogPost = await getBlogById(query.id);
    return {
      blogPost,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

ViewPost.propTypes = {
  blogPost: PropTypes.object,
};

export default ViewPost;
