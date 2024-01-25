const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.index);

router.get("/category/:category", ProductController.category);

router.get("/:id", ProductController.showProduct);

router.post("/", ProductController.create);

router.put("/:id", ProductController.update);

router.delete("/:id", ProductController.delete);

module.exports = router;
