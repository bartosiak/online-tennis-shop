const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        required: true,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
});

module.exports = mongoose.model("User", UserSchema);
