import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import BlogPostForm from "../../components/BlogPostForm";
import { updateBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const EditBlogPage = ({ blogPost }) => {
  const router = useRouter();

  const handleSavePublish = async (
    title,
    subtitle,
    body,
    references,
    setPublished,
    cloudinaryImage,
    deleteOriginalImage
  ) => {
    updateBlog(
      blogPost._id,
      title,
      subtitle,
      body,
      references,
      setPublished || blogPost.isPublished, // If user clicks save, setPublished will be false so use previous value for the blog published
      cloudinaryImage,
      deleteOriginalImage // this flag is necessary if user does not add new image and deletes the previous one
    ).then(() => router.replace(urls.pages.admin.blogs));
  };

  return (
    <BlogPostForm handleSavePublish={handleSavePublish} blogPost={blogPost} />
  );
};

EditBlogPage.propTypes = {
  blogPost: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    references: PropTypes.string,
    image: PropTypes.shape({
      public_id: PropTypes.string,
      url: PropTypes.string,
    }),
    isPublished: PropTypes.bool,
  }),
};

export default EditBlogPage;
