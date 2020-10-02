import React from "react";
import PropTypes from "prop-types";
import TextEditor from "../../components/TextEditor";
import classes from "./NewBlogPage.module.css";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const EditBlogPage = ({ blogTitle, blogBody }) => {
  const [title, setTitle] = React.useState({ blogTitle });
  const [body, setBody] = React.useState({ blogBody });
  const router = useRouter();

  const handleSave = () => {
    return createBlog(title, body)
      .then(() => router.replace(urls.pages.adminHome))
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

EditBlogPage.propTypes = {
  blogTitle: PropTypes.bool.isRequired,
  blogBody: PropTypes.string.isRequired,
};

export default EditBlogPage;