const express = require("express")
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()


// require route
const loginRouter = require('./utilities/createjwt')
const verifyjwtRouter = require('./utilities/verifyjwt')




//router
app.use("/createjwt", loginRouter)
app.use("/verifyjwt", verifyjwtRouter)


app.listen(port, ()=>{
    console.log('server is on')
})