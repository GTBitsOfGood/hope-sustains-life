import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const login = async (email, password) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.user.login,
    method: "POST",
    body: {
      email,
      password,
    },
    isSecure: false,
  });
};

export const logout = async () => {
  return await appRequest({
    url: urls.baseUrl + urls.api.user.logout,
    method: "POST",
    isSecure: false,
  });
};

export const updateCurrentUser = async (email, password) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.user.updateCurrent,
    method: "PATCH",
    body: {
      email,
      password,
    },
    isSecure: true,
  });
};

// Not changing app request for one unique request so using normal fetch here
export const getCurrentUser = async (cookies) => {
  const conditionals = {};

  if (cookies != null) {
    conditionals.headers = {
      cookie: cookies,
    };
  }

  return await fetch(urls.baseUrl + urls.api.user.getCurrent, {
    method: "GET",
    mode: "same-origin",
    credentials: "include",
    ...conditionals,
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
};
