const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require("../model/signupModel")
const asyncHandler = require("express-async-handler")
const twilio = require("../smshandler/twilio")
const crypto = require("crypto")

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

module.exports = {
    mobileSignup: asyncHandler(async (req, res, next) => {
        const { user_number } = req.body
        const result = await twilio.sendOtp(user_number)
        if (result == "verification") {
            const user = User({
                user_mail: crypto.randomBytes(64).toString("hex"),
                user_number,
                user_password: crypto.randomBytes(64).toString("hex"),
                user_isVerified: false,
            })

            await user.save()
            res.status(200).json({ "status": true, "_id": user._id })
        } else {
            res.status(401).json({ "status": false })
        }

    }),

    verifyOtp: asyncHandler(async (req, res, next) => {
        try {
            const { user_otp, user_number, _id } = req.body
            console.log(user_otp, user_number, _id);
            const response = await twilio.verifyOtp(user_number, user_otp)

            console.log(response);
            console.log("verification progress");
            if (response === 'approved') {
                console.log("account verified");
                const add = await User.findByIdAndUpdate({ _id: _id }, { $set: { user_isVerified: true } })
                const tokn = createToken(_id)
                res.status(200).json({ "status": true, "message": "login success", "jwt": tokn })
            } else {
                console.log("error");
                res.status(404).json({ "status": false, })
            }
        } catch (error) {
            console.log(" catch error");
            res.status(404).json({ "status": false, })
        }
    })
}