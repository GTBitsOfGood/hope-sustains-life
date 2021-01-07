import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../../utils/notifications";
import TextEditor from "../TextEditor";
import ImageUploader from "../ImageUploader";
import classes from "./blogPostForm.module.css";
import { updateBlog, publishBlog, createBlog } from "../../actions/Blog";
import { useRouter } from "next/router";
import urls from "../../../utils/urls";

const BlogPostForm = ({ blogPost }) => {
  const [title, setTitle] = React.useState(blogPost?.title);
  const [subtitle, setSubtitle] = React.useState(blogPost?.subtitle);
  const [body, setBody] = React.useState(blogPost?.body);
  const [published, setPublished] = React.useState(blogPost?.isPublished);
  const [uploadedImage, setUploadedImage] = React.useState();
  const [references, setReferences] = React.useState(blogPost?.references);
  const [deleteOriginalImage, setDeleteOriginalImage] = React.useState(false);
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
        public_id: image["public_id"],
        url: image["secure_url"],
      };
    }
    return {};
  };

  const save = async () => {
    try {
      setSaving(true);
      const cloudinaryImage = await uploadImage();
      if (blogPost == undefined || blogPost._id == undefined) {
        await createBlog(
          title,
          subtitle,
          body,
          references,
          false,
          cloudinaryImage
        );
      } else {

      await updateBlog(
        blogPost._id,
        title,
        subtitle,
        body,
        references,
        published,
        cloudinaryImage,
        deleteOriginalImage
      );
      }
      showSuccessNotification("Saved blog post");
    } catch (error) {
      showErrorNotification(error.message);
    } finally {
      setSaving(false);
      router.replace(urls.pages.admin.blogs)
    }
  };

  const publish = async () => {
    try {
      setSaving(true);
      const cloudinaryImage = await uploadImage();
      if (blogPost == undefined || blogPost._id == undefined) {
        await createBlog(
          title,
          subtitle,
          body,
          references,
          true,
          cloudinaryImage
        );
      } else {
        await publishBlog(blogPost._id, !published);
      }
      setPublished(!published);
      showSuccessNotification("Published blog post");
    } catch (error) {
      showErrorNotification(error.message);
    } finally {
      setSaving(false);
      router.replace(urls.pages.admin.blogs)
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
          onClick={save}
          className={classes.blogButton}
          disabled={saving}
          variant="dark"
        >
          Save & Finish
        </Button>
        <Button
          onClick={publish}
          className={classes.blogButton}
          disabled={saving}
          variant="dark"
        >
          {saving ? "..." : published ? "Unpublish" : "Publish"}
        </Button>
      </div>
      <ImageUploader
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        originalImageURL={blogPost?.image?.url}
        deleteOriginalImage={deleteOriginalImage}
        setDeleteOriginalImage={setDeleteOriginalImage}
      />
      <Form.Group controlId="blogTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          placeholder="Enter Title"
          className={classes.title}
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="blogSubtitle">
        <Form.Label>Subtitle</Form.Label>
        <Form.Control
          type="text"
          className={classes.subtitle}
          placeholder={"Enter Subtitle"}
          value={subtitle}
          onChange={(event) => setSubtitle(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="blogBody">
        <Form.Label>Body</Form.Label>
        <TextEditor
          className={classes.bodyContainer}
          value={body}
          onChange={(newBody) => setBody(newBody)}
        />
      </Form.Group>
      <Form.Group controlId="blogReferences">
        <Form.Label>References</Form.Label>
        <Form.Control
          type="text"
          className={classes.referencesContainer}
          placeholder={"Enter Subtitle"}
          value={references}
          onChange={(e) => setReferences(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

BlogPostForm.propTypes = {
  blogPost: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isPublished: PropTypes.bool.isRequired,
    references: PropTypes.string,
    image: PropTypes.shape({
      public_id: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

export default BlogPostForm;
