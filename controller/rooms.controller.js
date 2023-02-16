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
    console.log(req.params.room)
    Rooms.updateOne({ rooms_no: req.params.room }, { $set: { status: 'deactivate' } }, function(err, data) {
        if (err) {
          console.error(err);
        } else {
            res.send({acknowledge: true})
          console.log(data);
        }
      });
}

//get deactivate rooms
const deactivateRooms = async (req, res)=>{
    Rooms.find({
        $and: [
            { status: 'deactivate' }, // find documents where the name property is 'John'
            { hotel_id: req.params.hotel_id} // find documents where the age property is greater than 18
        ]
      }, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
            res.send(doc)
          console.log(doc);
        }
      });
}

// delete room
const deleteRoom = async (req, res)=>{
    
        Rooms.deleteOne({ rooms_no: req.params.room_no }, function(err) {
            if (err) {
              console.log(err);
            } else {
                res.send({acknowledge: true})
              console.log('Successfully deleted the document');
            }
          });
   
}



exports.postRoom = postRoom
exports.getSingleRoom = getSingleRoom
exports.getMyRooms = getMyRooms
exports.updateStatus = updateStatus
exports.deactivateRooms = deactivateRooms
exports.deleteRoom = deleteRoom