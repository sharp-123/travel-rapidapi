const express = require('express');
const router = express.Router();
const VacationController = require('../controller/vacationController');


router.get('/searchlocation', (req, res) => {
    VacationController.searchLocation(req, res);
});

router.get('/searchVacations', (req, res) => {
    VacationController.searchVacations(req, res);
});

router.get('/getVacationDetails', (req, res) => {
    VacationController.getVacationDetails(req, res);
});


module.exports = router;