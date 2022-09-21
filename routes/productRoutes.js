const express = require('express')
const router = express.Router()
const productController = require("../controller/addProductCcontroller")

router.post("/addTurf" ,productController.addProduct )

module.exports = router