const { Rooms } = require("../models/rooms.model")

// post room data
const postRoom = async (req, res) => {
    try {
        const data = req.body;
        const room = await Rooms.findOne({ rooms_no: data.rooms_no });

        if (room?.rooms_no === data?.rooms_no) {
            res.send('this room id already exist')
        }
        else{
            const result = await Rooms.create(data);
            res.send({ acknowledge: true, result })
        }


    }
    catch (err) {
        res.send(err)
        console.log(err)
    }
}

// get single room
const getSingleRoom = async (req, res) => {
    const room = req.params.room_id
    try {
        const result = await Rooms.findOne({ rooms_no: room })
        res.send(result)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}




exports.postRoom = postRoom
exports.getSingleRoom = getSingleRoom