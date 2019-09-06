const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const redis = require('redis');
const config = require('../config');

const app = express();
const redisClient = redis.createClient(config.redis.uri);

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.staticDirectory));

app.use('/', require('./routes/index'));
app.use('/api/logs', require('./routes/api/logs')(redisClient));
app.use('/api/data', require('./routes/api/data')(redisClient));
app.use(require('./routes/404'));

module.exports = app;
