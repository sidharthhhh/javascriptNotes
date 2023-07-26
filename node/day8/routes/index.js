var express = require('express');
var router = express.Router();
const User = require('../models/userModel');
const user = require('../models/userModel');

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
    // res.render("profile");
    res.redirect("/profile");
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

router.get('/delete/:id', async function (req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/profile");
  } catch (error) {
    res.send(error);
  }
});

router.get('/update/:id', async function (req, res, next) {
  try {
    const currentuser = await User.findOne({
      _id: req.params.id
    });
    res.render("update", { user: currentuser });
  } catch (error) {
    res.send(error);
  }
});

router.post('/update/:id', async function (req, res, next) {
   await user.findOneAndUpdate(
    {_id: req.params.id},
       {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }
  )
  res.redirect("/profile")
});



router.get("/getemail", function(req, res) {
  res.render("getemail", { title: "forgot password" });
});

router.post("/get-email", async function(req, res) {
  try {
    const { email } = req.body;

    // Validate the email input
    // if (!isValidEmail(email)) {
    //   return res.status(400).send("Invalid email format");
    // }

    const user = await User.findOne({ email });

    if (user === null) {
      return res.send("User not found");
    }

    res.redirect("/change-password/" + user._id);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.get("/change-password/:id", function(req, res) {
  res.render("changepassword", { title: "Change Password", id: req.params.id });
});

router.post("/change-password/:id", async function(req, res) {
  try {
    const { password } = req.body;

    // Add proper password validation here if necessary

    await User.findByIdAndUpdate(req.params.id, { password });
    res.redirect("/signup");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

// Helper function to validate email format

/* function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} */

module.exports = router;


module.exports = router;
