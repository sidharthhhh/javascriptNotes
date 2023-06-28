const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  const title = "its my title..hehehehehehe";

  function add(a, b) {
    return a + b;
  }
  const sum = add(3, 4)



  res.render("index", {
    title,
    sum
  });
});
module.exports = router;