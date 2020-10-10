import React from "react";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const EditBlogPage = () => {
  const [title, setTitle] = React.useState("Insert Title");
  const [body, setBody] = React.useState("");
  const router = useRouter();

  const handleSave = () => {
    return createBlog(title, body)
      .then(() => router.replace(urls.pages.admin.home))
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

export default EditBlogPage;
