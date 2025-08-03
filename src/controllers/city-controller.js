const { StatusCodes, INTERNAL_SERVER_ERROR } = require('http-status-codes')
const { CityService } = require('../services')
const {SuccessResponse,ErrorResponse} = require('../utils/common')

/**
 * POST : /city
 * req-body - {name: 'London'}
 */
async function createCity(req,res) {
    try{
        const city = await CityService.createCity({
              name : req.body.name
        })

        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * GET : /city
 * req-body - {}
 */
async function getCities(req,res) {
    try{
        const cities = await CityService.getCities()

        SuccessResponse.data = cities;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * GET : /city/:id
 * req-body - {}
 * 
 */
async function getCity(req,res) {


    try{
        const city = await CityService.getCity(req.params.id)


        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * DELETE : /city/:id
 * req-body - {}
 */
async function deleteCity(req,res) {
    try{
        const city = await CityService.deleteCity(req.params.id)

        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * PATCH : /city/:id
 * req-body - {name:'New Mumbai 1'}
 */
async function updateCity(req,res) {
    try{
        const city = await CityService.updateCity(req.params.id,req.body)

        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports ={createCity,getCities,getCity,deleteCity,updateCity}