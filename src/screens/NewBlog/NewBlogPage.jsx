import React, { useEffect } from "react";
import TextEditor from "../../components/TextEditor";
import ImageUploader from "../../components/ImageUploader";
import classes from "./NewBlogPage.module.css";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const NewBlogPage = () => {
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState();
  const [references, setReferences] = React.useState("References..");
  const router = useRouter();

  const uploadImage = async (e) => {
    // TODO: call in publish method
    if (uploadedImage) {
      console.log("Uploading image");
      const file = uploadedImage.imgBuffer;
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "NewBlogImage");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dh7fnazjb/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const image = await res.json();
      console.log(image);
    }
  };

  const handleSave = () => {
    return createBlog("", title, subtitle, body, references, false)
      .then(() => router.replace(urls.pages.adminHome))
      .catch((error) => window.alert(error.message));
  };

  const handlePublish = () => {
    return createBlog("", title, subtitle, body, references, true)
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
        <button onClick={handlePublish} className={classes.blogButton}>
          Publish
        </button>
      </div>
      <ImageUploader
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
      />
      <div className={classes.titleContainer}>
        <input
          className={classes.title}
          placeholder={"Insert Title"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={classes.subtitleContainer}>
        <input
          className={classes.subtitle}
          placeholder={"Insert Subtitle"}
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

export default NewBlogPage;
