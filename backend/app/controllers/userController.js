const User = require("../models/UserModel");
const Customer = require("../models/CustomerModel");

module.exports = {
    index: async (req, res, next) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (err) {
            return next(err);
        }
    },

    showUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return next({ status: 404, message: "User not found" });
            }
            return res.json(user);
        } catch (err) {
            return next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            let customer = await Customer.findOne({ email: req.body.email });

            if (!customer) {
                const newCustomer = new Customer(req.body);
                customer = await newCustomer.save();
            }

            const existingUser = await User.findOne({ email: req.body.email });

            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: "User with this email already exists." });
            }

            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                customer: customer._id,
            });
            const savedUser = await newUser.save();

            return res.status(201).json(savedUser);
        } catch (err) {
            if (err.name === "ValidationError") {
                return res.status(400).json({ message: err.message });
            }
            return next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedUser) {
                return next({ status: 404, message: "User not found" });
            }
            return res.json(updatedUser);
        } catch (err) {
            return next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return next({ status: 404, message: "User not found" });
            }
            return res.json({ message: "User deleted" });
        } catch (err) {
            return next(err);
        }
    },
};
