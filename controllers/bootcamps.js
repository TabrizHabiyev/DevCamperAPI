const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamps');

// @desc  Get all bootcamps 
// @route GET /api/v1/bootcamps
// @acces Public
exports.getBootcamps =asyncHandler( async (req,res,next) =>{   
 
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true, count:bootcamp.length,  data:bootcamp});
});


// @desc  Get single bootcamp 
// @route GET /api/v1/bootcamp/:id
// @acces Public
exports.getBootcamp =asyncHandler( async (req,res,next) =>{
   
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
           return   next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
        }
           res.status(200).json({success:true,data:bootcamp});
})

// @desc  Create new bootcamp 
// @route POST /api/v1/bootcamps
// @acces Private
exports.createBootcamp =asyncHandler( async (req,res,next) =>{
    
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
         success: true,
         data: bootcamp
        });
})


// @desc  Update bootcamp 
// @route PUT /api/v1/bootcamps/:id
// @acces Private
exports.updateBootcamp =asyncHandler( async (req,res,next) =>{
   
      const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id , req.body , {
      new:true,
      runValidators:true
    });
    if (!bootcamp) {
      return   next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    }
    res.status(200).json({success:true,data:bootcamp});
})


// @desc  Delete bootcamp 
// @route PUT /api/v1/bootcamps/:id
// @acces Private
exports.deleteBootcamp =asyncHandler( async (req,res,next) =>{
  
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
      if (!bootcamp) {
        return   next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
      }
      res.status(200).json({success:true,data:{}});
})