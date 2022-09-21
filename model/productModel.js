const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        turf_creator_id: { type: String },
        turf_name: { type: String },
        turf_place: { type: String },
        turf_isAvailale: { type: Boolean },
        turf_time: [
            { 
                time_morningStart: { type: String }, 
                time_morningEnd: { type: String }, 
            }
        ]
    }
)

const model = mongoose.model("turfList", productSchema)

module.exports = model