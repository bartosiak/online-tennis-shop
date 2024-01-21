const Customer = require("../models/CustomerModel");

module.exports = {
    index: async (req, res, next) => {
        try {
            const customer = await Customer.find();
            return res.status(200).json(customer);
        } catch (err) {
            return next(err);
        }
    },

    showCustomer: async (req, res, next) => {
        try {
            const customer = await Customer.findById(req.params.id);
            if (!customer) {
                return next({ status: 404, message: "Customer not found" });
            }
            return res.json(customer);
        } catch (err) {
            return next(err);
        }
    },

    create: async (req, res, next) => {
        const newCustomer = new Customer(req.body);
        try {
            const savedCustomer = await newCustomer.save();
            return res.status(201).json(savedCustomer);
        } catch (err) {
            return next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedCustomer = await Customer.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedCustomer) {
                return next({ status: 404, message: "Customer not found" });
            }
            return res.json(updatedCustomer);
        } catch (err) {
            return next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const customer = await Customer.findByIdAndDelete(req.params.id);
            if (!customer) {
                return next({ status: 404, message: "Customer not found" });
            }
            return res.json({ message: "Customer deleted" });
        } catch (err) {
            return next(err);
        }
    },
};
