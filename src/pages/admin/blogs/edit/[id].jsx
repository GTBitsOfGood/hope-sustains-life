import React from "react";
import PropTypes from "prop-types";
import EditBlogPage from "../../../../screens/EditBlog";
import { getBlogById } from "../../../../actions/Blog";

const EditPost = ({ blogPost }) => {
  return <EditBlogPage blogPost={blogPost} />;
};

EditPost.getInitialProps = async ({ query }) => {
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

EditPost.propTypes = {
  blogPost: PropTypes.object.isRequired,
};

export default EditPost;
