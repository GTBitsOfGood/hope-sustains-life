import React from "react";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";

const NewBlogPage = () => {
  const [currentBlogContent, setBlogContent] = React.useState("");

  return (
    <div className={classes.newBlog}>
      <div className={classes.buttonContainer}>
        <button className={classes.blogButton}>Save & Finish</button>
        <button className={classes.blogButton}> Publish </button>
      </div>
      <h1
        contentEditable="true"
        className={classes.newBlogTitle}
        suppressContentEditableWarning={true}
      >
        [Insert Headline]
      </h1>
      <h4 style={{ textAlign: "right" }}>Date</h4>
      <TextEditor
        value={currentBlogContent}
        onChange={(val) => setBlogContent(val)}
      />
    </div>
  );
};

export default NewBlogPage;
