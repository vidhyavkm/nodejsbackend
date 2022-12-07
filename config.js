const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  fromMail: process.env.FROMEMAIL,
  mailPass: process.env.MAILPASS,
  toMail: process.env.TOMAIL
};
