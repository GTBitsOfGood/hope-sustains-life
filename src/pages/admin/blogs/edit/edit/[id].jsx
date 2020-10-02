import EditBlogPage from "../../../../../screens/EditBlog";
import React from "react";
import Link from "next/Link";
import PropTypes from "prop-types";

const EditPost = ({ blogPost }) => {
  return <EditBlogPage title={blogPost.title} body={blogPost.body} />;
};

EditPost.getInitialProps = async ({ query, req }) => {
  const id = query.id;

  try {
    const blogPost = await getBlog(id);

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
