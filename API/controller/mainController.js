const {User} = require('../model/User');
const {Order} = require('../model/Orders');
const {Token} = require('../model/Token');
const {Contact} = require('../model/Contact');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({message:"API is running"})
    // const { name, email, password } = req.body
    // const userExists = await User.findOne({ email })
    // if (userExists) {
    //     res.status(400)
    //     throw new Error('User already exists')
    // }
    // const user = await User.create({
    //     name,
    //     email,
    //     password,
    // })
    // if (user) {
    //     res.status(201).json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         token: generateToken(user._id),
    //     })
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid user data')
    // }
})

//edit user details user side
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({message:"API is running"})
    // const user = await User.findById(req.user._id)
    // if (user) {
    //     user.name = req.body.name || user.name
    //     user.email = req.body.email || user.email
    //     if (req.body.password) {
    //         user.password = req.body.password
    //     }
    //     const updatedUser = await user.save()
    //     res.json({
    //         _id: updatedUser._id,
    //         name: updatedUser.name,
    //         email: updatedUser.email,
    //         isAdmin: updatedUser.isAdmin,
    //         token: generateToken(updatedUser._id),
    //     })
    // } else {
    //     res.status(404)
    //     throw new Error('User not found')
    // }
})

//Check user log in
const authUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({message:"API is running"})
    // const { email, password } = req.body
    // const user = await User.findOne({ email })
    // if (user && (await user.matchPassword(password))) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         token: generateToken(user._id),
    //     })
    // } else {
    //     res.status(401)
    //     throw new Error('Invalid email or password')
    // }
})

const submitPickup = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({message:"API is running"})
    //TODO work on this
})

const submitDelivery = asyncHandler(async (req, res) =>{
    res.status(200);
    res.json({message:"API is running"})
    //TODO work on this
})

const loginWithToken = asyncHandler(async (req, res) =>{
    res.status(200);
    res.json({message:"API is running"})
    //TODO work on this
})

const markOrderComplete = asyncHandler(async (req, res) =>{
    res.status(200);
    res.json({message:"API is running"})
    //TODO work on this
})

module.exports ={
    submitPickup,
    submitDelivery,
    authUser,
    registerUser,
    updateUserProfile,
    loginWithToken,
    markOrderComplete
}