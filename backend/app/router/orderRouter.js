const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);

router.get("/:id", orderController.showOrder);

router.post("/", orderController.create);

router.put("/:id", orderController.update);

router.delete("/:id", orderController.delete);

module.exports = router;
