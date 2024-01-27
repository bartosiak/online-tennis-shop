const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const verifyAdminRole = require("../middleware/verifyAdminRole");

router.get("/", ProductController.index);

router.get("/category/:category", ProductController.category);

router.get("/:id", ProductController.showProduct);

router.post("/", verifyAdminRole, ProductController.create);

router.put("/:id", verifyAdminRole, ProductController.update);

router.delete("/:id", verifyAdminRole, ProductController.delete);

module.exports = router;
