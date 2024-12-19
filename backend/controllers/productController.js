const asyncHandler = require("express-async-handler");
const productModel = require("../model/productSchema");

class productController {
  static addProduct = asyncHandler(async (req, res) => {
    const { title, price, description, category, imageUrl } =
      req.body.data || {};
    if (title && price && description && category && imageUrl) {
      try {
        const product = await productModel.create({
          title,
          price,
          description,
          category,
          imageUrl,
        });

        res.status(201).json({
          status: true,
          message: "product create successfylly",
        });
        return;
      } catch (error) {
        res.status(403).json({
          status: false,
          message: "server error.",
        });
        return;
      }
    } else {
      res.status(400).json({
        status: false,
        message: "Invalid data.",
      });
      return;
    }
    res.status(200).json({ message: "success" });
    return;
  });

  static getProduct = asyncHandler(async (req, res) => {
    try {
      const products = await productModel.find({});
      if (products) {
        res.status(200).json({
          status: true,
          message: "success",
          product: products,
        });
        return;
      } else {
        res.status(400).json({
          status: false,
          message: "No product avable",
        });
        return;
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "Error Server.",
      });
      return;
    }
  });

  // single product

  static getSingleProduct = asyncHandler(async (req, res) => {
    const id = req.query.id || {};
    console.log(id);
    try {
      const singleProduct = await productModel.findOne({ _id: id });
      if (singleProduct) {
        res.status(200).json({
          status: true,
          message: "success",
          data: singleProduct,
        });
        return;
      } else {
        res.status(400).json({
          status: false,
          message: "Can not find any product.",
        });
        return;
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "Error Server.",
      });
      return;
    }
  });
  static removeProduct = asyncHandler(async (req, res) => {
    const id = req.body.data || {};
    if (id) {
      try {
        await productModel.deleteOne({ _id: id });
        res.status(200).json({
          status: true,
          message: "Successfully Delete Product.",
        });
        return;
      } catch (error) {
        res.status(400).json({
          status: false,
          message: "Server Error.",
        });
        return;
      }
    } else {
      res.status(400).json({
        status: false,
        message: "Not Accept Product Id.",
      });
      return;
    }
  });

  static editProduct = asyncHandler(async (req, res) => {
    const { id, description, price, title, imageUrl, category } =
      req.body.data || {};
    console.log(req.body.data);
    if (id) {
      try {
        await productModel.updateOne(
          { _id: id },
          { $set: { title, description, price, imageUrl, category } }
        );
        res.status(200).json({
          status: true,
          message: "Successfully Update Product.",
        });
        return;
      } catch (error) {
        res.status(400).json({
          status: false,
          message: "Server Error.",
        });
        return;
      }
    } else {
      res.status(400).json({
        status: false,
        message: "Not Accept Product Id.",
      });
      return;
    }
  });
}
module.exports = productController;
