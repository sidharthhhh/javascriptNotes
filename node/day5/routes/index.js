const express = require("express");
const router = express.Router();

// router.get("/", (req, res)=>{
//    res.send("helooooooooooooooooooooooooooooooooooooooooooooooo");
// })
// router.get("/about", (req, res)=>{
//     res.send("loremerjhgfbkdrjvtgrnldkerhn");
//  })

router.get("/", (req, res)=>{
    res.render("index")
})

module.exports = router;