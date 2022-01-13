const errorHandler  = (err, req, res, next) =>{
    // Log to console dev
    
 console.log(err.stack.red.bold);
    res.status(err.statusCode || 500).json({
       succes: false,
       error: err.message || 'Server Error'
    });
}

module.exports = errorHandler;
