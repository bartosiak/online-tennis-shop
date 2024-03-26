const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/", favoriteController.index);

router.get("/:id", favoriteController.show);

router.post("/", favoriteController.create);

router.put("/:id", favoriteController.update);

router.delete("/:id", favoriteController.delete);

module.exports = router;
