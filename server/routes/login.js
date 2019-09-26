const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authcontroller = require('../controllers/authcontroller');

router.get("/showusers", userController.showUsers, (req, res) => { // -> /api/login/showusers
  res.send();
});

router.post("/signIn", userController.verifyUser, authcontroller.setCookie, authcontroller.setSession, (req, res) => {
  console.log('post for cookie route hit final callback');
	res.send("verified and cookie set");
});


router.post("/signUp", userController.createUser, authcontroller.setCookie, authcontroller.setSession, (req, res) => {
  console.log('Reached the final callback on the route for /signup');
	res.send("user Created");
});

module.exports = router;
