const express = require('express')

const {
    loginUser,
    signupUser,
    getUsers
} = require('../controllers/userController')


const router = express.Router()

router.post('/login', loginUser)     // login route
router.post('/signup', signupUser)     // signup route
router.get('/', getUsers)       // get all users

module.exports = router