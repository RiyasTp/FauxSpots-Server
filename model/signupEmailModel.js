const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    user_mail: { type: String, required: true, unique: true },
    user_password: { type: String, required: true },
    user_EmailToken: { type: String },
    user_isVerified: { type: Boolean },
    user_date: { type: Date, default: Date.now() }
})



const model = mongoose.model("User", userSchema)

module.exports = model