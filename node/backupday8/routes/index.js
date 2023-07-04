const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const post = ["Gurpreet", "Rahul", "Ranjan"]
    res.render("index", {
        title: "homepage", post
    })
});
router.get('/product', (req, res) => {
    const profile = {
        name: "sidharth",
        skill: "Full stack developer"
    }
    res.render("product", {
        title: "product", profile
    })
});
router.get('/about', (req, res) => {
    res.render("about", {
        title: "about", 
    })
});
module.exports = router;