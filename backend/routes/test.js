// file to manage all the receive requests and send responses instead of filling up the server.js file
// should only contain routes, have controllers in a separate file

// *
const express = require('express')
// Imports from /controllers/testController
const {
    getTests,
    getTest,
    createTest,
    deleteTest,
    updateTest
} = require('../controllers/testController')


// Creates an instance of the router
const router = express.Router()

// route handlers
// GET entries
router.get('/', getTests)
// GET a single entry
router.get('/:id', getTest)
// POST a new entry
router.post('/', createTest)
// DELETE a single entry
router.delete('/:id', deleteTest)
// PATCH a single entry
router.patch('/:id', updateTest)

// send routes from this file to server.js
module.exports = router