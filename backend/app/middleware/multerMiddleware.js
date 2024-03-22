const multer = require("multer");
const fs = require("fs");
let fileCount = 0;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const productFolder = `uploads/${req.body.name}`;

        if (!fs.existsSync(productFolder)) {
            fs.mkdirSync(productFolder);
        }

        cb(null, productFolder);
    },

    filename: function (req, file, cb) {
        const originalName = file.originalname
            .toLowerCase()
            .replace(/\s+/g, "-");
        const name = `${fileCount}-${file.originalname}`;
        fileCount++;

        cb(null, name);
    },
});

const upload = multer({ storage });

module.exports = upload;
