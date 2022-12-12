const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const connectiondb = require("./dataBase/db");
const signUpRouter = require("./routes/userSignup.js");
const loginRouter = require("./routes/userSignup.js");
const {authenticate} = require("./middleWare/authentication");
const todoReg=require("./routes/userTodo")
const del=require("./routes/userTodo")

const app = express();
const PORT = 8089;
app.get("/", (req, res) => {
  res.send("HOME");
});
app.use(bodyParser.json());

app.use(cors());
// routes
app.use("/", signUpRouter);
app.use("/", loginRouter);
// app.use(authenticate)
app.use("/",todoReg)
app.use("/delete/:noteID",del)
connectiondb();
app.listen(PORT, () => {
  console.log("Server ON PORT http://localhost:8089");
});
