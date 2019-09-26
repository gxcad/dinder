const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");
const authcontroller = require('../controllers/authcontroller');

router.get("/showusers", usercontroller.showUsers, (req, res) => { // -> /api/login/showusers
  res.send();
});
router.post("/signIn", usercontroller.verifyUser, authcontroller.setCookie, authcontroller.setSession, (req, res) => {
  console.log('post for cookie route hit final callback');
	res.send("verified and cookie set");
});
router.post("/signUp", usercontroller.createUser, authcontroller.setCookie, authcontroller.setSession, (req, res) => {
  console.log('Reached the final callback on the route for /signup');
	res.send("user Created");
});
module.exports = router;
