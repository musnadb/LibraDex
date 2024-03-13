const mongoose = require('mongoose')    // function to utilize MongoDB in a more structured approach
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user'
    // },
    // profilePicture: {
    //     type: String,
    //     default: 'default.jpg'
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
})

userSchema.statics.signup = async function(email, password) {       // static signup method (as opposed to creating one in the controller)
    
    if (!email || !password) {      // throws an error if either fields are missing
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {        // throws an error if the email is not valid
        throw Error('Invalid email')
    }
    if (!validator.isStrongPassword(password)) {        // throws an error if the password is not strong enough
        throw Error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    }        

    
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)       // generated salt is hashed with a password then saved in the db
    const hash = await bcrypt.hash(password, salt)     // password is hashed with the salt

    const user = await this.create({ email, password: hash })   // user is created with the hashed password

    return user
}

// userSchema.statics.login = async function(email, password) {       // static login method
//     const user = await this.findOne({ email })

//     if (!user) {
//         throw Error('Incorrect email')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch) {
//         throw Error('Incorrect password')
//     }

//     return user
// }


module.exports = mongoose.model('User', userSchema)