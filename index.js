const express = require("express")
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express();

// middle ware
app.use(cors())
app.use(express.json())


// require route
const loginRouter = require('./utilities/createjwt')
const verifyjwtRouter = require('./utilities/verifyjwt')


//router
app.use("/createjwt", loginRouter)
app.use("/verifyjwt", verifyjwtRouter)

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(port, ()=>{
    console.log('server is on')
})