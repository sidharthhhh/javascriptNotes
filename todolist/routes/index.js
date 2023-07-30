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

router.patch("/update/:id/:index", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const todoIndex = parseInt(req.params.index);

    if (todoIndex < 0 || todoIndex >= user.todo.length) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    // Assuming req.body contains the updated todo item properties
    const { title, des } = req.body;

    // Update the todo item at the specified index
    user.todo[todoIndex].title = title;
    user.todo[todoIndex].des = des;

    await user.save();

    res.json({ message: "Todo item updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});





module.exports = router;
