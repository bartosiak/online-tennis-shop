const Product = require("../models/ProductModel");
const fs = require("fs");
const path = require("path");
const Image = require("../models/ImageModel");

module.exports = {
    index: async (req, res, next) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (err) {
            return next(err);
        }
    },

    category: async (req, res, next) => {
        try {
            const categoryFromUrl = req.params.category;
            const formattedCategory =
                categoryFromUrl.charAt(0).toUpperCase() +
                categoryFromUrl.slice(1).toLowerCase();
            const products = await Product.find({
                category: formattedCategory,
            });
            return res.status(200).json(products);
        } catch (err) {
            return next(err);
        }
    },

    showProduct: async (req, res, next) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return next({ status: 404, message: "Product not found" });
            }
            return res.json(product);
        } catch (err) {
            return next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            let imagePath = "";
            if (req.file) {
                const newImage = new Image({
                    imagePath: "/uploads/" + req.file.originalname,
                });
                const savedImage = await newImage.save();
                imagePath = savedImage.imagePath;
            }

            const newProduct = new Product({
                ...req.body,
                imagesUrl: [imagePath],
            });

            const savedProduct = await newProduct.save();
            return res.status(201).json(savedProduct);
        } catch (err) {
            return next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedProduct) {
                return next({ status: 404, message: "Product not found" });
            }
            return res.json(updatedProduct);
        } catch (err) {
            return next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedProduct = await Product.findByIdAndDelete(
                req.params.id
            );
            if (!deletedProduct) {
                return next({ status: 404, message: "Product not found" });
            }
            return res.json({ message: "Product deleted" });
        } catch (err) {
            return next(err);
        }
    },
};
