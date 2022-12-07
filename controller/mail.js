const nodemailer = require("nodemailer");
const ejs = require("ejs");
const { fromMail, mailPass, toMail } = require("../config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: fromMail,
    pass: mailPass,
  },
});

const sendEmail = (visiterName, visiterMail, subject, message) => {
  const renderPath = `./views/mail.ejs`;
  ejs.renderFile(
    renderPath,
    { visiterName, visiterMail, message },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        var mailOptions = {
          from: `Anand Portfolio <${fromMail}>`,
          to: toMail,
          subject: subject,
          html: data,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log("Error", error);
          }
          console.log("Message sent: %s", info.messageId);
        });
      }
    }
  );
};

module.exports = {
  sendEmail,
};
