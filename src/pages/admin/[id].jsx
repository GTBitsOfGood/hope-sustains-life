import React from "react";
import Link from "next/Link";
import PropTypes from "prop-types";
// import {  } from "../../actions/Blog";

const ViewPost = ({ blogPost }) => {
  return (
    <>
      <h1>{blogPost.title}</h1>
      <br />
      <p>{blogPost.body}</p>
      <Link href="./blogs/">
        <button>Back</button>
      </Link>
    </>
  );
};

ViewPost.getInitialProps = async ({ query }) => {
  const id = query.id;

  try {
    const blogPost = null; // TODO - add API call to retrieve blog by id
    // const blogPost = await getBlog(id);

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
  blogPost: PropTypes.array.isRequired,
};

export default ViewPost;
