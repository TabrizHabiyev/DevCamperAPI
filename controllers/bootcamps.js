const Bootcamp = require('../models/Bootcamps');

// @desc  Get all bootcamps 
// @route GET /api/v1/bootcamps
// @acces Public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({success: true,msg:'Show All Bootcamps'});
}


// @desc  Get single bootcamp 
// @route GET /api/v1/bootcamp/:id
// @acces Public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({success: true,msg:`Show Bootcamp ${req.params.id}`});
}

// @desc  Create new bootcamp 
// @route POST /api/v1/bootcamps
// @acces Private
exports.createBootcamp = async (req,res,next) =>{

    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
         success: true,
         data: bootcamp
        });
    } catch (err) {
        res.status(400).json({success: false})
    }


}


// @desc  Update bootcamp 
// @route PUT /api/v1/bootcamps/:id
// @acces Private
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).json({success: true,msg:`Update Bootcamp ${req.params.id}`});
}


// @desc  Delete bootcamp 
// @route PUT /api/v1/bootcamps/:id
// @acces Private
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).json({success: true,msg:`Delete Bootcamp ${req.params.id}`});
}