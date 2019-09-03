const express = require('express');
const path = require('path');
const config = require('../../config');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(config.config.staticDirectory, 'index.html'));
});

module.exports = router;
