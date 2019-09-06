const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const redis = require('redis');
const config = require('../config');

const app = express();
app.store = redis.createClient(config.redis.uri);

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.staticDirectory));

app.use('/', require('./routes/index'));
app.use('/api/logs', require('./routes/api/logs'));
app.use('/api/data', require('./routes/api/data'));
app.use(require('./routes/404'));

module.exports = app;
