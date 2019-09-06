const cors = require('cors');
const config = require('../../config');

const corsOptions = {
  origin: config.cors.origin,
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
