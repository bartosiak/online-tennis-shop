const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "uploads");
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    },
});

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
const imageRouter = require("./app/router/imageRouter");

const errorHandler = require("./app/middleware/errorHandler");

app.use("/products", productRouter);
app.use("/order", orderRouter);
app.use("/customer", customerRouter);
app.use("/user", userRouter);
app.use("/upload", imageRouter);
app.use(errorHandler);

app.listen(config.app.port, () => {
    console.log(`Express server is running on port: ${config.app.port}`);
});
