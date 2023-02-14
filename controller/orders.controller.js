const { Order, Notification } = require("../models/orders.model")


//post order
const addOrders = async (req, res, next) =>{
    const notification = new Notification({
        message: `New order created`
      });

      notification.save()
    .then(() => {
      console.log('Notification created:', notification);
      next();
    })
    .catch(error => {
      console.error('Notification creation failed:', error);
      next(error);
    });
}

const postOrder = async (req, res)=>{
  const result = await Order.create(req.body)
  res.send(result)
}

const newOrder = new addOrders({
  
  });
  
  newOrder.save() // this will trigger the middleware to create the notification
    .then(() => {
      console.log('Order created:', newOrder);
    })
    .catch(error => {
      console.error('Order creation failed:', error);
    });

exports.newOrder = newOrder