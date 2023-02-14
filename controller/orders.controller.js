const { Order } = require("../models/orders.model")



const addOrders = async (req, res) =>{
    const result = await Order.create(req.body)
    res.send(result)
}

exports.addOrders = addOrders