const Joi = require('joi');

const deleteSchema =  Joi.object({
    user:Joi.string().max(15),
    // email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});


module.exports = deleteSchema;
