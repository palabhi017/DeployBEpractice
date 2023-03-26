const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    "title":String,
    "model":String,
    "rating":Number,
    "price":Number,
    "image":String
    
})

const productModel = mongoose.model("product",productSchema)

module.exports = {productModel}