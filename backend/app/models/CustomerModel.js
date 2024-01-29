const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: {
                street: String,
                zipCode: String,
                city: String,
            },
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
