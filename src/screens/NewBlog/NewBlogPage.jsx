import React from "react";
import { Input } from "react-bootstrap";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const EditBlogPage = () => {
  const [title, setTitle] = React.useState("Insert Title");
  const [subtitle, setSubtitle] = React.useState("Insert Subtitle");
  const [body, setBody] = React.useState("");
  const [references, setReferences] = React.useState("References...");
  const router = useRouter();

  const handleSave = () => {
    return createBlog(title, subtitle, body, references, false)
      .then(() => router.replace(urls.pages.adminHome))
      .catch((error) => window.alert(error.message));
  };

  const handlePublish = () => {
    return createBlog(title, subtitle, body, references, true)
      .then(() => router.replace(urls.pages.adminHome))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={classes.blogContainer}>
      <div className={classes.buttonContainer}>
        <button onClick={handleSave} className={classes.blogButton}>
          Save & Finish
        </button>
        <button onClick={handlePublish} className={classes.blogButton}>
          Publish
        </button>
      </div>
      <div className={classes.titleContainer}>
        <input
          className={classes.title}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={classes.subtitleContainer}>
        <input
          className={classes.subtitle}
          value={subtitle}
          onChange={(event) => setSubtitle(event.target.value)}
        />
      </div>
      <div>
        <TextEditor
          className={classes.bodyContainer}
          value={body}
          onChange={(newBody) => setBody(newBody)}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <TextEditor
          className={classes.referencesContainer}
          value={references}
          onChange={(newReferences) => setReferences(newReferences)}
        />
      </div>
    </div>
  );
};

export default EditBlogPage;
