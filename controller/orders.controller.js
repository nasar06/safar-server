const { Orders } = require("../models/orders.model")


//post order
const newOrder = async (req, res)=>{
  const result = await Orders.create(req.body)
  res.send(result)
}

//get all orders by email
const getallOrderbyEmail = async (req, res)=>{
  try{
    const result = await Orders.find({
      $or: [
        { customer_email: req.query.email },
        { status: { $exists: false } }
      ]
    })
    res.send(result)
  }
  catch(err){
    res.send(err)
    console.log(err)
  }
}


exports.newOrder = newOrder
exports.getallOrderbyEmail = getallOrderbyEmail