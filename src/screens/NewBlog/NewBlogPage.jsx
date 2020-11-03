import React from "react";
import BlogPostForm from "../../components/BlogPostForm";
import { useRouter } from "next/router";
import { createBlog } from "../../actions/Blog";
import urls from "../../../utils/urls";

const NewBlogPage = () => {
  const router = useRouter();

  const handleSavePublish = async (
    title,
    subtitle,
    body,
    references,
    isPublished,
    cloudinaryImage,
    deleteOriginalImage = false // This is used by EditBlogPage handler
  ) => {
    await createBlog(
      title,
      subtitle,
      body,
      references,
      isPublished,
      cloudinaryImage
    );
    router.replace(urls.pages.admin.blogs);
  };

  return <BlogPostForm handleSavePublish={handleSavePublish} />;
};

export default NewBlogPage;
