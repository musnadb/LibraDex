const mongoose = require('mongoose')

// Setting up a schema
const Schema = mongoose.Schema

// Defines the structure for the intended model
const testSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    var1: {
        type: Number,
        required: true
    },
    var2: {
        type: Number,
        required: true

    // },
    // author: {
    //     type: Number,
    //     required: true
    // },
    // coverImageURL: {
    //     type: Number,
    //     required: any
    // },
    // var0: {
    //     type: Number,
    //     required: true

    }
}, { timestamps: true })

// 
// Model that is applied with the schema will interact with a collection of that name
// Model name should be singular as it will be pluralized to make a Tests collection
module.exports = mongoose.model('Test', testSchema)