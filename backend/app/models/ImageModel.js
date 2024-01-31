const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imagePath: String,
});

const Image = mongoose.model("Image", imageSchema);
