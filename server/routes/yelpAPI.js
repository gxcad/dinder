const express = require("express");
const router = express.Router();
const yelpController = require("../controllers/yelpController");


router.get("/:id", yelpController.getYelpDetail, (req, res) => {
    res.status(200).json(res.locals.apiData);
});

router.get("/", yelpController.getYelpMany, (req, res) => {
    res.status(200).json(res.locals.many);
});

module.exports = router;