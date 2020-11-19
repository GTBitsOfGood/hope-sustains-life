import React from "react";
import PropTypes from "prop-types";
import styles from "./blog.module.css";
import urls from "../../../utils/urls";
import { Card } from "react-bootstrap";
import DefaultImage from "../../../public/static/home-bg.jpg";

const BlogCard = ({ blog }) => {
  const blogUrl = `${urls.pages.blogNews}/${blog._id}`;
  return (
    <Card className={styles.card}>
      <Card.Img
        variant="top"
        src={blog.image ? blog.image.url : DefaultImage}
      />
      <Card.Body>
        <Card.Title className={styles.title}>{blog.title}</Card.Title>
        <Card.Text>{blog.subtitle}</Card.Text>
        <Card.Link className={styles.readMore} href={blogUrl}>
          Read More ⇒
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
