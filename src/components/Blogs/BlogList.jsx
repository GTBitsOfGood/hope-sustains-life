import React from "react";
import PropTypes from "prop-types";
import BlogCard from "./BlogCard";
import styles from "./blog.module.css";

const BlogList = ({ blogs }) => {
  return (
    <div className={styles.blogContainer}>
      {blogs.map((blog, index) => (
        <BlogCard blog={blog} key={blog._id} index={index} />
      ))}
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogList;
