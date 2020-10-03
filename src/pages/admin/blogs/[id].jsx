import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { getBlogById } from "../../../actions/Blog";

const ViewPost = ({ blogPost }) => {
  return (
    <>
      <Link href="/admin/blogs">
        <button>Back</button>
      </Link>
      <h1>{blogPost?.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: blogPost?.body }} />
    </>
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
