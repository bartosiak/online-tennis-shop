const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

router.get("/", OrderController.index);

router.get("/:id", OrderController.showOrder);

router.post("/", OrderController.create);

router.put("/:id", OrderController.update);

router.delete("/:id", OrderController.delete);

module.exports = router;
