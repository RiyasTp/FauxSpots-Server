const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")


router.get("/get", userController.getAllData)

module.exports = router