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
      {" "}
      <Card className="bg-dark text-white">
        <Card.Img src={BlogNewsImage} alt="Card image" />
        <Card.ImgOverlay style={{ display: "flex", justifyContent: "right" }}>
          <Card.Title
            className={mobileView ? styles.mobileTitleText : styles.titleText}
            style={{
              alignSelf: "center",
              position: "absolute",
              right: "0",
            }}
          >
            Hope Sustains Life
            <br />
            Blogs
          </Card.Title>
          {!mobileView && (
            <Card.Text
              style={{
                alignSelf: "center",
                position: "absolute",
                right: "0",
                marginTop: "10em",
                marginRight: "10em",
                fontSize: "25px",
                fontWeight: "lighter",
                letterSpacing: ".07em",
              }}
            >
              Latest News...
            </Card.Text>
          )}
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default BlogNews;
