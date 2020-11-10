import React from "react";
import PropTypes from "prop-types";
import { getBlogs } from "../../actions/Blog";
import BlogNews from "./BlogNews";
import BlogList from "../../components/Blogs/BlogList";

const BlogsNewsContainer = ({ blogs }) => (
  <>
    <BlogNews />
    <BlogList blogs={blogs || []} />
  </>
);

BlogsNewsContainer.getInitialProps = async () => {
  return getBlogs()
    .then((blogs) => {
      return { blogs };
    })
    .catch((err) => {
      return { error: err.message };
    });
};

BlogsNewsContainer.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsNewsContainer;
