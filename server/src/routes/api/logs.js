const express = require('express');
const config = require('../../../config');

const router = express.Router();

module.exports = (redisClient) => {
  const key = `${config.redis.prefix}:logs`;

  router.put('/', (req, res) => {
    const data = { ...req.body, serverCreatedAt: new Date() };
    redisClient.zadd(key, data.serverCreatedAt.getTime(), JSON.stringify(data), (err) => {
      if (err !== null) return res.status(500);
      res.sendStatus(200);
    });
  });

  router.get('/', (req, res) => {
    redisClient.zrangebyscore(key, '-inf', '+inf', (err, members) => {
      if (err !== null) return res.status(500);
      const logs = members.map(m => JSON.parse(m));
      res.json({ logs });
    });
  });

  return router;
};
