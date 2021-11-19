const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const logger = require("./logger/winston");
const morgan = require("morgan");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const start  = async () =>{
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log(('Connected to db ')))
      .catch((error) => console.log((error)));

    app.listen(port, () => console.log(`listening port ${port}`));
};
start();

app.use(express.json());

app.use(logger());

app.use(morgan());

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
