// Responsible for managing routed requests and responses

const Test = require('../models/testModel')
const mongoose = require('mongoose')

// Get all entries
const getTests = async (req, res) => {
    const tests = await Test.find({}).sort({createdAt: -1})

    res.status(200).json(tests)
}

// Get a single entry
const getTest = async (req, res) => {
    const { id } = req.params

    // checks to see if the entered id is acceptable by mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Test item does not have a valid id'})
    }

    const test = await Test.findById(id)

    if (!test) {
        return res.status(404).json({error: 'Test item not found'})
    }

    res.status(200).json(test)
}

// Create an entry (through the post method)
const createTest = async (req, res) => {
    const {title, var1, var2} = req.body

    // add document to database
    try {
        const test = await Test.create({title, var1, var2})
        res.status(200).json(test)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a entry
const deleteTest = async (req, res) => {
    const { id } = req.params

    // checks to see if the entered id is acceptable by mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Test item does not have a valid id'})
    }

    const test = await Test.findOneAndDelete({_id: id})

    if (!test) {
        return res.status(404).json({error: 'Test item not found'})
    }

    res.status(200).json(test)
}

// Patch a entry
const updateTest = async (req, res) => {
    const { id } = req.params

    // checks to see if the entered id is acceptable by mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Test item does not have a valid id'})
    }

    const test = await Test.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!test) {
        return res.status(404).json({error: 'Test item not found'})
    }

    res.status(200).json(test)
}

// Exports to routes/test.js
module.exports = {
    getTests,
    getTest,
    createTest,
    deleteTest,
    updateTest
}