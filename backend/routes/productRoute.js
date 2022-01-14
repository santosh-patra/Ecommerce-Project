const express = require('express');
const { getAllProducts,createProduct,updateProduct } = require('../controller/productController');


const router = express.Router();
// get all product
router.route('/products').get(getAllProducts);
// Create a new products
router.route('/products/new').post(createProduct);
// update a product
router.route('/product/:id').put(updateProduct)




module.exports = router