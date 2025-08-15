const CrudRepository = require('./crud-repository')
const { Sequelize } = require('sequelize');
const {
    Flight, Airplane, Airports 
} = require('../models')

class FlightRepository extends CrudRepository{

    constructor(){
      super(Flight)
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airports,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                },
                {
                    model: Airports,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                }
            ]
        });
        return response;
    }
}

module.exports = FlightRepository;