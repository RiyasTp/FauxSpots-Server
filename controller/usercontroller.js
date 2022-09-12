const asyncHandler = require("express-async-handler")
const Product = require("../model/turfaddmodel")


module.exports = {
    getAllData: asyncHandler(async (req, res, next) => {
        try {
            Product.find({}, (err, data) => {
                if (err) {
                    res.status(401).json({ "status": false })
                } else {
                    res.status(200).json(data)
                }

            })

        } catch (error) {
            res.status(401).json({ "status": false })

        }


    })
}