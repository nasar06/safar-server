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




//router
app.use("/createjwt", loginRouter)
app.use("/verifyjwt", verifyjwtRouter)

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(port, ()=>{
    console.log('server is on')
})