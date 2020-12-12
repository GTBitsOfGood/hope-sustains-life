import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const sendContactEmail = async (email, name, message) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.emails + "?action=CONTACT",
    method: "POST",
    body: {
      email,
      name,
      message,
    },
    isSecure: false,
  });
};
