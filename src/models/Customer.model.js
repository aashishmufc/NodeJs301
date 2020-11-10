const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CustomerSchema = new Schema(
    {
        name: String,
        age: String,
        phone: String,
        email: String,
        city: String,
        orders: Array,
        status: String
    }
);

module.exports = mongoose.model("customer", CustomerSchema);