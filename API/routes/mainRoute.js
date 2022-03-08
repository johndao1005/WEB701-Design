const express = require('express');
const router = express.Router();
const {
    submitPickup,
    submitDelivery,
    authUser,
    registerUser,
    updateUserProfile,
    loginWithToken,
    markOrderComplete
} = require('../controller/mainController')

router.route('/register').get(registerUser);
router.route('/login').get(authUser);
router.route('/update/:id').post(updateUserProfile);
router.route('/delivery').post(submitDelivery);
router.route('/pickup').post(submitPickup);

router.route('/token').get(loginWithToken);
router.route('/complete').post(markOrderComplete);

module.exports = router