const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data){
   try{
    const city = await cityRepository.create(data);
    return city;
   }catch(error){
    if(error.name === 'SequelizeValidationError'){
      let explanation = [];
      error.errors.forEach((err)=>{
         explanation.push(err.message)
      })
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)

    }
     throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getCities(){
   try{
     const cities = await cityRepository.getAll();

     return cities;
   }catch(error){
     throw new AppError('Cannot fetch data of all the Cities',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function getCity(id){
   try{
     const city = await cityRepository.get(id);
     return city;
   }catch(error){
      if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('City you requested is not present',error.statusCode)

      }
     throw new AppError('Cannot fetch data for this City',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function deleteCity(id){
   try{
     const city = await cityRepository.destroy(id);
     return city;
   }catch(error){
            if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('City you requested is to delete not present',error.statusCode)

      }
     throw new AppError('Cannot fetch data of all the Cities',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

async function updateCity(id,data){
   try{
     const city = await cityRepository.update(id,data);

     return city;
   }catch(error){
            if(error.statusCode == StatusCodes.NOT_FOUND){
     throw new AppError('City you requested is to update not present',error.statusCode)

      }
       if(error.statusCode == StatusCodes.BAD_REQUEST){
     throw new AppError(error.explanation,error.statusCode)

      }
     throw new AppError('Cannot fetch data of all the Cities',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


module.exports ={
    createCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
}