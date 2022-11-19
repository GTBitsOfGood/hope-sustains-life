import fetch from "isomorphic-unfetch";

const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";
const adminEmail = "bernard.michel@hopesustainslife.org";

export async function sendEmail(recipient, subject, body, mimetype) {
  if (recipient == null || subject == null || body == null) {
    throw new Error(
      "Recipient email address, subject, message body, and MIME type must be provided"
    );
  }

  let newBody = `${recipient}: ` + body;

  return fetch(sendGridUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: adminEmail }],
          subject: subject,
        },
      ],
      from: {
        email: process.env.FROM_ADDRESS,
      },
      content: [
        {
          type: mimetype,
          value: newBody,
        },
      ],
    }),
  })
    .then((response) => response.text())
    .then((text) => {
      if (text) {
        const json = JSON.parse(text);
        console.log(text);

        if ("errors" in json) {
          throw new Error("Sendgrid email failed to send");
        }

        return json;
      }

      return {};
    });
}
