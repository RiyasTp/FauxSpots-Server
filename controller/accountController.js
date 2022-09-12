const asyncHandler = require("express-async-handler")
const User = require("../model/signupEmailModel")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
const { sendOtpEmail } = require("../smshandler/nodemailer")
let otpGlobal


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


module.exports = {

    // signup

    signup: asyncHandler(async (req, res, next) => {

        console.log(req.body);
        try {

            const { user_name, user_mail, user_password, } = req.body
            const user = User({
                user_name,
                user_mail,
                user_password,
                user_EmailToken: crypto.randomBytes(64).toString("hex"),
                user_isVerified: false,
            })


            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(user.user_password, salt)
            user.user_password = hashPassword


            const newUSer = await user.save()

            // send a verification mail to user
            
            const response = await sendOtpEmail(user.user_mail, user.user_name)

            res.status(200).json({ "status": true })


        } catch (error) {

            res.status(401).json({ "status": false, "error": error.message })

        }

    }),


    //login

    login: asyncHandler(async (req, res, next) => {

        try {

            const { user_mail, user_password } = req.body

            const findUser = await User.findOne({ user_mail: user_mail })

            if (findUser) {

                const match = await bcrypt.compare(user_password, findUser.user_password)

                if (match) {

                    const token = createToken(findUser.id)

                    res.status(200).json({ "status": true, "message": "Loged in succsess", "token": token })
                } else {
                    res.status(404).json({ "status": false, "message": "Password Dosen't Match" })
                }

            } else {
                res.status(404).json({ "status": false, "message": "User n't registerd" })
            }

        } catch (error) {

            res.status(401).json({ "status": false, "error": error.message, "message": "ClientError" })

        }

    })

}