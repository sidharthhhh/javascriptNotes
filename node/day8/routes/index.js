var express = require('express');
var router = express.Router();
const User = require('../models/userModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/signup', function (req, res, next) {
  res.render('signup');
});

router.post('/signup', async function (req, res, next) {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.redirect("./signin");


    // .then(() => res.redirect("./signin"));    
  } catch (error) {
    console.log(error)
  }

  //  newuser
  //  .save()
  //  .then(()=> res.redirect("/signin"))
  //  .catch((err)=> console.log(err))
});


router.get('/signin', function (req, res, next) {
  res.render('signin');
});
router.post('/signin', async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne(   username );
    if (!user) {
      return res.send(`User not found. <a href="/signup">Sign up</a>`);
    }
    if (user.password !== password) {
      return res.send(`Incorrect password. <a href="/signup">Sign up</a>`);
    }
    //  res.json(user);
    // res.render("profile")
    res.redirect("/profile")
  } catch (error) {
    res.send(error);
  }
});
router.get('/profile', async function (req, res, next) {
  try {
    // const users = await userModel.find(); 
    const users = await User.find();
    res.render("profile", { title: "profile", users });
  } catch (error) {
    console.log(error);
  }
});

router.get('/delete/:id', async function (req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/profile");
  } catch (error) {
    res.send(error);
  }
});



module.exports = router;
