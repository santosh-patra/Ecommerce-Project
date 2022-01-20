const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Name cannot exceed 30 character"],
    minLength: [4, "Name should have more than 4 character"],
  },
  email: {
    type: String,
    required: [true, "Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: [8, "Password should be greater than 8 character"],
    select: false,
  },
  avater: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role:{
      type:String,
      default:"user",
  },
  resetPasswordToken:String,
  resetPasswordExpire: Date
}); 



module.exports = mongoose.model("User",userSchema)
