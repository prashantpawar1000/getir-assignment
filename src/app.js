const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./routes/v1');
const { notfound } = require('./responses');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

app.use((req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json(notfound());
});

module.exports = app;