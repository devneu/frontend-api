const post = require('./postShema');

module.exports = {
  postValidationError: async (req, res, next) => {
    const value = await post.validate(req.body);
    if (value.error) {
      res.json({
          message: value.error.details[0].message,
        })
    } else {
      next();
    }
  },
};
