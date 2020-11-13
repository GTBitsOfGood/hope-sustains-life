import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./blog.module.css";
import { Card } from "react-bootstrap";
import urls from "../../../utils/urls";
import DefaultImage from "../../../public/static/home-bg.jpg";

const BlogCard = ({ blog }) => {
  const blogUrl = `${urls.pages.blogNews}/${blog._id}`;
  return (
    <Link href={blogUrl}>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={blog.image ? blog.image.url : DefaultImage}
        />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
