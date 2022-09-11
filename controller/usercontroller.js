var db = require("../config/connection")
const Promise = require("promise")
var collection = require("../config/collection")
const asyncHandler = require('express-async-handler')



module.exports = {

    getAallProducts: asyncHandler(async (req, res, next) => {
        let product = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        res.statusCode(200).json(product)
    })
    
}