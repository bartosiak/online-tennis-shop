const User = require("../models/UserModel");
const Customer = require("../models/CustomerModel");
const bcrypt = require("bcrypt");
const generateError = require("../helpers/generateErrorHelper");

module.exports = {
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json(generateError("User not found"));
        }
        try {
            bcrypt.compare(req.body.password, user.password, (err, logged) => {
                if (err) {
                    res.status(400).json(generateError("Login error"));
                    return;
                }

                if (logged) {
                    const token = user.generateAuthToken(user);
                    res.cookie("token", token);
                    res.status(200).json({ user: user, jwt: token });
                } else {
                    res.status(400).json(
                        generateError("Login data do not match")
                    );
                    return;
                }
            });
        } catch (error) {
            res.status(500).json(generateError(error.message));
        }
    },

    create: async (req, res, next) => {
        try {
            const existingUser = await User.findOne({ email: req.body.email });

            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: "User with this email already exists." });
            }

            let customer = await Customer.findOne({ email: req.body.email });

            if (!customer) {
                const newCustomer = new Customer({
                    name: req.body.name,
                    address: req.body.address,
                    email: req.body.email,
                });
                customer = await newCustomer.save();
            }

            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                customer: customer._id,
            });
            const savedUser = await newUser.save();

            customer.user = newUser._id;
            customer.save();
            return res.status(201).json(savedUser);
        } catch (err) {
            if (err.name === "ValidationError") {
                return res.status(400).json({ message: err.message });
            }
            return next(err);
        }
    },
};
