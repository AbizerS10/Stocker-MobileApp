const { model, Schema, Model } = require("mongoose");

const product = new Schema(
  {
    company: String,
    category: String,
    type: String,
    article: String,
    color: String,
    sizes: Object,
    totalPieces: Number,
    costPrice: Number,
    sellingPrice: Number,
  },
  { timestamps: true }
);

module.exports = model("Products", product);
