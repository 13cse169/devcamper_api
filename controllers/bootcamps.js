const Bootcamp = require('../models/Bootcamp');

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all bootcamps'
    });
}

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get bootcamp ${req.params.id}`
    });
}

// @desc        Create new bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
    /* res.status(200).json({
        success: true,
        msg: 'Create new bootcamp'
    }); */
    //console.log(req.body);
    const bootcamp = Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    });
}

// @desc        Update bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });
}

// @desc        Delete bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });
}