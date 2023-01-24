const express = require("express")
require('dotenv').config()
const cors = require('cors')
const mongoose = require("mongoose")
const port = process.env.PORT || 5000
const app = express()


// --------Middleware---------//

app.use(cors());
app.use(express.json());


//------------connect to the database with mongoose-------------//

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@safar01.nospyhn.mongodb.net/safar`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });




const destinationRoute = require('./routes/destination.route')
const usersRoute = require('./routes/user.route')

//-------router-------//
app.use('/destination', destinationRoute)
app.use('/users', usersRoute)



//------Initial API-------//

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(port, ()=>{
    console.log('server is on')
})




// Model.find({ price: { $lt: 200, $gt: 100 } }).exec(function(err, docs) {
    // docs is now an array of documents where the price is between 100 and 200
//   });