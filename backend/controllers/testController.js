// manages all the routed requests and responses that will be utilized by routes/_.js

const Test = require('../models/testModel')     // imports the test model from models/_Model.js
const mongoose = require('mongoose')


const getTests = async (req, res) => {      // Get all entries
    const tests = await Test.find({}).sort({createdAt: -1})     // retrieves entries with newest on top

    res.status(200).json(tests)     // send response with the _ document and a status
}

const getTest = async (req, res) => {       // Get a single entry
    const { id } = req.params           // grabs the id property
    
    if (!mongoose.Types.ObjectId.isValid(id)) {     // checks to see if the entered id is acceptable by mongoose
        return res.status(404).json({error: 'Item does not have a valid id'})
    }

    const test = await Test.findById(id)        // create a reference to retreive an entry by id

    if (!test) {        // checks to see if the entered id matches
        return res.status(404).json({error: 'Item not found'})
    }

    res.status(200).json(test)      // send response with the _ document and a status
}

const createTest = async (req, res) => {    // Create an entry (Using the POST method)
    const {title, var1, var2} = req.body        // extracts the data being sent from the request body to use
    
    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!var1) {
        emptyFields.push('var1')
    }
    if (!var2) {
        emptyFields.push('var2')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in the missing fields', emptyFields })
    }

    try {   // add document to database
        const test = await Test.create({title, var1, var2})     // stores the response created using the _ model which includes the new document and its id
        res.status(200).json(test)  // send response with the _ document and a status
    
    } catch (error) {
        res.status(400).json({error: error.message})    // stores the error for *
    }
}

const deleteTest = async (req, res) => {    // Delete an entry
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {     // checks to see if the entered id is acceptable by mongoose
        return res.status(404).json({error: 'Item does not have a valid id'})
    }

    const test = await Test.findOneAndDelete({_id: id})     // create a reference to delete an entry by id

    if (!test) {        // checks to see if the entered id matches
        return res.status(404).json({error: 'Item not found'})
    }

    res.status(200).json(test)
}

const updateTest = async (req, res) => {    // Update an entry (Using the PATCH method)
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {     // checks to see if the entered id is acceptable by mongoose
        return res.status(404).json({error: 'Item does not have a valid id'})
    }

    const test = await Test.findOneAndUpdate({_id: id}, {       // creates a reference to update a document based on id
        ...req.body     // updates the document with what is on the body
    })

    if (!test) {
        return res.status(404).json({error: 'Item not found'})
    }

    res.status(200).json(test)
}

module.exports = {  // Exports to routes/test.js
    getTests,
    getTest,
    createTest,
    deleteTest,
    updateTest
}