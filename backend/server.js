// run 'npm run dev' in the terminal to launch

// attach environment variable to the "process.env" object
require('dotenv').config()

// *
const express = require('express')
const mongoose = require('mongoose')
const testRoutes = require('./routes/test')

// express app
const app = express()

// global middleware
/* for every request, it checks if there is data being sent to the server and if it 
    does then it passes/attaches it to the request object so that we can access it 
    in the request handler */
// Used for sending requests 
app.use(express.json())
/* fires for every request that comes in
    next is required to move on to the next request (currently it is the welcome msg) */
app.use((req, res, next) => {
    // logger to track requests from the console by its path and request method
    console.log(req.path, req.method)
    next()
})

// route handler from test.js
/* Ex.
// functions that receive request and send response signals are known as middleware
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
}) */
// the first parameter indicates the source api
app.use('/api/test',testRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to database & listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })

