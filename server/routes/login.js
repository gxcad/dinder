const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");

router.get("/showusers", usercontroller.showUsers, (req, res) => { // -> /api/login/showusers
	res.send();
  });
  
router.post("/signIn", usercontroller.verifyUser, usercontroller.setCookie, (req, res) => {
	res.send("verified");
});

router.post("/signUp", usercontroller.createUser, (req, res) => {
  console.log('Reached the final callback on the route for /signup');
	res.send("user Created");
});
module.exports = router;
