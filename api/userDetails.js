const mongoose = require("mongoose");

const userDetailsScehma = new mongoose.Schema(
    {
        uname: String,
        email: String,
        phoneNo: String
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", userDetailsScehma);