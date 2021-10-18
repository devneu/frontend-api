const expressWinston = require("express-winston");
const winston = require("winston");


  const logger = () => expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: (req, res) => false
});

  module.exports = logger;