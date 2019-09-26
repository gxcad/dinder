const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/showusers", userController.showUsers, (req, res) => { // -> /api/login/showusers
  res.send();
});
router.post("/signIn", userController.verifyUser, userController.setCookie, (req, res) => {
	res.status(200).json(res.locals.user);
});

router.post("/signUp", userController.createUser, (req, res) => {
	res.send("user Created");
});
module.exports = router;
