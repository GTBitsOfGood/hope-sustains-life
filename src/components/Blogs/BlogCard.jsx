import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classes from "./blog.module.css";
import { Button, Card } from "react-bootstrap";

const BlogCard = ({ blog, index }) => {

    return (
        <>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
            </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;

