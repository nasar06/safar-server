const mongoose = require("mongoose")

const subscribeSchema = new mongoose.Schema({
    email : {type: String}
})

const Subscribe = mongoose.model('subscribe', subscribeSchema)

exports.Subscribe = Subscribe