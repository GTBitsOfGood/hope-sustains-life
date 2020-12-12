import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const getSubscribers = async () => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers,
    method: "GET",
    isSecure: true,
  });
};

export const addSubscriber = async (email) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers,
    method: "POST",
    body: {
      email,
    },
    isSecure: false,
  });
};

export const deleteSubscriber = async (id) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers + `/${id}`,
    method: "DELETE",
    isSecure: true,
  });
};
