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
  author,
  title,
  subtitle,
  body,
  references,
  isPublished
) =>
  fetch(urls.baseUrl + urls.api.blogs.index, {
    method: "POST",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author,
      title,
      subtitle,
      body,
      references,
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

export const setPublished = (id, isPublished) =>
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
