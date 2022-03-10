import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rkkarthi43@gmail.com",
    pass: "Karthi143",
  },
});
const options = {
  from: "rkkarthi43@gmail.com",
  to: "divyav.17ec@saividya.ac.in",
  subject: "testing",
  html: `
    <h1 style:"color:blue">welcome to jspider</h1>
    <p>Yes we are learning nodejs </p>`,
};

transporter.sendMail(options, err => {
  if (err) throw err;
  console.log("successfuly mail sent");
});
