const User = require('../models/userModel')


const loginUser = async (req, res) => {     // login user
    res.json({mssg: 'login user'})
}

const signupUser = async (req, res) => {    // signup user
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        
        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})     // retrieves entries with newest on top

    res.status(200).json(users)     // send response with the _ document and a status
}



module.exports = {
    loginUser,
    signupUser,
    getUsers
}