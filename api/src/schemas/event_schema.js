const joi = require("joi")



exports.registerEventSchema = {
    creator: joi.string().required(),

    title: joi.string().required(),

    description: joi.string().min(10).required(),

    date: joi.date().timestamp('javascript').required()
}


exports.updateEventSchema = {
    creator: joi.string().optional(),

    title: joi.string().optional(),

    description: joi.string().min(10).optional(),

    date: joi.date().timestamp('javascript').optional()
}