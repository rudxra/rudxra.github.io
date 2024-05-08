const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const contactEmail = nodemailer.createTransport({
  service: 'gmail', // If using Gmail
  auth: {
    user:emailUser, 
    pass:emailPass,
  },
});

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Construct email details
  const mail = {
    from: `${firstName} ${lastName}`,
    to: "rssnow284@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});