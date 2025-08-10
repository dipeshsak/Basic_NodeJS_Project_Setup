const express = require('express')
const {AirportController} = require('../../controllers')
const {AirportMiddleware}  = require('../../middlewares')


const router = express.Router();

// api/v1/airports POST
router.post('/',AirportMiddleware.validateCreateRequest, AirportController.createAirport);

// api/v1/airports/:id GET
router.get('/', AirportController.getAirports);

// api/v1/airports GET
router.get('/:id', AirportController.getAirport);

// api/v1/airports DELETE
router.delete('/:id', AirportController.deleteAirport);

// api/v1/airports PATCH
router.patch('/:id', AirportController.updateAirports);

module.exports = router;