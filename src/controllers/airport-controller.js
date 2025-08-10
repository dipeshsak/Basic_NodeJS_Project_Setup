const { StatusCodes, INTERNAL_SERVER_ERROR } = require('http-status-codes')
const { AirportService } = require('../services')
const {SuccessResponse,ErrorResponse} = require('../utils/common')

/**
 * POST : /airports 
 * req-body {name: 'IGI', cityId: 5, code: 'DEL',address :'Mumbai'}
 */
async function createAirport(req,res) {
    try{
        const airport = await AirportService.createAirport({
            name:req.body.name,
            cityId:req.body.cityId,
            code:req.body.code,
            address:req.body.address
        })

        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error
 return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * GET : /airports
 * req-body - {}
 */
async function getAirports(req,res){
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
         return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(error){
         ErrorResponse.error = error
         return res.status(error.statusCode).json(ErrorResponse)
    }
}


/**
 * GET : /airports/:id
 * req-body - {}
 */
async function getAirport(req,res){
    try{
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
         return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(error){
         ErrorResponse.error = error
         return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * DELETE : /airports/:id
 * req-body - {}
 */
async function deleteAirport(req,res){

    try{
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
         return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(error){
         ErrorResponse.error = error
         return res.status(error.statusCode).json(ErrorResponse)
    }
}

/**
 * PATCH : /airports/:id
 * req-body - {name: 'IGI', cityId: 5, code: 'DEL',address :'Mumbai'}
 */
async function updateAirports(req,res){
    console.log("BODY",req.params.id,req.body)
    try{
        const airport = await AirportService.updateAirport(req.params.id,req.body);

        SuccessResponse.data = airport;
         return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(error){
         ErrorResponse.error = error
         return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports ={
createAirport,
getAirports,
getAirport,
deleteAirport,
updateAirports
}