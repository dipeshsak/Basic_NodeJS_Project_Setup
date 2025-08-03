const express = require('express')
const {CityController} = require('../../controllers')
// const {airplaneMiddleware}  = require('../../middlewares')


const router = express.Router();

// api/v1/city POST
router.post('/',CityController.createCity);

// api/v1/city GET
router.get('/', CityController.getCities);

// api/v1/city/:id GET
router.get('/:id', CityController.getCity);

// api/v1/city/:id DELETE
router.delete('/:id', CityController.deleteCity);

// api/v1/city:id PATCH
router.patch('/:id', CityController.updateCity);

module.exports = router;