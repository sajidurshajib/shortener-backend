const Joi = require('joi')

const postSchema = Joi.object({
    id: Joi.string().min(3).max(70).required(),
    text: Joi.string().min(3).max(70).required(),
    link: Joi.string().min(3).max(70).required(),
}).with('text', 'link')

module.exports = { postSchema }
