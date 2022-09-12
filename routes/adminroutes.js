const express = require('express')
const router = express.Router()
const adminController = require("../controller/adminCantroller")



router.post("/add", adminController.addTurf)

module.exports = router