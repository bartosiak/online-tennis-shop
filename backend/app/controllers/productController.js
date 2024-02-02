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
            const ext = req.file.originalname.substring(
                req.file.originalname.lastIndexOf("."),
                req.file.originalname.length
            );
            const fileName = req.body.name.toLowerCase().split(" ").join("-");

            if (req.file) {
                productData.imagesUrl = ["uploads/" + fileName + ext];
            }

            const product = new Product(productData);

            await product.save();
            return res.status(201).json(product);
        } catch (err) {
            return next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            // Pobierz produkt, który ma być zaktualizowany
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
                const filePath = path.join(
                    "uploads",
                    fileName + ext
                );
    
                // Usuń stary plik
                if (product.imagesUrl[0]) {
                    const oldFilePath = path.join(__dirname, "../../", product.imagesUrl[0]);
                    if (fs.existsSync(oldFilePath)) {
                        fs.unlinkSync(oldFilePath);
                        console.log("Stary plik został pomyślnie usunięty.");
                    }
                }
    
                // Dodaj nowy plik do req.body
                req.body.imagesUrl = [filePath];
            }
    
            // Zaktualizuj produkt
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
