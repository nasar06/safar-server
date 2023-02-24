const mongoose = require("mongoose")

const ordersSchema = new mongoose.Schema({
    
    customer_name: {
        type: String
    },
    customer_email: {
        type: String
    },
    customer_mobile: {
        type: String
    },
    customer_img: {
        type: String
    },
    customer_id: {
        type: String
    },
    hotel_name: {
        type: String
    },
    hotel_id: {
        type: String
    },
    room_type_name: [{
        type: String
    }],
    rooms_no: [{
        type: String
    }],
    room_quantity: {
        type: Number
    },
    bed: [{
        type: String
      }],
    total_price: {
        type: Number
    },
    order_id: {
        type: String
    },
    checkIn_date: {
        type: String
    },
    checkout_date: {
        type: String
    },
    payment: {
        type: Boolean
    },
    status: {
        type: String,
      }
   
});

const notificationSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true
    }
  }, { timestamps: true }); 



const Orders = mongoose.model('Order', ordersSchema)
const Notification = mongoose.model('Notification', notificationSchema);

exports.Orders = Orders
exports.Notification = Notification