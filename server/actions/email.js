import fetch from "isomorphic-unfetch";

const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";

export async function sendEmail(recipient = process.env.TO_ADDRESS, subject, body, mimetype = "text/plain") {
  if (recipient == null || subject == null || body == null) {
    throw new Error("Recipient email address, subject, and message body must be provided");
  }

  return fetch(sendGridUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: recipient }],
          subject: subject,
        },
      ],
      from: {
        email: process.env.FROM_ADDRESS,
      },
      content: [
        {
          type: mimetype,
          value: body,
        },
      ],
    }),
  })
    .then((response) => response.text())
    .then((text) => {
      if (text) {
        const json = JSON.parse(text);

        if ("errors" in json) {
          // SendGrid can respond with multiple errors, let's deal with one at a time
          const errorMessage = json.errors[0].message;

          throw new Error(errorMessage);
        }

        return json;
      }

      return {};
    });
}
