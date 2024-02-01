const Image = require("../models/ImageModel");

module.exports = {
    create: async (req, res, next) => {
        if (req.file) {
            const newImage = new Image({
                imagePath: "/uploads/" + req.file.originalname,
            });
            console.log(newImage);

            try {
                const image = await newImage.save();
                res.status(201).json(image);
            } catch (err) {
                console.log("TO jest błąd po stronie backendu");
                console.error(err);
                res.status(400).send(err);
            }
        }
    },
    showImages: async (req, res, next) => {
        try {
            const images = await Image.find();
            res.json(images);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};
