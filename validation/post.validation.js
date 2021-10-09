const post = require('./postShema');
const ValidationError = require("../customEror/ValidationError");

module.exports = {
  postValidationError: async (req, res, next) => {
      const value = await post.validate(req.body);
      if (value.error ) {
        next( new ValidationError("Validation error " + value.error.details[0].message));
      }else{
        next()
      }
  },
};
