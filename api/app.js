const express = require("express");
const app = express();
const mongoose = require("mongoose")

require("./userDetails");

const User = mongoose.model("UserInfo");

app.use(express.json()); // Move this line above route definitions

app.post("/register", async (req, res) => {
  const { name, email, mobileNo } = req.body;

  try {
    await User.create({
      uname: name,
      email: email,
      phoneNo: mobileNo,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// ... other routes

const mongoUrl = "mongodb+srv://sidharth:qwertyuiop@cluster0.laaxkwc.mongodb.net/";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(e => console.log(e));

app.listen(5000, () => {
  console.log("Server running");
});
