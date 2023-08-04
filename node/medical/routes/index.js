var express = require('express');
var router = express.Router();
const User = require('../models/userModel');
const patientModel = require("../models/petient");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

// Signup post route
router.post('/signup', async function(req, res, next) {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.redirect('/signin'); // Corrected the redirection path
  } catch (error) {
    res.render('error', { error }); // Render the 'error.ejs' template
  }
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

// Signin post route
router.post('/signin', async function(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // Corrected the query to find the user
    if (!user) {
      return res.send(`User not found. <a href="/signup">Sign up</a>`);
    }
    if (user.password !== password) {
      return res.send(`Incorrect password. <a href="/signup">Sign up</a>`);
    }
    res.redirect('/profile'); // Redirect to the profile page after successful sign-in
  } catch (error) {
    res.render('error', { error }); // Render the 'error.ejs' template
  }
});

router.get('/profile', async function(req, res, next) {
  const petients = await patientModel.find();
  res.render('profile',{patients: petients});
});

router.route("/petientRegister").post(async (req,res) => {
  const patient = await patientModel.create({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    age: req.body.age,
    weight: req.body.weight,
    status: req.body.status,
    medical_history: req.body.medicalHistory
  });
  res.send(`patient successfully registered with ID: ${patient._id}, <a class="text-decoration-none" href="/">🏠</a>`);
}) 



router.get('/deletePatient/:id', async function(req, res, next) {
  const petients = await patientModel.findByIdAndDelete(req.params.id);
  res.redirect('/profile');
});

router.post('/updatePatient/:id', async function(req, res, next) {
  const petients = await patientModel.findByIdAndUpdate(req.params.id,{pp:req.body.pp});
  res.redirect('/profile');
});

module.exports = router;
