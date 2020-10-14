import React, { useEffect } from "react";
import TextEditor from "../../components/TextEditor";
import ImageUploader from "../../components/ImageUploader";
import classes from "./NewBlogPage.module.css";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const EditBlogPage = () => {
  const [title, setTitle] = React.useState("Insert Title");
  const [body, setBody] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState();
  const router = useRouter();

  const handleSave = () => {
    return createBlog(title, body)
      .then(() => router.replace(urls.pages.adminHome))
      .catch((error) => window.alert(error.message));
  };

  useEffect(
    () => () => {
      // destroy temporary URL created for image for preview
      if (uploadedImage?.tmpURL) {
        URL.revokeObjectURL(uploadedImage.tmpURL);
      }
    },
    [uploadedImage]
  );

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
      <ImageUploader
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
      />
      <TextEditor value={body} onChange={(newBody) => setBody(newBody)} />
    </div>
  );
};

export default EditBlogPage;
