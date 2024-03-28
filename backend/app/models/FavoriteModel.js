const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
