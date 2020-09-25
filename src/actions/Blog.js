import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const getBlogs = () => {};

export const createBlog = (title, body) =>
  fetch(urls.baseUrl + urls.api.blogs, {
    method: "POST",
    mode: "same-origin",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
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
