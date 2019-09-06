const path = require('path');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const redisKeyPrefix = process.env.NODE_ENV === 'test' ? 'cloud-console-test' : 'cloud-console';

module.exports = {
  port: normalizePort(process.env.PORT || '3000'),
  redis: {
    uri: process.env.REDIS_URI || 'redis://localhost:6379',
    prefix: redisKeyPrefix,
  },
  staticDirectory: path.join(__dirname, '../public'),
};
