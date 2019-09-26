const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");
router.post("/", usercontroller.verifyUser, usercontroller.setCookie, (req, res) => {
	res.send("verified");
});
router.post("/signup", usercontroller.createUser, (req, res) => {
	res.send("user Created");
});
module.exports = router;
