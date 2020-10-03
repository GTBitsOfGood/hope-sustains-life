import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getBlogs } from "../../actions/Blog.js";
import BlogCardImage from "../../../public/static/blog-card.png";
import classes from "./BlogNews.module.css";

const BlogCard = (blog) => {
  return (
    <>
      <div className={classes.card}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={BlogCardImage} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">{blog.date}</Card.Link>
            <Card.Link href="#">Read More</Card.Link>
          </Card.Body>
        </Card>
      </div>
      ;
    </>
  );
};

const BlogNews = () => {
  const [blog, setBlog] = useState([]);

  useEffect(async () => {
    const result = await getBlogs();
    setBlog(result.blog);
  });
  //create a BlogCard for each blog
  let blogs = [];
  let count = 0;
  console.log("blogs", blog);
  for (let i = 0; i < blog.length; i++) {
    blogs.push(<BlogCard key={blog[count]._id} blog={blog[count]} />);
    count++;
  }
  return blogs;
};

export default BlogNews;
