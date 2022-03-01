import urls from "../../utils/urls";
import appRequest from "../../utils/requests";

export const sendEmail = async (email, subject, message) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.emails + "?action=CONTACT",
    method: "POST",
    body: {
      email,
      subject,
      message,
    },
    isSecure: false,
  });
};
