import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const verifyPayment = (name, email, amount) =>
  fetch(urls.baseUrl + urls.api.donate.index, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      amount,
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
