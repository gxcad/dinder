const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");
const authcontroller = require('../controllers/authcontroller');

router.get("/showusers", usercontroller.showUsers, (req, res) => {
  res.send();
});
router.post("/", usercontroller.verifyUser, authcontroller.setCookie, (req, res) => {
  console.log('post for cookie route hit final callback');
	res.send("verified and cookie set");
});
router.post("/signup", usercontroller.createUser, (req, res) => {
  console.log('Reached the final callback on the route for /signup');
	res.send("user Created");
});
module.exports = router;
