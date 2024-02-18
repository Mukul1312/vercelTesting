// Path: server/modals/sales.js
const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  saleDate: Date,
  items: [
    {
      name: String,
      tags: [String],
      price: Number,
      quantity: Number,
    },
  ],
  storeLocation: String,
  customer: {
    gender: String,
    age: Number,
    email: String,
    satisfaction: Number,
  },
  couponUsed: Boolean,
  purchaseMethod: String,
});

module.exports = mongoose.model("Sales", salesSchema);
