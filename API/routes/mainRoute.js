const express = require('express');
const router = express.router();
const {
    submitPickup,
    submitDelivery,
    authUser,
    registerUser,
    updateUserProfile
} = require('../controller/mainController')