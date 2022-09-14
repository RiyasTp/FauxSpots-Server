const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require("../model/signupModel")
const asyncHandler = require("express-async-handler")
const twilio = require("../smshandler/twilio")


module.exports = {
    mobileSignup: asyncHandler(async (req, res, next) => {
        const { user_number } = req.body
        const result = await twilio.sendOtp(user_number)
        if (result == "verification") {
            const user = User({
                user_number,
                user_isVerified: false,
            })

            await user.save()
            res.status(200).json({ "status": true })
        } else {
            res.status(401).json({ "status": false })
        }

    }),

    verifyOtp: asyncHandler(async (req, res, next) => {
        const { user_otp, user_number, user_id } = req.body

        const response = await twilio.verifyOtp(user_number, user_otp)

        if (response === 'approved') {
            const add = await User.findOneAndUpdate({ _id: user_id }, { $set: { user_isVerified: true } })
            res.status(200).json({ "status": true, "message": "login success", "jwt": createToken(user_id) })
        } else {
            res.status(404).json({ "status": false, })
        }
    })
}