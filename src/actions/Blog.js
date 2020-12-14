import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const getBlogs = async (isPublished = false) => {
  return await appRequest({
    url:
      urls.baseUrl +
      urls.api.blogs +
      `?isPublished=${encodeURIComponent(isPublished)}`,
    method: "GET",
    isSecure: false,
  });
};

export const getBlogById = async (id) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs + `/${id}`,
    method: "GET",
    isSecure: false,
  });
};

export const createBlog = async (
  title,
  subtitle,
  body,
  references,
  isPublished,
  image
) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs,
    method: "POST",
    body: {
      title,
      subtitle,
      body,
      references,
      isPublished,
      image,
    },
    isSecure: true,
  });
};

export const updateBlog = async (
  id,
  title,
  subtitle,
  body,
  references,
  isPublished,
  image,
  deleteOriginalImage
) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs + `/${id}`,
    method: "PATCH",
    body: {
      title,
      subtitle,
      body,
      references,
      isPublished,
      image,
      deleteOriginalImage,
    },
    isSecure: true,
  });
};

export const deleteBlogById = async (id) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs + `/${id}`,
    method: "DELETE",
    isSecure: true,
  });
};

export const publishBlog = async (id, isPublished) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs + `/${id}` + "?action=PUBLISH",
    method: "PATCH",
    body: {
      isPublished,
    },
    isSecure: true,
  });
};

export const reorderBlogs = async (blogs) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.blogs + "?action=REORDER",
    method: "PUT",
    body: {
      blogs,
    },
    isSecure: true,
  });
};
