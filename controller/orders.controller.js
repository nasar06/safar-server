const { Orders } = require("../models/orders.model")


//post order
const newOrder = async (req, res)=>{
  const result = await Orders.create(req.body)
  res.send(result)
}

//get all order
const getAllOrders = async (req, res) =>{
  try{
    const result = await Orders.find({})
    res.send(result)
  }
  catch(err){
    res.send(err)
    console.log(err)
  }
}

//get all orders by email
const getallOrderbyEmail = async (req, res)=>{
  try{
    const result = await Orders.find({
      $or: [
        { customer_email : req.query.email },
        // { status: { $exists: false } }
      ]
    })
    res.send(result)
  }
  catch(err){
    res.send(err)
    console.log(err)
  }
}


//update after payment
const updatePayOrder = async (req, res)=>{
  try{
    const result = await Orders.updateOne({ customer_email : req.query.email }, { $set: { status: "paid" } })
    res.send(result)
  }
  catch(err){
    res.send(err)
    console.log(err)
  }
}

exports.newOrder = newOrder
exports.getAllOrders = getAllOrders
exports.getallOrderbyEmail = getallOrderbyEmail
exports.updatePayOrder = updatePayOrder