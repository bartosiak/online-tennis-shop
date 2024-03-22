const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const authApiMiddleware = require("../middleware/authApiMiddleware.js");
const upload = require("../middleware/multerMiddleware.js");

router.get("/", ProductController.index);

router.get("/category/:category", ProductController.category);

router.get("/:id", ProductController.showProduct);

router.post(
    "/",
    authApiMiddleware,
    upload.array("files", 12),
    ProductController.create
);

router.put(
    "/:id",
    authApiMiddleware,
    upload.single("file"),
    ProductController.update
);

router.delete("/:id", authApiMiddleware, ProductController.delete);

module.exports = router;
