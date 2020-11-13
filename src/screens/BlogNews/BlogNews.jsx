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
      {mobileView && (
        <Card className="bg-dark text-white">
          <Card.Img src={BlogNewsImage} alt="Card image" />
          <Card.ImgOverlay style={{ display: "flex", justifyContent: "right" }}>
            <div className={styles.mobileTitleText}>
              <Card.Title
                style={{
                  fontSize: "25px",
                  alignSelf: "center",
                }}
              >
                Hope Sustains
                <br />
                Life Blogs
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      )}
    </>
  );
};

export default BlogNews;
