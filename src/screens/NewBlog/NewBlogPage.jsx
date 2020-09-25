import React from "react";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";
import { createBlog } from "../../actions/Blog";

const NewBlogPage = () => {
  const [title, setTitle] = React.useState("Insert Title");
  const [body, setBody] = React.useState("");

  const handleSave = () => {
    return createBlog(title, body)
      .then(() => window.alert("Blog saved successfully!"))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={classes.blogContainer}>
      <div className={classes.buttonContainer}>
        <button onClick={handleSave} className={classes.blogButton}>
          Save & Finish
        </button>
      </div>
      <div className={classes.titleContainer}>
        <input
          className={classes.title}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <TextEditor value={body} onChange={(newBody) => setBody(newBody)} />
    </div>
  );
};

export default NewBlogPage;
