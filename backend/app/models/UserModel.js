const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
    {
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
            enum: ["admin", "customer"],
            required: true,
        },
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
        },
    },
    { timestamps: true }
);
UserSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id, role: user.role }, "secretKey", {
        expiresIn: "1h",
    });
    return token;
};
module.exports = mongoose.model("User", UserSchema);
