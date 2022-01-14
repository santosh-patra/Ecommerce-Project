const Product = require('../models/productModel')





// Create a Product -- Admin
exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        Success:true,
        Details:product 
    })
}
// Get all Products
exports.getAllProducts = async (req,res)=>{
    const product = await Product.find();
    res.status(200).json({
        Success:true,
        Result:product
    })
}
// Update Product -- admin
exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if (!product){
        return res.status(500).json({
            success:false,
            Message:"Product Not Found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false })
    res.status(200).json({
        success:true,
        UpdatedDetails:product
    })
}