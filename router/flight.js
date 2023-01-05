const express = require('express');
const router = express.Router();
const flightController = require('../controller/flightController');

router.get('/searchlocation', (req, res) => {
    flightController.searchLocation(req, res);
});

router.get('/getflightsFilter', (req, res) => {
    flightController.getflightsFilter(req, res);
});

router.get('/searchflights', (req, res) => {
    flightController.searchFlights(req, res);
});

module.exports = router;