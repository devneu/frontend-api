const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const winston = require('winston');
const expressWinston = require('express-winston');
require('dotenv').config();

const app = express();
const Port = process.env.PORT || 3000;

const start  = async () =>{
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log(('Connected to db ')))
      .catch((error) => console.log((error)));

    app.listen(Port, () => console.log(`listening port ${Port}`));
};
start();

app.use(expressWinston.logger({
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
    ignoreRoute: ( req, res) => { return false; }
}));

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
    res.end();
});
