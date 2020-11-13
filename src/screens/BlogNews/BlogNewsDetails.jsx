import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../../../public/static/home-bg.jpg";
import BlogCard from "../../components/Blogs/BlogCard";

const BlogNewsDetails = ({ blog, recommendations }) => {
  const { image, title, subtitle, body } = blog;

  const recommendedBlogsCards = recommendations.map((blog) => {
    return <BlogCard blog={blog} key={blog._id} />;
  });

  return (
    <div>
      <img src={image?.url || DefaultImage} />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {recommendedBlogsCards.length > 0 && (
        <div>
          <h3>Recommended for you</h3>
          <div>{recommendedBlogsCards}</div>
        </div>
      )}
    </div>
  );
};

BlogNewsDetails.propTypes = {
  blog: PropTypes.object,
  recommendations: PropTypes.array,
};

BlogNewsDetails.defaultProps = {
  recommendations: [],
};

export default BlogNewsDetails;
