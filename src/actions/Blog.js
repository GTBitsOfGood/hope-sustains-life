import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const getBlogs = () =>
  fetch(urls.baseUrl + urls.api.blogs, {
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
  fetch(urls.baseUrl + urls.api.blogs, {
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

      return json.payload;
    });

export const deleteBlogById = (id) =>
  fetch(urls.baseUrl + urls.api.blogs + `/${id}`, {
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

      return json.payload;
    });

export const getBlogById = (id) =>
  fetch(urls.baseUrl + urls.api.blogs + `/${id}`, {
    method: "GET",
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
      return json.payload;
    });
