import React from "react";
import Link from "next/link";
import styles from "./BlogNews.module.css";
import { Button, Card } from "react-bootstrap";
import { displayMobileView } from "../../../utils/screen.js";
import BlogNewsImage from "../../../public/static/blognews.png";

const BlogNews = () => {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={BlogNewsImage} alt="Card image" />
        <Card.ImgOverlay style={{ display: "flex", justifyContent: "right" }}>
          <Card.Title
            style={{
              fontSize: "50px",
              alignSelf: "center",
              paddingLeft: "60%",
              paddingRight: "10%",
            }}
          >
            Hope Sustains Life Blogs
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default BlogNews;
