const joi = require("joi")


exports.registerPromoSchema = {
    name: joi.string().required(),

    alias: joi.string().required(),

    annee: joi.date().timestamp('javascript').required()
}

exports.registerPromoSchema = {
    name: joi.string().optional(),

    alias: joi.string().optional(),

    annee: joi.date().timestamp('javascript').optional()
}.required().min(1)