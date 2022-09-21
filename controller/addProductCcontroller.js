const asyncHandler = require("express-async-handler")
const Product = require("../model/productModel")
require("dotenv").config()


module.exports = {
    addProduct : asyncHandler(async (req,res,next) => {
        console.log(req.body);
    })
}