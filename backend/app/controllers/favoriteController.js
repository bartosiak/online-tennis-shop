const Favorite = require("../models/Favorite");
const Customer = require("../models/Customer");

module.exports = {
    index: async (req, res, next) => {
        try {
            const favorites = await Favorite.find();
            res.status(200).json(favorites);
        } catch (err) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const favorite = await Favorite.findById(req.params.id);
            if (!favorite)
                return next({ status: 404, message: "Favorite not found" });
            res.json(favorite);
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const customer = await Customer.findById(req.body.customerId);

            const newFavorite = new Favorite({
                customer: customer._id,
                products: req.body.products,
            });

            const createdFavorite = await newFavorite.save();

            res.status(201).json(createdFavorite);
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const updatedFavorite = await Favorite.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!updatedFavorite)
                return next({ status: 404, message: "Favorite not found" });

            res.json(updatedFavorite);
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const deletedFavorite = await Favorite.findByIdAndDelete(
                req.params.id
            );

            if (!deletedFavorite)
                return next({ status: 404, message: "Favorite not found" });

            res.json({ message: "Favorite deleted" });
        } catch (err) {
            next(err);
        }
    },
};
