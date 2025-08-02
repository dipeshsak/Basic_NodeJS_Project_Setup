const express = require('express')
const {AirplaneController} = require('../../controllers')
const {airplaneMiddleware}  = require('../../middlewares')


const router = express.Router();

router.post('/',airplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

module.exports = router;