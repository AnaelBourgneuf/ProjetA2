const joi = require("joi")

exports.registerIdeaSchema = {
    
    creator: joi.string().required(),

    title: joi.string().required(),

    description: joi.string().min(10).required(),

    date: joi.date().timestamp('javascript').required()
}


exports.updateIdeaSchema = {
    
    creator: joi.string().optional(),

    title: joi.string().optional(),

    description: joi.string().min(10).optional(),

    date: joi.date().timestamp('javascript').optional()
}.required().min(1)
