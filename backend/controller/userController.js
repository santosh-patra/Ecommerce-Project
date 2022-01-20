const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../models/userModel');

// Register a user
exports.registerUser = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avater:{
            public_id:"This is a sample id",
            url:"Sample URL"
        }
    })
    res.status(201).json({
        success:true,
        Message:"A new User Added",
        details:user
    })
}) 