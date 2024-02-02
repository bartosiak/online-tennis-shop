const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        const ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        );
        const fileName = req.body.name.toLowerCase().split(" ").join("-");
        cb(null, fileName + ext);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
