const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.get('/hotel', (req, res) => {
    bookingController.bookingHotel(req, res);
});


module.exports = router;