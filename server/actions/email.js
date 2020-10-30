import fetch from "isomorphic-unfetch";

const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";

export async function sendContactEmail(email, name, message) {
  if (email == null || name == null || message == null) {
    throw new Error("Email, name, and message must be provided");
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
          to: [{ email: process.env.TO_ADDRESS }],
          subject: `[HSL] New Contact from ${name}`,
        },
      ],
      from: {
        email: process.env.FROM_ADDRESS,
      },
      content: [
        {
          type: "text/plain",
          value: message,
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
