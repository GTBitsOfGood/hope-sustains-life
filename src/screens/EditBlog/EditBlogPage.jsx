import React from "react";
import PropTypes from "prop-types";
import BlogPostForm from "../../components/BlogPostForm";

const EditBlogPage = ({ blogPost }) => {
  return <BlogPostForm blogPost={blogPost} />;
};

EditBlogPage.propTypes = {
  blogPost: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    references: PropTypes.string,
    image: PropTypes.shape({
      public_id: PropTypes.string,
      url: PropTypes.string,
    }),
    isPublished: PropTypes.bool,
  }),
};

export default EditBlogPage;
