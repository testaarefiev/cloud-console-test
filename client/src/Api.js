import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
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
      .then(data => resolve({ error: null, data: data.data }))
      .catch((e) => {
        if (errorMessage === '') {
          return resolve(e.message);
        }
        const error = new Error(`${errorMessage}: ${e.message}`);
        return resolve({ error: error.message });
      });
  });
}

export function createLog(type = 'login') {
  return processRequest('put', '/logs', { type, createdAt: new Date() }, 'Log creation failed');
}

export function createData(title, text) {
  return processRequest('put', '/data', { title, text, createdAt: new Date() }, 'Data creation failed');
}

export function getLogs() {
  return processRequest('get', '/logs', {}, 'Obtaining logs failed');
}

export function getAllData() {
  return processRequest('get', '/data', {}, 'Obtaining data failed');
}

export default {
  createLog,
  createData,
  getLogs,
  getAllData,
};
