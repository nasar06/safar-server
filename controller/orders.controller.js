const { Order } = require("../models/orders.model")


//post order
const newOrder = async (req, res)=>{
  const result = await Order.create(req.body)
  res.send(result)
}


exports.newOrder = newOrder