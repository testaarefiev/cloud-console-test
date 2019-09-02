const express = require('express');
const config = require('../../../config');

const router = express.Router();

module.exports = (redisClient) => {
  const key = `${config.redis.prefix}:data`;

  router.put('/', (req, res) => {
    const serverCreatedAt = new Date();
    const data = { ...req.body, serverCreatedAt };
    redisClient.zadd(key, serverCreatedAt.getTime(), JSON.stringify(data), (err) => {
      if (err !== null) return res.status(500);
      res.sendStatus(200);
    });
  });

  router.get('/', (req, res) => {
    redisClient.zrangebyscore(key, '-inf', '+inf', (err, members) => {
      if (err !== null) return res.status(500);
      const allData = members.map(m => JSON.parse(m));
      res.json({ allData });
    });
  });

  return router;
};
