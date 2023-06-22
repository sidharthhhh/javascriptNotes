const express = require('express');

const router = express.Router();


router.get("/", (req, res)=>{
    res.send("chal aaja js padte hauiu")
})

module.exports = router;
