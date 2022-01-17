const express = require('express');
const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require('../controller/productController');


const router = express.Router();


// get all product
router.route('/products').get(getAllProducts);
// Create a new products
router.route('/products/new').post(createProduct);
// update a product    ---- Delete a product ---- get product details
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails);




module.exports = router