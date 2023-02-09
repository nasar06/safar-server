const { Rooms } = require("../models/rooms.model")



const getSingleRoom = async (req, res)=>{
    const room = req.params.room_id
    try{
            const result = await Rooms.findOne({rooms_no: room})
            res.send(result)
    }
    catch(err){
            console.log(err)
            res.send(err)
    }
}
exports.getSingleRoom = getSingleRoom