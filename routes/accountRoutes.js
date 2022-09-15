const express = require('express')
const router = express.Router()
const mailAccountController = require("../controller/mailAccountController")
const messageController = require("../controller/otpAdminController")


router.post("/signup", mailAccountController.signup)

router.post("/login", mailAccountController.login)

router.post("/otp", mailAccountController.verifyOtp)

router.post("/verifyOtp", messageController.verifyOtp)

router.post("/mobile", messageController.mobileSignup)

module.exports = router