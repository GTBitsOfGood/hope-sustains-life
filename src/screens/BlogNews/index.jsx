import React from "react";
import PropTypes from "prop-types";
import { getBlogs } from "../../actions/Blog";
import BlogNews from "./BlogNews";
import BlogList from "../../components/Blogs/BlogList";
import { Button } from "react-bootstrap";
import classes from "./BlogNews.module.css";
import urls from "../../../utils/urls";
import Link from "next/link";

const BlogsNewsContainer = ({ blogs }) => (
  <>
    <BlogNews />
    <BlogList blogs={blogs || []} />
    <div className={classes.background}>
      <h1 className={classes.donateText}>
        Don’t wait to change the<br></br>world...the world needs the <br></br>
        change you can bring now
      </h1>
      <div className={classes.buttonDiv}>
        <Link href={urls.pages.donate.index}>
          <Button className={classes.donateButton}>Donate</Button>
        </Link>
      </div>
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
