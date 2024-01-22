const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
        },
        stockQuantity: {
            type: Number,
            required: true,
        },
        imagesUrl: [String],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
