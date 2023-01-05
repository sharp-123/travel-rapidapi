const express = require('express');
const router = express.Router();
const carController = require('../controller/carController');


router.get('/searchlocation', (req, res) => {
    carController.searchLocation(req, res);
});

router.get('/searchDropoff', (req, res) => {
    carController.searchDropoff(req, res);
});

module.exports = router;