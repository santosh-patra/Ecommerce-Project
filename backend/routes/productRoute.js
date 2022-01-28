const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// get all product
router.route("/products").get(isAuthenticatedUser, authorizeRoles("admin") , getAllProducts);
// Create a new products
router.route("/products/new").post(isAuthenticatedUser, createProduct);
// update a product    ---- Delete a product ---- get product details
router
  .route("/product/:id")
  .put(isAuthenticatedUser , updateProduct)
  .delete(isAuthenticatedUser , deleteProduct)
  .get(getProductDetails);

module.exports = router;
