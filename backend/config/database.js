const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>{
    console.log("DB Connected")
})
 
}



module.exports = connectDatabase