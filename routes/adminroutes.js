const express = require('express')
const router = express.Router()
const adminController = require("../controller/admincontroller")




router.post("/post", adminController.addProduct)


module.exports = router