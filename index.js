const express = require("express")
require('dotenv').config()
const cors = require('cors')
const mongoose = require("mongoose")
const port = process.env.PORT || 5000
const app = express()


// --------Middle Ware---------//

app.use(cors());
app.use(express.json());


//---------require route---------//

const loginRouter = require('./utilities/createjwt');
const verifyjwtRouter = require('./utilities/verifyjwt');
const destinationsRoute = require('./routes/destinations_route/destinations_route');


//------------connect to the database with mongoose-------------//

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@safar01.nospyhn.mongodb.net/safar`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });



//-------router-------//

app.use("/createjwt", loginRouter)
app.use("/verifyjwt", verifyjwtRouter)
app.use("/destinations", destinationsRoute)


//------Initial API-------//

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(port, ()=>{
    console.log('server is on')
})