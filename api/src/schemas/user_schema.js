const joi = require("joi")
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

exports.registerUserSchema = {

    email: joi.string().regex(emailRE).required(),

    firstName: joi.string().required(),

    lastName: joi.string().required(),

    alias: joi.string().optional(),

    gender: joi.string().optional(),

    age: joi.number().integer().required(),

    birth: joi.date().timestamp('javascript').required()
}

exports.updateUserSchema = {

    email: joi.string().regex(emailRE).optional(),

    firstName: joi.string().optional(),

    lastName: joi.string().optional(),

    alias: joi.string().optional(),

    gender: joi.string().optional(),

    age: joi.number().integer().optional(),

    birth: joi.date().timestamp('javascript').optional()
}