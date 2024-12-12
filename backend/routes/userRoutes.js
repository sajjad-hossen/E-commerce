const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();
// Not Proceted route

router.post("/register", userController.userRegistation);
router.post("/login", userController.userLogin);
// router.post("/login", userController.userLogin);

module.exports = router;
//  uploaderMulter.single("image"),
