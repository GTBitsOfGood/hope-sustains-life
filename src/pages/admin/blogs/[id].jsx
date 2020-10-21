import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Image } from "cloudinary-react";
import { getBlogById } from "../../../actions/Blog";
import urls from "../../../../utils/urls";
import styles from "./ViewBlog.module.css";

const ViewPost = ({ blogPost }) => {
  return (
    <div>
      <Link href={urls.pages.admin.blogs}>
        <button className={styles.backButton}>
          <i className={styles.arrow}></i>
          BACK
        </button>
      </Link>
      <br></br>
      {blogPost?.image && (
        <Image
          className={styles.imageFormat}
          cloudName="dh7fnazjb"
          publicId={blogPost?.image.url}
          secure="true"
        ></Image>
      )}
      <div className={styles.headAndBodyContainer}>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          {blogPost?.title}
        </h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: blogPost?.body }} />
        {blogPost?.references && (
          <div>
            <label style={{ fontWeight: "bold", fontSize: 18 }}>
              REFERENCES
            </label>
            <div dangerouslySetInnerHTML={{ __html: blogPost?.references }} />
          </div>
        )}
      </div>
    </div>
  );
};

ViewPost.getInitialProps = async ({ query }) => {
  try {
    const blogPost = await getBlogById(query.id);
    return {
      blogPost,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

ViewPost.propTypes = {
  blogPost: PropTypes.object,
};

export default ViewPost;
