const mongoose = require('mongoose')    // function to utilize MongoDB in a more structured approach

const Schema = mongoose.Schema          // sets up the schema with mongoose

const testSchema = new Schema ({        // defines the structure of the documents which are saved to the collection
    title: {                // name of *
        type: String,
        required: true
    },
    var1: {                 // *
        type: Number,
        required: true
    },
    var2: {                 // *
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

// Model name should be singular as it will be pluralized to make a _s collection
// A model utilizes the collection that follows the given schema from an abstract view
module.exports = mongoose.model('Test', testSchema)     // creates a model that interacts with the associated collection (1st parameter)

