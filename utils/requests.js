import fetch from "isomorphic-unfetch";

export default async function appRequest({ url, method, body, isSecure }) {
  return await fetch(url, {
    method: method,
    mode: "same-origin",
    credentials: isSecure ? "include" : "omit",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Failed to connect to API");
      } else if (!json.success) {
        throw new Error(json.message);
      }

      return json.payload ?? null;
    });
}
