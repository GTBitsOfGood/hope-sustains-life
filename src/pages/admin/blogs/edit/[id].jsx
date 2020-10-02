import EditBlogPage from "../../../../screens/EditBlog";
import React from "react";
import PropTypes from "prop-types";

const EditPost = ({ blogPost }) => {
  return <EditBlogPage title={blogPost?.title} body={blogPost?.body} />;
};

EditPost.getInitialProps = async ({ query }) => {
  const id = query.id;

  try {
    const blogPost = null; // TODO - add API call to retrieve blog by id
    // const blogPost = await getBlog(id);

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
  blogPost: PropTypes.array.isRequired,
};

export default EditPost;
