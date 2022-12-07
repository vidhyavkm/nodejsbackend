const express = require("express");
const app = express();
const { port } = require("./config");
const cors = require("cors");
const mailRouter = require("./routes/mail-router");
const logger = require("morgan");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", mailRouter);
app.listen(port, (error) => {
  if (error) {
    console.log("Error::", error);
  } else {
    console.log("port running", port);
  }
});
