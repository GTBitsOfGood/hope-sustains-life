import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const login = async (email, password) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.users + "?action=LOGIN",
    method: "POST",
    body: {
      email,
      password,
    },
    isSecure: true,
  });
};

export const logout = async () => {
  return await appRequest({
    url: urls.baseUrl + urls.api.users + "?action=LOGOUT",
    method: "POST",
    isSecure: true,
  });
};

export const updateCurrentUser = async (email, password) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.users,
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

  return await fetch(urls.baseUrl + urls.api.users, {
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

// Stub function to test Reset PW UI
export const resetPassword = async ({token, password}) => {
  alert({token, password})
};