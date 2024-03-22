const Product = require("../models/ProductModel");
const fs = require("fs");
const path = require("path");

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
            const productData = req.body;

            if (req.files) {
                const imagePaths = req.files.map((file) => file.path);
                productData.imagesUrl = imagePaths;
            }

            const product = new Product(productData);

            await product.save();

            return res.status(201).json(product);
        } catch (error) {
            return next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const product = await Product.findById(req.params.id);

            if (req.file) {
                const ext = req.file.originalname.substring(
                    req.file.originalname.lastIndexOf("."),
                    req.file.originalname.length
                );
                const fileName = req.body.name
                    .toLowerCase()
                    .split(" ")
                    .join("-");
                const filePath = path.join("uploads", fileName + ext);

                if (product.imagesUrl[0]) {
                    const oldFilePath = path.join(
                        __dirname,
                        "../../",
                        product.imagesUrl[0]
                    );
                    if (fs.existsSync(oldFilePath)) {
                        fs.unlinkSync(oldFilePath);
                        console.log("Stary plik został pomyślnie usunięty.");
                    }
                }

                req.body.imagesUrl = [filePath];
            }

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
            const imageNames = deletedProduct.imagesUrl;

            imageNames.forEach((imageName) => {
                const imagePath = path.join(__dirname, "../../", imageName);
                console.log(imagePath);
                if (fs.existsSync(imagePath)) {
                    console.log(imagePath);
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send({
                                message: "Błąd podczas usuwania pliku",
                            });
                        }
                    });
                } else {
                    console.log("Plik nie istnieje");
                }
            });

            if (!deletedProduct) {
                return next({ status: 404, message: "Product not found" });
            }
            return res.json({ message: "Product deleted" });
        } catch (err) {
            return next(err);
        }
    },
};
