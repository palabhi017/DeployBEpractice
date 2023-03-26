const express = require("express")
const mongoose = require("mongoose")
const {connection} = require("./db")
const {productModel} = require("./Models/Productmodel")
const {productRouter} = require("./Routes/product.route")
const cors = require('cors');
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.use("/product",productRouter)



 
app.listen(process.env.port,async()=>{
    await connection;
    console.log("port is running on 8080")
})