const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "uploads");
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post("/addItem", upload.single("file"), imageController.create);

router.get("/showItem", imageController.showImages);

module.exports = router;
