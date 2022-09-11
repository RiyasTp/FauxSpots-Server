const express = require('express')
const router = express.Router()
const userController = require("../controller/usercontroller")



router.get("/getallturf", userController.getAallProducts)

module.exports = router