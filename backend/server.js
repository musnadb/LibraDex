// run 'npm run dev' in the terminal to launch

require('dotenv').config()  // loads environment variables (sensitive data) from the .env file

const express = require('express')  // function that utilizes the express package
const mongoose = require('mongoose')    // function to utilize MongoDB in a more structured approach
const testRoutes = require('./routes/test') // utilizes the routes created in the routes/_.js file
const userRoutes = require('./routes/user')

const app = express()   // creates the express app

// middleware receives/sends a request/response signals respectively
app.use(express.json())         // checks if there is data being sent to the server and if it does then it passes/attaches it to the request object so that we can access it in the request handler

app.use((req, res, next) => {   // fires for every request that comes in
    console.log(req.path, req.method)   // logger to track requests from the console by its path and request method
    next()                              // required to move on to the next request
})

// routes
app.use('/api/test', testRoutes)    // attaches the routes to the app
app.use('/api/user', userRoutes)    

mongoose.connect(process.env.MONGO_URI) // sets up a connection to the MongoDB server specified in the .env file
    .then(() => {
        app.listen(process.env.PORT, () => {    // receives requests from the port specified in the .env file
        console.log('connected to database & listening on port', process.env.PORT)  // sends a msg in the terminal to signal that it is running
    })
    })
    .catch((error) => {
        console.log(error)
    })

