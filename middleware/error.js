const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler  = (err, req, res, next) =>{

let error = {...err};

error.message = err.message;

    // Log to console dev
     console.log(err);

   //Mongoose bad ObjectId
   if (err.name === 'CastError') {
       const message = `Resource not found with id of ${err.value}`;
       error = new ErrorResponse(message,404)
   }

   //Mongoose  duplicate key
   if (err.code === 11000) {
       const message = 'Dublicate field value entered'
       error = new ErrorResponse(message,400)
   }

   //Mongose validation error
   if (err.name === 'ValidationError') {
       console.log('s')
    const message =  Object.values(err.errors).map(val => val.message)
    error = new ErrorResponse(message,400)
   }

    res.status(error.statusCode || 500).json({
       succes: false,
       error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;
