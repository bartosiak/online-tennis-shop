const express = require("express");
const router = express.Router();
const image = require("../controllers/imageController");

router.get("/", image.showImages);

router.post("/", image.create);

module.exports = router;
