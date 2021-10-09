const httpStatusCodes = require("./httpsStatusCodes");

class NotFound extends Error {
    constructor(message) {
        super(message);
        this.name = "Not Found";
        this.statusCode = httpStatusCodes.NOT_FOUND;
    }
}

module.exports = NotFound;