const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        user_mail: { type: String, unique: true },
        user_number: { type: Number, unique: true },
        user_password: { type: String },
        user_isVerified: { type: Boolean },
        user_date: { type: Date, default: Date.now() }
    },
    { collection: 'userData' }
)

const model = mongoose.model("User", userSchema)

module.exports = model