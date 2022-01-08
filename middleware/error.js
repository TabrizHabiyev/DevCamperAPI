const errorHandler  = (err, req, res, next) =>{
    // Log to console dev
    console.log(err.stack.red);

    res.status(500).json({
       succes: false,
       error: err.message
    });
}

module.exports = errorHandler;
