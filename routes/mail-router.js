const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controller/mail");

router.get("/", (req, res) => {
  res.json("hello world");
});

router.post("/mail", async (req, res) => {
  sendEmail(req.body.name, req.body.mailId, req.body.subject, req.body.message);
  res.send("send email success");
});

module.exports = router;
