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

//get my rooms
const getMyRooms = async (req, res)=>{
    try{
        const result =await Rooms.find({hotel_id: req.params.hotel_id})
        res.send(result)
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
}


// update status
const updateStatus = async (req, res)=>{
    Rooms.updateOne({ rooms_id: req.params.room }, { $set: { status: 'deactivate' } }, function(err, data) {
        if (err) {
          console.error(data);
        } else {
            res.send({acknowledge: true})
          console.log(data);
        }
      });
}

//get deactivate rooms
const deactivateRooms = async (req, res)=>{
    try{
        const result = await Rooms.find({status: "deactivate"})
        res.send(result)
    }
    catch(err){
        // res.send('err',err)
        console.log(err)
    }
}



exports.postRoom = postRoom
exports.getSingleRoom = getSingleRoom
exports.getMyRooms = getMyRooms
exports.updateStatus = updateStatus
exports.deactivateRooms = deactivateRooms