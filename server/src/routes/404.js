const express = require('express');
const path = require('path');
const config = require('../../config');

const router = express.Router();

router.use((req, res) => {
  const message = 'Not found';

  res.format({
    text: () => res.status(404).send(message),
    html: () => res.status(404).sendFile(path.join(config.staticDirectory, '404.html')),
    json: () => res.status(404).send({ message }),
    default() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    },
  });
});

module.exports = router;
