const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");

router.get("/showusers", usercontroller.showUsers, (req, res) => {
  res.send();
});
router.post("/", usercontroller.verifyUser, (req, res) => {
	res.send("verified");
});
router.post("/signup", usercontroller.createUser, (req, res) => {
  console.log('Reached the final callback on the route for /signup');
	res.send("user Created");
});
module.exports = router;
