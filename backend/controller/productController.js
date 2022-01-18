const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apiFeatures');

// Create a Product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
      Success: true,
      Details: product,
    });
  });
// Get all Products
exports.getAllProducts =catchAsyncError( async (req, res) => {

  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage)

  
  const product = await apiFeatures.query;
  res.status(200).json({
    Success: true,
    TotalCount:productCount,
    Result: product,
  });
});
// get a single product
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    Totalrecord: productCount,
    message: product,
  });
});

// Update Product -- admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    UpdatedDetails: product,
  });
});

// delete a product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
