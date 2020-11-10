const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let RatingSchema = new Schema(
    {
        restuarantId: String,
        customerId: String,
        rating: String
    }
);

module.exports = mongoose.model("rating", RatingSchema);