const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");

router.get("/showusers", usercontroller.showUsers, (req, res) => { // -> /api/login/showusers
  res.send();
});
router.post("/signIn", usercontroller.verifyUser, (req, res) => {
	res.status(200).json(res.locals.user);
});
router.post("/signUp", usercontroller.createUser, (req, res) => {
	res.send("user Created");
});
module.exports = router;
