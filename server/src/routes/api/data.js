const express = require('express');
const corsMiddleware = require('../../middlewares/cors');
const config = require('../../../config');

const router = express.Router();
const key = `${config.redis.prefix}:data`;

router.put('/', corsMiddleware, (req, res) => {
  const redisClient = req.app.store;
  const data = {
    serverCreatedAt: new Date(),
  };
  Object.assign(data, req.body);
  redisClient.zadd(key, data.serverCreatedAt.getTime(), JSON.stringify(data), (err) => {
    if (err !== null) return res.status(500);
    return res.sendStatus(201);
  });
});

router.get('/', corsMiddleware, (req, res) => {
  const redisClient = req.app.store;
  redisClient.zrangebyscore(key, '-inf', '+inf', (err, members) => {
    if (err !== null) return res.status(500);
    const allData = members.map((m) => JSON.parse(m));
    return res.json({ allData });
  });
});

module.exports = router;
