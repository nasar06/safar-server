const mongoose = require("mongoose")
const { Schema } = mongoose;

//room detail schema
const roomDetailSchema =new mongoose.Schema(
    {
        _id: {
            type: String
        },
        name: {
            type: String
        },
        rooms_no: {
            type: Number,
            unique: true
        },
        status: {
            type: String,
        },
        price:{
            type: Number
        },
        hotel_id: String,
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
    })
//Rooms  Model
const Rooms = mongoose.model('Room', roomDetailSchema);
const DeletedRooms = mongoose.model('DeletedRoom', roomDetailSchema);

exports.Rooms = Rooms
exports.DeletedRooms = DeletedRooms