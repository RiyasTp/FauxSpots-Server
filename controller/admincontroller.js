var db = require("../config/connection")
var collection = require("../config/collection")
const asyncHandler = require('express-async-handler')



module.exports = {

    addProduct: asyncHandler(async (req, res, next) => {
        try {
            const data = await db.get().collection(collection.PRODUCT_COLLECTION).insertOne(req.body)
            console.log(data);
            res.status(200).json({ "status": true, "status_code": 200 })
        } catch (err) {
            res.status(400)
        }

    })


}