var express = require('express');
var router = express.Router();
const User = require('../models/userModel');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/profile/:id', async function (req, res, next) {
  const user = await User.findById(req.params.id);
  res.render('profile',{user});
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
    const { email, password } = req.body;

    // Assuming 'User' is the correct model representing your user collection
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.send(`User not found. <a href="/signup">Sign up</a>`);
    }

    if (user.password !== password) {
      return res.send(`Incorrect password. <a href="/signup">Sign up</a>`);
    }

    // res.json(user);
    // res.render("profile",{user,arr});
    res.redirect("/profile/"+user._id);
  } catch (error) {
    res.send(error);
  }
});

router.post("/profile/:id",async (req, res) => {
  const user = await User.findById(req.params.id);
  user.todo.push(req.body);
  user.save();
  res.redirect("/profile/"+req.params.id);
});


router.get("/delete/:id/:index",async (req, res) => {
  const user = await User.findById(req.params.id);
  user.todo.splice((user.todo[req.params.index]),1);
  await user.save();
  res.redirect("/profile/"+req.params.id);

});

router.get("/update/:id/:index",async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("update",{user: user,todo: user.todo[req.params.index],index: req.params.index});
});


router.post("/update/:id/:index",async (req, res) => {
  const user = await User.findById(req.params.id);
  user.todo[req.params.index] = req.body;
  await user.save();
  res.redirect("/profile/"+req.params.id);
});



module.exports = router;
