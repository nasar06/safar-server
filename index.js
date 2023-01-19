const express = require("express")
const cors = require('cors');
require('dotenv').config()
var cors = require('cors')
const mongoose = require("mongoose")


const port = process.env.PORT || 5000
const app = express()
app.use(cors())

// require route
const loginRouter = require('./utilities/createjwt')
const verifyjwtRouter = require('./utilities/verifyjwt')


//test

// connect mongooes------------------------------------------//
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@safar01.nospyhn.mongodb.net/safar`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


  
// Create a new Mongoose schema 
const destinationSchema = new mongoose.Schema({
    name: String,
    original_price: Number,
    offer_price: Number,
    review: Number,
    price: Number,
  });


// Create a Mongoose model from the schema
const Destination_Card = mongoose.model('Destination_card', destinationSchema);



app.get('/destinations', async(req, res)=>{
    try{
        Destination_Card.find({})
        .then(destinations =>{
            res.send(destinations)
        })
    }catch(err){
        console.log(err)
    }
})






//router
app.use("/createjwt", loginRouter)
app.use("/verifyjwt", verifyjwtRouter)

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(port, ()=>{
    console.log('server is on')
})