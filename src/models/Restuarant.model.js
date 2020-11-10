const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let RestuarantSchema = new Schema(
    {
        name: String,
        location: String,
        area: String,
        AvgRating: String,
        menuItems: Object,
        coordinates:String
    }
);

module.exports = mongoose.model("restaurant", RestuarantSchema);