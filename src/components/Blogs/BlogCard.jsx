import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./blog.module.css";
import { Button, Card } from "react-bootstrap";

const BlogCard = ({ blog, index }) => {
  if (index > 6) { 
    return (<></>)
  }
  return (
    <>
      <Card className={styles.card}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
