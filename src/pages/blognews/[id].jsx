import React from "react";
import PropTypes from "prop-types";
import {
  getBlogById,
  getRecommendedBlogs,
} from "../../../server/mongodb/actions/Blog";
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
    let blog = await getBlogById(query.id);
    let recommendations = await getRecommendedBlogs(blog.orderIndex);

    // Next needs JSON serializable data types and dates mess with that
    blog = JSON.parse(JSON.stringify(blog));
    recommendations = JSON.parse(JSON.stringify(recommendations));

    return {
      props: { blog, recommendations },
    };
  } catch (err) {
    return { props: { blog: {} } };
  }
};

export default BlogContent;
