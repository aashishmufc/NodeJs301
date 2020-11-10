const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let OrderSchema = new Schema(
    {
        status: String,
        customerId: String,
        restuarantId: String,
        items: Object,
        totalprice: String
    }
);

module.exports = mongoose.model("order", OrderSchema);