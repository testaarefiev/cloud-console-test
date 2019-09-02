const express = require('express');

const router = express.Router();

module.exports = (redisClient) => {
  router.put('/', (req, res) => {
    res.sendStatus(200);
  });

  router.get('/', (req, res) => {
    res.json({ logs: [] });
  });

  return router;
};
