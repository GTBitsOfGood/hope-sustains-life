import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const getBlogs = () =>
  fetch(urls.baseUrl + urls.api.blogs.index, {
    method: "GET",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return json.payload;
    });

export const createBlog = (
  title,
  subtitle,
  body,
  references,
  isPublished,
  image
) =>
  fetch(urls.baseUrl + urls.api.blogs.index, {
    method: "POST",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      subtitle,
      body,
      references,
      isPublished,
      image,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return;
    });

export const updateBlog = (
  id,
  title,
  subtitle,
  body,
  references,
  isPublished,
  image,
  deleteOriginalImage
) => {
  // TODO - make necessary API calls to update the blog
  // If deleteOriginalImage is true, delete original image from Cloudinary on backend
  fetch(urls.baseUrl + urls.api.blogs.index + `/${id}`, {
    method: "PUT",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      subtitle,
      body,
      references,
      isPublished,
      image,
      deleteOriginalImage,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return;
    });
 
  
  throw new Error("API to update Blog has not been implemented");
};

export const deleteBlogById = (id) =>
  fetch(urls.baseUrl + urls.api.blogs.index + `/${id}`, {
    method: "DELETE",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return;
    });

export const getBlogById = (id) =>
  fetch(urls.baseUrl + urls.api.blogs.index + `/${id}`, {
    method: "GET",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return json.payload;
    });

export const publishBlog = (id, isPublished) =>
  fetch(urls.baseUrl + urls.api.blogs.publish + `/${id}`, {
    method: "PATCH",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isPublished,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return;
    });

export const reorderBlogs = async (blogs) =>
  fetch(urls.baseUrl + urls.api.blogs.index, {
    method: "PUT",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogs,
      action: "REORDER_BLOGS",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API!");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return;
    });
