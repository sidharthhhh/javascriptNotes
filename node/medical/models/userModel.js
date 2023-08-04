const mongoose = require("mongoose");
const db = require("./db")

const userModel = new mongoose.Schema({
    username : String,
    email : String,
    password: String,
    data: Array
});
const user = mongoose.model("user", userModel);
module.exports = user;