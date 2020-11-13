import React from "react";
import PropTypes from "prop-types";
import { getBlogById, getRecommendedBlogs } from "../../actions/Blog";
import BlogNewsDetails from "../../screens/BlogNews/BlogNewsDetails";

const BlogContent = ({ blog, recommendations }) => {
  return <BlogNewsDetails blog={blog} recommendations={recommendations} />;
};

BlogContent.propTypes = {
  blog: PropTypes.object.isRequired,
  recommendations: PropTypes.array,
};

export const getServerSideProps = async ({ query }) => {
  try {
    const blog = await getBlogById(query.id);
    const recommendations = await getRecommendedBlogs(blog.orderIndex);
    return {
      props: { blog, recommendations },
    };
  } catch (err) {
    return { props: { blog: {} } };
  }
};

export default BlogContent;
