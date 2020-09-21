import React from "react";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";

const NewBlogPage = () => {
  const [title, setTitle] = React.useState("Insert Title");
  const [body, setBody] = React.useState("");

  const handleSave = () => {
    console.log(title);
    console.log(body);
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
