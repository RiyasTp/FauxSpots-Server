const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        turfName: { type: String, required: true },
        turfNumber: { type: Number, required: true },
        turfEmail: { type: String, required: true },
        turfPlace: { type: String, required: true }
    },
)

const model = mongoose.model("TurfList", userSchema)

module.exports = model