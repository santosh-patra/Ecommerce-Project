const app = require('./app');
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')


// handling uncaught exception'
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
})

// config
dotenv.config({path:"backend/config/config.env"})

// DB Connection
connectDatabase()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})

// unhandled Promise rejecetion
process.on("unhandeledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the error due to unhandled promise rejection`)

    server.close(()=>{
        process.exit(1);
    })
})