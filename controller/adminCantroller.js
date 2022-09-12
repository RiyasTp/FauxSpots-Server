const Product = require("../model/turfaddmodel")
const asyncHandler = require("express-async-handler")


module.exports = {

    addTurf: asyncHandler(async (req, res, next) => {
        try {
            const { turfName, turfNumber, turfEmail, turfPlace } = req.body
            
            const product = new Product({
                turfName,
                turfNumber,
                turfEmail,
                turfPlace
            })

            const result = await product.save()

            res.status(200).json({ "status": true })

        } catch (error) {

            res.status(400).json({ "status": false, "error": error.message })

        }


    }),
}