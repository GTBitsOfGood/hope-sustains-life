import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../../../public/static/home-bg.jpg";
import BlogCard from "../../components/Blogs/BlogCard";
import styles from "./BlogNewsDetails.module.css";
import { displayMobileView } from "../../../utils/screen.js";

const BlogNewsDetails = ({ blog, recommendations }) => {
  const { image, title, subtitle, body } = blog;

  const recommendedBlogsCards = recommendations.map((blog) => {
    return <BlogCard blog={blog} key={blog._id} />;
  });

  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();

  return (
    <div className={mobileView ? styles.centerMobile : styles.center}>
      <img className={styles.mainImage} src={image?.url || DefaultImage} />
      <div
        className={mobileView ? styles.titlesMobile : styles.titles}
        style={{ textAlign: "center" }}
      >
        <h1 style={mobileView ? { fontSize: "25px" } : {}}>{title}</h1>
        <h3 style={mobileView ? { fontSize: "15px" } : {}}>{subtitle}</h3>
      </div>
      <div
        style={
          mobileView
            ? { fontSize: "12px", marginBottom: "50px" }
            : { fontSize: "18px", marginBottom: "200px" }
        }
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {recommendedBlogsCards.length > 0 && (
        <div>
          <h3 style={mobileView ? { fontSize: "25px" } : {}}>
            Recommended for you
          </h3>
          <div className={styles.recommendedBlogContainer}>
            {recommendedBlogsCards}
          </div>
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
