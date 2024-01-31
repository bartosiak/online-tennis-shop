const Image = require("../models/ImageModel");

module.exports = {
    create: async (req, res, next) => {
        const newImage = new Image({
            imagePath: "/uploads/" + req.file.originalname,
        });

        try {
            const image = await newImage.save();
            res.status(201).json(image);
        } catch (err) {
            res.status(400).send(err);
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
