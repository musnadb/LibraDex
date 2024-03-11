// manages all the routes that will be utilized by server.js

const express = require('express')

const {         // imports from /controllers/_Controller
    getTests,
    getTest,
    createTest,
    deleteTest,
    updateTest
} = require('../controllers/testController')


const router = express.Router()     // creates an instance of the router

// route handlers
router.get('/', getTests)           // GET all entries
router.get('/:id', getTest)         // GET a single entry
router.post('/', createTest)        // POST a new entry
router.delete('/:id', deleteTest)   // DELETE a single entry
router.patch('/:id', updateTest)    // PATCH a single entry

module.exports = router             // export routes to server.js

