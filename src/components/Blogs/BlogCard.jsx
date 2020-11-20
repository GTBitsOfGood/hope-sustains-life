import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./blog.module.css";
import { Button, Card } from "react-bootstrap";
import DefaultImage from "../../../public/static/home-bg.jpg";

const BlogCard = ({ blog, index }) => {
  if (index < 11) {
    return <></>;
  }
  return (
    <>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={blog.image ? blog.image.url : DefaultImage}
        />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.subtitle}</Card.Text>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
