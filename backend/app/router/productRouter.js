const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const authApiMiddleware = require("../middleware/authApiMiddleware.js");

router.get("/", authApiMiddleware, ProductController.index);

router.get("/category/:category", ProductController.category);

router.get("/:id", ProductController.showProduct);

router.post("/", authApiMiddleware, ProductController.create);

router.put("/:id", authApiMiddleware, ProductController.update);

router.delete("/:id", authApiMiddleware, ProductController.delete);

module.exports = router;
