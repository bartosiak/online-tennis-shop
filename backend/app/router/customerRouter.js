const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/", customerController.index);

router.get("/:id", customerController.showCustomer);

router.post("/", customerController.create);

router.put("/:id", customerController.update);

router.delete("/:id", customerController.delete);

module.exports = router;
