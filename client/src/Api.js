import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Let's make answer closer to subject area
function processRequest(method, route, params, errorMessage = '') {
  return new Promise((resolve) => {
    instance[method].call(this, route, params)
      .then(data => resolve(null, data))
      .catch((e) => {
        if (errorMessage === '') {
          return resolve(e.message);
        }
        const error = new Error(`${errorMessage}: ${e.message}`);
        return resolve(error.message);
      });
  });
}

function createLog(type = 'login') {
  return processRequest('put', '/logs', { type, createdAt: new Date() }, 'Log creation failed');
}

function createData(title, text) {
  return processRequest('put', '/data', { title, text, createdAt: new Date() }, 'Data creation failed');
}

export default {
  createLog,
  createData,
};
export { createLog, createData };
