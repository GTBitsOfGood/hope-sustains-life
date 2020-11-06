import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const sendContactEmail = (email, name, message) =>
  fetch(urls.baseUrl + urls.api.email.contactUs, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      message,
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
