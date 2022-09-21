const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        turf_creator_id: { type: String },
        turf_name: { type: String },
        turf_place: { type: String },
        turf_muncipality : { type: String },
        turf_district : {type: String },
        turf_catogery : [
            {
                turf_cricket : {type: Boolean },
                turf_football : {type: Boolean },
                turf_badminton : {type: Boolean },
                turf_yoga : {type: Boolean },
            }
        ],
        turf_type : [
            {
                turf_sevens : {type: Boolean },
                turf_sixes : {type: Boolean },
            }
        ],
        turf_isAvailale: { type: Boolean },
        turf_images : {type : array},
        amenities : [
            {
                turf_washroom : {type : Boolean},
                turf_water : {type : Boolean},
                turf_dressing : {type : Boolean},
                turf_parcking : {type : Boolean},
                turf_gallery : {type : Boolean},
                turf_cafeteria : {type : Boolean},
            }
        ],
        turf_images : {type : Array},
        turf_time: [
            { 
                time_morning: { type: Number }, 
                time_afternoon : { type: Number },
                time_evening :  { type: Number },
            }
        ]
    }
)

const model = mongoose.model("turfList", productSchema)

module.exports = model