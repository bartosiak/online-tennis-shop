const Customer = require("../models/CustomerModel");
const Order = require("../models/OrderModel");

module.exports = {
    index: async (req, res, next) => {
        try {
            const order = await Order.find();
            return res.status(200).json(order);
        } catch (err) {
            return next(err);
        }
    },

    showOrder: async (req, res, next) => {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return next({ status: 404, message: "Order not found" });
            }
            return res.json(order);
        } catch (err) {
            return next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const newOrder = new Order(req.body);
            const savedOrder = await newOrder.save();

            await Customer.updateOne(
                { _id: savedOrder.customer },
                { $push: { orders: savedOrder._id } }
            );

            return res.status(201).json(savedOrder);
        } catch (err) {
            return next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedOrder) {
                return next({ status: 404, message: "Order not found" });
            }
            return res.json(updatedOrder);
        } catch (err) {
            return next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedOrder = await Order.findByIdAndDelete(req.params.id);

            if (!deletedOrder) {
                return next({ status: 404, message: "Order not found" });
            }

            await Customer.updateOne(
                { _id: deletedOrder.customer },
                { $pull: { orders: req.params.id } }
            );
            return res.json({ message: "Order deleted" });
        } catch (err) {
            return next(err);
        }
    },
};
