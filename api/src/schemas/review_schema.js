const joi = require('joi')

exports.registerReviewSchema = {
    title: joi.string().required(),
    
    description: joi.string().required(),

    date: joi.date().timestamp("javascript").required()
}


exports.updateReviewSchema = {
    title: joi.string().optionnal(),
    
    description: joi.string().optionnal(),

    date: joi.date().timestamp("javascript").optionnal()
}