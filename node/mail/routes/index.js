var express = require("express");
const { sendmail } = require("../utils/mail");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/send-mail", function (req, res, next) {
    sendmail(req, res);
});

module.exports = router;
