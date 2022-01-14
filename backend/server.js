const app = require('./app');
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')



// config
dotenv.config({path:"backend/config/config.env"})

// DB Connection
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})