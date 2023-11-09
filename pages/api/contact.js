import axios from "axios";

export default function handler(req, res) {
  let data = JSON.stringify({
    recipients: [
      {
        address: "info@agosd.org",
      },
      { address: "luke@grahamwebworks.com" },
    ],
    content: {
      from: {
        email: "luke@mail.grahamwebworks.com",
        name: "AGOSD.ORG",
      },
      subject: "Contact form message from AGOSD.ORG",
      text: `${req.body.name} (${req.body.email}) just sent this message via AGOSD.ORG's contact form:

        ${req.body.message}`,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.sparkpost.com/api/v1/transmissions",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.SPARKPOST_API_KEY,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).json({ status: 200 });
    })
    .catch((error) => console.log(error));
}

// NODEMAILER CODE

// const nodemailer = require("nodemailer");

// export default function handler(req, res) {
//   res.status(200).json({ status: 200 });

//   async function main() {
//     let transporter = nodemailer.createTransport({
//       host: "mail.gandi.net",
//       port: "465",
//       secure: "true",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: '"AGOSD.ORG" <donotreply@agosd.org',
//       to: "info@agosd.org",
//       subject: "Contact form message from AGOSD.ORG",
//       text: `${req.body.name} (${req.body.email}) just sent this message via AGOSD.ORG's contact form:

//         ${req.body.message}`,
//     });

//     transporter.verify(function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Server is ready to take our message", success);
//       }
//     });
//   }

//   main().catch(console.error);
// }
