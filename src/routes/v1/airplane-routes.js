const express = require('express')
const {AirplaneController} = require('../../controllers')
const {airplaneMiddleware}  = require('../../middlewares')


const router = express.Router();

// api/v1/airplanes POST
router.post('/',airplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

// api/v1/airplanes/:id GET
router.get('/', AirplaneController.getAirplanes);

// api/v1/airplanes GET
router.get('/:id', AirplaneController.getAirplane);

// api/v1/airplanes DELETE
router.delete('/:id', AirplaneController.deleteAirplane);


module.exports = router;