import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
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
  const [saving, setSaving] = React.useState(false);
  const router = useRouter();

  const uploadImage = async () => {
    if (uploadedImage) {
      const file = uploadedImage;
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
      return {
        asset_id: image["asset_id"],
        url: image["secure_url"],
      };
    }
    return null;
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const cloudinaryImage = await uploadImage();
      await createBlog(
        title,
        subtitle,
        body,
        references,
        false,
        cloudinaryImage
      );
      router.replace(urls.pages.adminHome);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    try {
      setSaving(true);
      const cloudinaryImage = await uploadImage();
      await createBlog(
        title,
        subtitle,
        body,
        references,
        true,
        cloudinaryImage
      );
      router.replace(urls.pages.adminHome);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setSaving(false);
    }
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
        <Button
          onClick={handleSave}
          className={classes.blogButton}
          disabled={saving}
          variant="dark"
        >
          Save & Finish
        </Button>
        <Button
          onClick={handlePublish}
          className={classes.blogButton}
          disabled={saving}
          variant="dark"
        >
          Publish
        </Button>
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
