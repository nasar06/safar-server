const mongoose = require("mongoose")
const { Rooms, DeletedRooms } = require("../models/rooms.model")
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
      Rooms.find({
        $and: [
            { status: 'active' }, // find documents where the name property is 'John'
            { hotel_id: req.params.hotel_id} // find documents where the age property is greater than 18
        ]
      }, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
            res.send(doc)
          console.log(doc);
        }
      })
      
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
}


//status set deactivate 
const updateStatusDeactivate = async (req, res)=>{
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
//status set Active 
const updateStatusActive = async (req, res)=>{
    
    Rooms.updateOne({ rooms_no: req.params.room }, { $set: { status: 'active' } }, function(err, data) {
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
const deleteRoom = async (req, res) => {
  try {
    // find the room to be deleted
    const room = await Rooms.findOne({ rooms_no: req.params.room_no });
    if (!room) {
      return res.status(404).send({ message: 'Room not found' });
    }
    
    // create a deleted room document
    const deletedRoom = new DeletedRooms({
      _id: new mongoose.Types.ObjectId(), // ensure _id is populated with a unique identifier
      name: room.name,
      rooms_no: room.rooms_no,
      status: room.status,
      hotel_id: room.hotel_id,
      price: room.price,
      extra_facilities: room.extra_facilities,
      room_facilities: room.room_facilities,
      view: room.view,
      bathroom: room.bathroom,
      bed: room.bed,
      sleep: room.sleep,
      images: room.images,
      // add any other fields you want to include in the deleted room document
    });
    await deletedRoom.save();
    
    // delete the room
    await Rooms.deleteOne({ rooms_no: req.params.room_no });
    res.send({ acknowledge: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

//get deleting data
const getDeletingRoom = async (req, res)=>{
  DeletedRooms.find({ hotel_id: req.params.hotel_id}, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
        res.send(doc)
      console.log(doc);
    }
  });
}



exports.postRoom = postRoom
exports.getSingleRoom = getSingleRoom
exports.getMyRooms = getMyRooms
exports.updateStatusDeactivate = updateStatusDeactivate
exports.deactivateRooms = deactivateRooms
exports.deleteRoom = deleteRoom
exports.getDeletingRoom = getDeletingRoom
exports.updateStatusActive = updateStatusActive