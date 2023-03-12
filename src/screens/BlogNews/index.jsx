import React from "react";
import PropTypes from "prop-types";
import { getBlogs } from "../../actions/Blog";
import BlogNews from "./BlogNews";
import BlogList from "../../components/Blogs/BlogList";
import { Button } from "react-bootstrap";
import classes from "./BlogNews.module.css";
import Footer from "../../components/Footer";
import DonationSection from "../../components/DonationSection/DonationSection";

const BlogsNewsContainer = ({ blogs }) => (
  <>
    <BlogNews />
    <BlogList blogs={blogs || []} />
    <div>
      <div className={classes.background}>
        <DonationSection />
      </div>
      <Footer />
    </div>
  </>
);

BlogsNewsContainer.getInitialProps = async () => {
  return getBlogs(true)
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
