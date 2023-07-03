const express = require("express");
const router = express.Router();

const db = [
    {
        image: "https://images.unsplash.com/photo-1625797226467-a87561e3d77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Morning View",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1625884422538-4edf3a9987d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
        heading: "Man Standing",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1612908630755-31679b2bc781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Mountains",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
];

router.get("/", (req, res) => {
    res.render("index", { title: "Homepage", posts: db });
});
router.get("/about", (req, res) => {
    res.render("about", { title: "about page", posts: db });
});

router.get("/users", (req, res) => {
    res.render("users", { title: "users ", posts: db });
});


module.exports = router;
