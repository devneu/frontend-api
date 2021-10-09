const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const logger = require("./logger/winston");
const morgan = require("morgan");

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

app.use(logger());

morgan(':method :url :status :res[content-length] - :response-time ms');

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
    res.end();
});

app.use(async (err, req, res, next) => {
    console.log(err);
    res.json({
        error:err,
        message:err.message,
    });
});