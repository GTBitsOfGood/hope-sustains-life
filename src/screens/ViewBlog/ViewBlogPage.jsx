import React from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import styles from "./ViewBlog.module.css";
import urls from "../../../utils/urls";
const ViewBlogPage = ({ image, title, subtitle, body, references }) => {
  return (
    <div>
      <Link href={urls.pages.admin.blogs}>
        <button className={styles.backButton}>
          <i className={styles.arrow}></i>
          BACK
        </button>
      </Link>
      <br></br>
      {image && (
        <Image
          className={styles.imageFormat}
          cloudName="dh7fnazjb"
          publicId={image.url}
          secure="true"
        ></Image>
      )}
      <div className={styles.headAndBodyContainer}>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>{title}</h1>
        <h4 style={{ textAlign: "center" }}>{subtitle}</h4>
        <br />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {references && (
          <div>
            <label style={{ fontWeight: "bold", fontSize: 18 }}>
              REFERENCES
            </label>
            <div
              style={{ marginBottom: 124 }}
              dangerouslySetInnerHTML={{ __html: references }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBlogPage;
