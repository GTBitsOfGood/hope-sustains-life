import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const getSubscribers = async () => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers.index,
    method: "GET",
    isSecure: true,
  });
};

export const addSubscriber = async (email) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers.index,
    method: "POST",
    body: {
      email,
    },
    isSecure: false,
  });
};

export const deleteSubscriber = async (email) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.subscribers.index + `/${email}`,
    method: "DELETE",
    isSecure: true,
  });
};
