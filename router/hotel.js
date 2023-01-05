const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');


router.get('/searchlocation', (req, res) => {
    hotelController.searchLocation(req, res);
});

router.get('/getHotelsFilter', (req, res) => {
    hotelController.getHotelsFilter(req, res);
});

//example request: http://localhost:3030/api/hotel/searchHotels?geoId=32655&checkIn=2022-10-20&checkOut=2022-11-20&pageNumber=1
router.get('/searchHotels', (req, res) => {
    hotelController.searchHotels(req, res);
    // res.json(req);
});

router.get('/getHotelDetails', (req, res) => {
    hotelController.getHotelDetails(req, res);
});

module.exports = router;