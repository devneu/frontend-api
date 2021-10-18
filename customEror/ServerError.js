const httpStatusCodes = require("./httpsStatusCodes");

class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = "Server Error";
        this.statusCode = httpStatusCodes.INTERNAL_SERVER;
    }
}

module.exports = ServerError;