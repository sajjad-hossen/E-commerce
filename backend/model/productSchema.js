const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please add a First Name."],
    },
    price: {
      type: String,
      require: [true, "Please add an Email."],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please add an password"],
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },

    // To track connected clients
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.products || mongoose.model("products", productSchema);

module.exports = productModel;
