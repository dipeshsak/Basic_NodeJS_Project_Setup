const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
   try{
    const airplane = await airplaneRepository.create(data);
    return airplane;
   }catch(error){
    if(error.name === 'SequelizeValidationError'){
      let explanation = [];
      error.errors.forEach((err)=>{
         explanation.push(err.message)
      })
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)

    }
     throw new AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getAirplanes(){
   try{
     const airplanes = await airplaneRepository.getAll();
     return airplanes;
   }catch(error){
     throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getAirplane(id){
   try{
     const airplane = await airplaneRepository.get(id);
     return airplane;
   }catch(error){
      if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('Airplane you requested is not present',error.statusCode)

      }
     throw new AppError('Cannot fetch data for this airplane',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function destroyAirplane(id){
   try{
     const airplane = await airplaneRepository.destroy(id);
     return airplane;
   }catch(error){
            if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('Airplane you requested is to delete not present',error.statusCode)

      }
     throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function updateAirplane(id,data){
   try{
     const airplane = await airplaneRepository.update(id,data);
     return airplane;
   }catch(error){
            if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('Airplane you requested is to update not present',error.statusCode)

      }
       if(error.statusCode == StatusCodes.BAD_REQUEST){
     throw new AppError(error.explanation,error.statusCode)

      }
     throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}