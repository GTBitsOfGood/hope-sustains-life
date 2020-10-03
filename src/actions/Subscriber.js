import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

/*
  This is being used to build the subscriber page instead of
  just getting the subscribers.  Probably shouldnt be doing that?
*/
export const getSubscribers = () =>
  fetch(urls.baseUrl + urls.pages.adminSubscribers, {
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

export const addSubscriber = (email) =>
  fetch(urls.baseUrl + urls.api.subscribers, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
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
