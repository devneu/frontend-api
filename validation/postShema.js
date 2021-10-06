const Joi = require('joi');

const postSchema =  Joi.object({
    title:Joi.string().max(50).required(),
    author:Joi.string().max(20).required(),
    text:Joi.string().max(300).required(),
});


module.exports = postSchema;
