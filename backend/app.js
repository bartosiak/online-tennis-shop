const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

const app = express();

app.use("/uploads", express.static("uploads"));

mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("MongoDB is Connected!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const productRouter = require("./app/router/productRouter");
const orderRouter = require("./app/router/orderRouter");
const customerRouter = require("./app/router/customerRouter");
const userRouter = require("./app/router/userRouter");
const favoriteRouter = require("./app/router/favoriteRouter");

const errorHandler = require("./app/middleware/errorHandler");

app.use("/products", productRouter);
app.use("/order", orderRouter);
app.use("/customer", customerRouter);
app.use("/user", userRouter);
app.use("/favorite", favoriteRouter);
app.use(errorHandler);

app.listen(config.app.port, () => {
    console.log(`Express server is running on port: ${config.app.port}`);
});
