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
    const token = user.getJWTToken()
    res.status(201).json({
        success:true,
        Message:"A new User Added",
        Token:token,
        details:user
    })
}) 

// login user
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;

    if (!email || !password){
        return next(new ErrorHandler("Please enter Email or password",400))
    }
    const user = User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const isPasswordMatched = user.comparePassword()

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const token = user.getJWTToken()
    res.status(200).json({
        success:true,
        Token:token,
        details:user
    })
})