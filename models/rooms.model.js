const mongoose = require("mongoose")

//room detail schema
const roomDetailSchema =new mongoose.Schema(
    {
        name: {
            type: String
        },
        rooms_no: {
            type: Number,
            unique: true
        },
        price:{
            type: Number
        },
        hotel_id: Number,
        extra_facilities: [
            {name: {type: String}}
        ],
        room_facilities: [
            {name: {type: String}}
        ],
        
        view: {type: String},
        bathroom:[
            {name: {type: String}}
        ],
        bed: [
            {
                size: {type: String}
            }
        ],
        sleep: {type: Number},
        images: [
            {
                url: {type: String}
            }
        ]
    },
)
//Rooms  Model
const Rooms = mongoose.model('Room', roomDetailSchema);

exports.Rooms = Rooms