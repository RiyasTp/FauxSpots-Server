const asyncHandler = require("express-async-handler")
const Product = require("../model/productModel")
require("dotenv").config()


module.exports = {
    addProduct : asyncHandler(async (req,res,next) => {
        console.log(req.files.turf_images);
        console.log(req.body);
        
        res.status(200).json({"status" : true})
    })
}