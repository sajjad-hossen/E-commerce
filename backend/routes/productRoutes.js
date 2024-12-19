const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();
// Not Proceted route

router.post("/add-product", productController.addProduct);
router.get("/get-product", productController.getProduct);
router.get("/get-single-product", productController.getSingleProduct);
router.delete("/delete-product", productController.removeProduct);

module.exports = router;
//  uploaderMulter.single("image"),
